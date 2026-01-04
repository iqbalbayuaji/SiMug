import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Step1 from "./register-steps/Step1"
import Step2 from "./register-steps/Step2"
import Step3 from "./register-steps/Step3"
import Step4 from "./register-steps/Step4"
import VerificationPage from "./VerificationPage"

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [showVerification, setShowVerification] = useState(false)
  const totalSteps = 4
  const navigate = useNavigate()
  
  // Step 1 - Form Data
  const [formData, setFormData] = useState({
    namaLengkap: "",
    email: "",
    noTelp: "",
    password: "",
    konfirmasiPassword: ""
  })
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  
  // Step 2 - Goal Selection
  const [selectedGoal, setSelectedGoal] = useState("")
  const [testimonialSlide, setTestimonialSlide] = useState(0)

  // Step 3 - Interest Selection
  const [selectedInterest, setSelectedInterest] = useState("")

  // Step 4 - Learning Method Selection
  const [selectedMethod, setSelectedMethod] = useState("")

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleComplete = () => {
    // Handle registration completion
    console.log("Registration completed!", {
      formData,
      selectedGoal,
      selectedInterest,
      selectedMethod
    })
    // Show verification page
    setShowVerification(true)
  }

  // If showing verification page, render it
  if (showVerification) {
    return <VerificationPage />
  }

  const getStepLabel = (step) => {
    switch(step) {
      case 1: return "Informasi Pengguna"
      case 2: return "Tujuan Penggunaan"
      case 3: return "Minat Pengguna"
      case 4: return "Metode Pembelajaran"
      default: return ""
    }
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {currentStep === 1 && (
        <Step1
          formData={formData}
          handleInputChange={handleInputChange}
          agreeToTerms={agreeToTerms}
          setAgreeToTerms={setAgreeToTerms}
          handleNextStep={handleNextStep}
          currentStep={currentStep}
          totalSteps={totalSteps}
          getStepLabel={getStepLabel}
        />
      )}

      {currentStep === 2 && (
        <Step2
          selectedGoal={selectedGoal}
          setSelectedGoal={setSelectedGoal}
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
          currentStep={currentStep}
          totalSteps={totalSteps}
          getStepLabel={getStepLabel}
          testimonialSlide={testimonialSlide}
          setTestimonialSlide={setTestimonialSlide}
        />
      )}

      {currentStep === 3 && (
        <Step3
          selectedInterest={selectedInterest}
          setSelectedInterest={setSelectedInterest}
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
          currentStep={currentStep}
          totalSteps={totalSteps}
          getStepLabel={getStepLabel}
          testimonialSlide={testimonialSlide}
          setTestimonialSlide={setTestimonialSlide}
        />
      )}

      {currentStep === 4 && (
        <Step4
          selectedMethod={selectedMethod}
          setSelectedMethod={setSelectedMethod}
          handleComplete={handleComplete}
          handlePrevStep={handlePrevStep}
          currentStep={currentStep}
          totalSteps={totalSteps}
          getStepLabel={getStepLabel}
          testimonialSlide={testimonialSlide}
          setTestimonialSlide={setTestimonialSlide}
        />
      )}
    </div>
  )
}
