import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function PageTransition({ children }) {
  const location = useLocation()
  const [displayChildren, setDisplayChildren] = useState(children)
  const [transitionStage, setTransitionStage] = useState('fadeIn')

  useEffect(() => {
    if (children !== displayChildren) {
      setTransitionStage('fadeOut')
    }
  }, [children, displayChildren])

  const handleAnimationEnd = () => {
    if (transitionStage === 'fadeOut') {
      setDisplayChildren(children)
      setTransitionStage('fadeIn')
    }
  }

  return (
    <div
      className={`page-transition ${transitionStage}`}
      onAnimationEnd={handleAnimationEnd}
    >
      {displayChildren}
    </div>
  )
}
