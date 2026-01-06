import { useEffect, useRef, useState } from "react"

const DOTS = [
  { id: 1, size: 64, color: "#81A5FF" },
  { id: 2, size: 48, color: "#81A5FF" },
  { id: 3, size: 80, color: "#81A5FF" },
  { id: 4, size: 56, color: "#81A5FF" },
  { id: 5, size: 72, color: "#81A5FF" },
]

export default function FloatingDots() {
  const containerRef = useRef(null)
  const dotsRef = useRef([])
  const particlesRef = useRef([])
  const mouseRef = useRef({ x: 0, y: 0, prevX: 0, prevY: 0 })
  const draggedDotRef = useRef(null)
  const dragStartTimeRef = useRef(0)
  const lastClickTimeRef = useRef({})
  const [cursor, setCursor] = useState('default')

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const rect = container.getBoundingClientRect()

    // Initialize dots with random positions and velocities
    dotsRef.current = DOTS.map(dot => ({
      ...dot,
      x: Math.random() * rect.width,
      y: Math.random() * rect.height,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      isDragging: false,
      isPopping: false,
      popProgress: 0,
      respawnTimer: 0,
      isSpawning: false,
      spawnProgress: 0,
    }))

    const createParticles = (x, y, size, color) => {
      const particleCount = 12
      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount
        const speed = 3 + Math.random() * 2
        particlesRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: size / 8 + Math.random() * (size / 12),
          color,
          life: 1,
          decay: 0.02 + Math.random() * 0.01
        })
      }
    }

    const respawnDot = (dot, currentRect) => {
      // Spawn from random edge - start from outside the container
      const edge = Math.floor(Math.random() * 4)
      const spawnDistance = dot.size * 2 // Start further outside
      
      switch(edge) {
        case 0: // top
          dot.x = Math.random() * currentRect.width
          dot.y = -spawnDistance
          dot.vx = (Math.random() - 0.5) * 0.5
          dot.vy = 1 + Math.random() * 0.5 // Move inward
          break
        case 1: // right
          dot.x = currentRect.width + spawnDistance
          dot.y = Math.random() * currentRect.height
          dot.vx = -1 - Math.random() * 0.5 // Move inward
          dot.vy = (Math.random() - 0.5) * 0.5
          break
        case 2: // bottom
          dot.x = Math.random() * currentRect.width
          dot.y = currentRect.height + spawnDistance
          dot.vx = (Math.random() - 0.5) * 0.5
          dot.vy = -1 - Math.random() * 0.5 // Move inward
          break
        case 3: // left
          dot.x = -spawnDistance
          dot.y = Math.random() * currentRect.height
          dot.vx = 1 + Math.random() * 0.5 // Move inward
          dot.vy = (Math.random() - 0.5) * 0.5
          break
      }
      
      dot.isPopping = false
      dot.popProgress = 0
      dot.respawnTimer = 0
      dot.isSpawning = true
      dot.spawnProgress = 0
    }

    const handleMouseMove = e => {
      const currentRect = container.getBoundingClientRect()
      
      // Store previous position for velocity calculation
      mouseRef.current.prevX = mouseRef.current.x
      mouseRef.current.prevY = mouseRef.current.y
      
      mouseRef.current.x = e.clientX - currentRect.left
      mouseRef.current.y = e.clientY - currentRect.top

      // Update cursor style based on hover
      let isHovering = false
      dotsRef.current.forEach(dot => {
        if (dot.isPopping) return
        const dx = dot.x - mouseRef.current.x
        const dy = dot.y - mouseRef.current.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < dot.size / 2 + 10) {
          isHovering = true
        }
      })
      setCursor(isHovering && draggedDotRef.current === null ? 'grab' : draggedDotRef.current !== null ? 'grabbing' : 'default')

      // If dragging, update dot position
      if (draggedDotRef.current !== null) {
        const dot = dotsRef.current[draggedDotRef.current]
        if (dot.isPopping) return
        
        const currentRect = container.getBoundingClientRect()
        
        // Clamp position to stay within container bounds
        dot.x = Math.max(0, Math.min(currentRect.width, mouseRef.current.x))
        dot.y = Math.max(0, Math.min(currentRect.height, mouseRef.current.y))
        
        dot.vx = 0
        dot.vy = 0
        setCursor('grabbing')
      }
    }

    const handleMouseDown = e => {
      const currentRect = container.getBoundingClientRect()
      const mouseX = e.clientX - currentRect.left
      const mouseY = e.clientY - currentRect.top
      const currentTime = Date.now()

      // Check if clicking on a dot
      dotsRef.current.forEach((dot, index) => {
        if (dot.isPopping) return
        
        const dx = dot.x - mouseX
        const dy = dot.y - mouseY
        const dist = Math.sqrt(dx * dx + dy * dy)
        
        if (dist < dot.size / 2 + 10) {
          // Check for double click
          const lastClickTime = lastClickTimeRef.current[index] || 0
          if (currentTime - lastClickTime < 300) {
            // Double click detected - pop the bubble!
            dot.isPopping = true
            dot.popProgress = 0
            createParticles(dot.x, dot.y, dot.size, dot.color)
            draggedDotRef.current = null
          } else {
            // Single click - start dragging
            draggedDotRef.current = index
            dragStartTimeRef.current = currentTime
            dot.isDragging = true
            
            // Reset velocity tracking
            mouseRef.current.prevX = mouseX
            mouseRef.current.prevY = mouseY
            
            setCursor('grabbing')
          }
          
          lastClickTimeRef.current[index] = currentTime
        }
      })
    }

    const handleMouseUp = () => {
      if (draggedDotRef.current !== null) {
        const dot = dotsRef.current[draggedDotRef.current]
        if (dot.isPopping) return
        
        dot.isDragging = false
        
        // Calculate throw velocity based on mouse movement
        const deltaTime = Date.now() - dragStartTimeRef.current
        const velocityMultiplier = Math.min(deltaTime / 100, 3)
        
        const deltaX = mouseRef.current.x - mouseRef.current.prevX
        const deltaY = mouseRef.current.y - mouseRef.current.prevY
        
        // Apply throw velocity
        dot.vx = deltaX * 0.8 * velocityMultiplier
        dot.vy = deltaY * 0.8 * velocityMultiplier
        
        // Add some randomness
        dot.vx += (Math.random() - 0.5) * 0.5
        dot.vy += (Math.random() - 0.5) * 0.5
        
        draggedDotRef.current = null
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    let raf
    const animate = () => {
      const currentRect = container.getBoundingClientRect()
      
      // Update dots
      dotsRef.current.forEach((dot, index) => {
        // Handle spawning animation
        if (dot.isSpawning) {
          dot.spawnProgress += 0.02
          if (dot.spawnProgress >= 1) {
            dot.isSpawning = false
            dot.spawnProgress = 1
          }
        }
        
        // Handle popping animation
        if (dot.isPopping) {
          dot.popProgress += 0.05
          if (dot.popProgress >= 1) {
            dot.respawnTimer += 1
            if (dot.respawnTimer > 60) { // Respawn after 1 second
              respawnDot(dot, currentRect)
            }
          }
          return
        }
        
        // Skip physics if being dragged
        if (dot.isDragging) return

        // Calculate current speed
        const speed = Math.sqrt(dot.vx * dot.vx + dot.vy * dot.vy)

        // If moving slowly (idle state), apply gentle floating animation
        if (speed < 2) {
          // More active floating effect - like bubbles in water
          const time = Date.now() / 1000
          const floatX = Math.sin(time * 1.2 + index * 2) * 0.8
          const floatY = Math.cos(time * 0.8 + index * 1.5) * 0.8
          
          // Add secondary wave for more organic movement
          const floatX2 = Math.sin(time * 0.6 + index) * 0.4
          const floatY2 = Math.cos(time * 1.5 + index * 0.5) * 0.4
          
          dot.vx += floatX + floatX2
          dot.vy += floatY + floatY2
        }
        // No gravity - anti-gravity effect, dots keep floating

        // Update position
        dot.x += dot.vx
        dot.y += dot.vy

        // Apply friction (air resistance)
        dot.vx *= 0.995
        dot.vy *= 0.995

        // Bounce off walls with energy loss
        const bounceEnergy = 0.7
        
        // Left and right walls
        if (dot.x < 0) {
          dot.x = 0
          dot.vx = Math.abs(dot.vx) * bounceEnergy
        } else if (dot.x > currentRect.width) {
          dot.x = currentRect.width
          dot.vx = -Math.abs(dot.vx) * bounceEnergy
        }
        
        // Top and bottom walls
        if (dot.y < 0) {
          dot.y = 0
          dot.vy = Math.abs(dot.vy) * bounceEnergy
        } else if (dot.y > currentRect.height) {
          dot.y = currentRect.height
          dot.vy = -Math.abs(dot.vy) * bounceEnergy
          
          if (speed > 2) {
            dot.vx += (Math.random() - 0.5) * 0.3
          }
        }

        // Gentle velocity limits for floating state
        if (speed < 2) {
          const maxFloatSpeed = 2.5
          if (Math.abs(dot.vx) > maxFloatSpeed) dot.vx *= 0.9
          if (Math.abs(dot.vy) > maxFloatSpeed) dot.vy *= 0.9
        }
      })

      // Update particles
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.vx *= 0.95
        particle.vy *= 0.95
        particle.life -= particle.decay
        return particle.life > 0
      })

      // Update DOM - Dots
      const dotsEl = container.querySelectorAll(".dot")
      dotsRef.current.forEach((dot, i) => {
        const el = dotsEl[i]
        if (!el) return
        
        if (dot.isPopping) {
          // Pop animation - scale up and fade out
          const scale = 1 + dot.popProgress * 0.3
          const opacity = Math.max(0, 0.4 - dot.popProgress * 0.4)
          el.style.opacity = opacity
          el.style.transform = `translate(-50%, -50%) scale(${scale})`
          el.style.filter = `blur(${dot.popProgress * 3}px)`
        } else if (dot.respawnTimer > 0 && !dot.isSpawning) {
          // Hidden during respawn delay
          el.style.opacity = 0
        } else if (dot.isSpawning) {
          // Spawn animation - fade in and slide in from edge
          const opacity = 0.4 * dot.spawnProgress
          const scale = 0.5 + (0.5 * dot.spawnProgress) // Start small, grow to normal
          el.style.left = `${dot.x}px`
          el.style.top = `${dot.y}px`
          el.style.opacity = opacity
          el.style.transform = `translate(-50%, -50%) scale(${scale})`
          el.style.filter = `blur(${(1 - dot.spawnProgress) * 2}px)`
        } else {
          el.style.left = `${dot.x}px`
          el.style.top = `${dot.y}px`
          el.style.opacity = 0.4
          el.style.filter = "blur(0.5px)"
          
          // Squash and stretch effect
          const speed = Math.sqrt(dot.vx * dot.vx + dot.vy * dot.vy)
          const squash = Math.min(speed / 20, 0.2)
          
          if (dot.isDragging) {
            el.style.transform = 'translate(-50%, -50%) scale(1.1)'
          } else if (speed > 2) {
            const angle = Math.atan2(dot.vy, dot.vx)
            el.style.transform = `translate(-50%, -50%) scale(${1 + squash}, ${1 - squash}) rotate(${angle}rad)`
          } else {
            el.style.transform = 'translate(-50%, -50%) scale(1)'
          }
        }
      })

      // Update DOM - Particles
      const particlesContainer = container.querySelector('.particles-container')
      if (particlesContainer) {
        particlesContainer.innerHTML = ''
        particlesRef.current.forEach(particle => {
          const particleEl = document.createElement('div')
          particleEl.className = 'particle'
          particleEl.style.cssText = `
            position: absolute;
            left: ${particle.x}px;
            top: ${particle.y}px;
            width: ${particle.size}px;
            height: ${particle.size}px;
            background-color: ${particle.color};
            border-radius: 50%;
            opacity: ${particle.life};
            transform: translate(-50%, -50%);
            pointer-events: none;
          `
          particlesContainer.appendChild(particleEl)
        })
      }

      raf = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 overflow-hidden"
      style={{ cursor }}
    >
      {DOTS.map(dot => (
        <div
          key={dot.id}
          data-dot={dot.id}
          className="dot absolute rounded-full opacity-40 pointer-events-auto"
          style={{
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            backgroundColor: dot.color,
            filter: "blur(0.5px)",
            transform: "translate(-50%, -50%)",
            transition: "transform 0.1s ease-out",
            cursor: 'grab'
          }}
        />
      ))}
      <div className="particles-container absolute inset-0 pointer-events-none" />
    </div>
  )
}
