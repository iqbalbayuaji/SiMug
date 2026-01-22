import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function AssignmentPage() {
  const navigate = useNavigate()
  const { phaseId } = useParams()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [timeRemaining, setTimeRemaining] = useState(59 * 60) // 59 minutes in seconds
  const [showResultPopup, setShowResultPopup] = useState(false)
  const [score, setScore] = useState(0)

  // Mock questions data
  const questions = [
    {
      id: 1,
      question: 'Dalam konteks latihan kebugaran, otot inti (core muscle) memiliki peran penting dalam menopang tubuh. Yang dimaksud dengan otot inti adalah?',
      options: [
        'Otot yang hanya berfungsi untuk menggerakkan lengan dan bahu',
        'Otot yang berada di bagian kaki dan membantu saat berlari',
        'Otot yang berperan dalam menjaga keseimbangan tubuh bagian tengah',
        'Otot yang hanya aktif saat melakukan latihan beban berat',
        'Otot yang berfungsi mempercepat pembakaran lemak'
      ]
    },
    {
      id: 2,
      question: 'Apa manfaat utama dari melakukan pemanasan sebelum latihan otot inti?',
      options: [
        'Meningkatkan massa otot secara langsung',
        'Mengurangi risiko cedera dan mempersiapkan otot',
        'Membakar kalori lebih banyak',
        'Meningkatkan fleksibilitas permanen',
        'Mengurangi waktu latihan yang diperlukan'
      ]
    },
    {
      id: 3,
      question: 'Latihan plank termasuk dalam kategori latihan otot inti. Apa fokus utama dari latihan plank?',
      options: [
        'Melatih kekuatan lengan',
        'Meningkatkan daya tahan kardiovaskular',
        'Memperkuat otot perut dan punggung',
        'Melatih kelenturan kaki',
        'Meningkatkan kecepatan lari'
      ]
    },
    {
      id: 4,
      question: 'Berapa lama waktu ideal untuk menahan posisi plank bagi pemula?',
      options: [
        '5-10 detik',
        '20-30 detik',
        '1-2 menit',
        '5 menit',
        'Sampai tidak kuat'
      ]
    },
    {
      id: 5,
      question: 'Apa kesalahan umum yang sering terjadi saat melakukan latihan otot inti?',
      options: [
        'Bernapas terlalu cepat',
        'Postur tubuh yang tidak tepat',
        'Menggunakan matras yang terlalu tebal',
        'Melakukan latihan terlalu lambat',
        'Minum air terlalu banyak'
      ]
    }
  ]

  // Timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 0) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')} menit`
  }

  const handleAnswerSelect = (questionId, optionIndex) => {
    setAnswers({
      ...answers,
      [questionId]: optionIndex
    })
  }

  const handleQuestionNavigation = (index) => {
    setCurrentQuestion(index)
  }

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handleSubmit = () => {
    // Calculate score (for demo, let's assume all answers are correct)
    const calculatedScore = 100
    setScore(calculatedScore)
    setShowResultPopup(true)
  }

  const allQuestionsAnswered = questions.every(q => answers[q.id] !== undefined)
  const currentQ = questions[currentQuestion]

  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#4177FF] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold text-gray-900">SiMUG</span>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 px-6 py-2.5 border-2 border-gray-300 rounded-xl text-gray-600 hover:border-gray-400 hover:text-gray-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-base font-medium">Kembali</span>
            </button>
            
            <button className="p-3 border-2 border-gray-300 rounded-xl text-gray-600 hover:border-gray-400 hover:text-gray-700 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Blue Wave Background */}
      <div className="relative bg-gradient-to-r from-[#4177FF] to-[#5B8FFF] h-24 overflow-hidden mb-16">
        {/* Decorative shapes */}
        <div className="absolute inset-0">
          {/* Large diagonal shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-white/5 rounded-full translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 -mt-8 pb-12">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left - Question Card */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              {/* Title */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <span className="w-2 h-8 bg-[#4177FF] rounded-full"></span>
                  Tugas 1 - Penguatan Otot Inti
                  <span className="w-2 h-8 bg-[#4177FF] rounded-full"></span>
                </h2>
                <button className="text-[#4177FF] text-sm font-semibold flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Laporkan Soal
                </button>
              </div>

              {/* Question Number */}
              <div className="bg-blue-50 rounded-xl px-4 py-2 inline-block mb-6">
                <span className="text-[#4177FF] font-semibold">Pertanyaan {currentQ.id}</span>
              </div>

              {/* Question Text */}
              <p className="text-gray-800 text-lg mb-2 leading-relaxed">
                {currentQ.question}
              </p>
              <p className="text-gray-500 text-sm mb-6">Pilih salah satu opsi dibawah ini</p>

              {/* Options */}
              <div className="space-y-3">
                {currentQ.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(currentQ.id, index)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                      answers[currentQ.id] === index
                        ? 'border-[#4177FF] bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        answers[currentQ.id] === index
                          ? 'border-[#4177FF] bg-[#4177FF]'
                          : 'border-gray-300'
                      }`}>
                        {answers[currentQ.id] === index && (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>
                      <span className={`text-base ${
                        answers[currentQ.id] === index ? 'text-[#4177FF] font-medium' : 'text-gray-700'
                      }`}>
                        {option}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Timer & Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-6 sticky top-24">
              {/* Timer */}
              <div className="flex items-center gap-4 mb-8 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl border border-blue-200">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center relative">
                  <svg className="w-8 h-8 text-[#4177FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#4177FF]">{formatTime(timeRemaining)}</div>
                  <div className="text-sm text-gray-500">waktu yang tersisa</div>
                </div>
              </div>

              {/* Question Numbers */}
              <div className="grid grid-cols-5 gap-3 mb-8">
                {questions.map((q, index) => (
                  <button
                    key={q.id}
                    onClick={() => handleQuestionNavigation(index)}
                    className={`w-full aspect-square rounded-2xl font-bold text-2xl transition-all border-2 ${
                      currentQuestion === index
                        ? 'bg-blue-100 text-[#4177FF] border-blue-200'
                        : answers[q.id] !== undefined
                        ? 'bg-white text-[#4177FF] border-gray-200'
                        : 'bg-white text-gray-300 border-gray-200'
                    }`}
                  >
                    {q.id}
                  </button>
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={handlePrev}
                  disabled={currentQuestion === 0}
                  className={`py-4 rounded-2xl font-bold text-xl transition-colors border-2 ${
                    currentQuestion === 0
                      ? 'bg-white text-gray-300 border-gray-200 cursor-not-allowed'
                      : 'bg-white text-[#4177FF] border-gray-200 hover:bg-blue-50'
                  }`}
                >
                  Prev
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentQuestion === questions.length - 1}
                  className={`py-4 rounded-2xl font-bold text-xl transition-colors border-2 ${
                    currentQuestion === questions.length - 1
                      ? 'bg-white text-gray-300 border-gray-200 cursor-not-allowed'
                      : 'bg-white text-[#4177FF] border-gray-200 hover:bg-blue-50'
                  }`}
                >
                  Next
                </button>
                
                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={!allQuestionsAnswered}
                  className={`py-4 rounded-2xl font-bold text-xl transition-all ${
                    allQuestionsAnswered
                      ? 'bg-[#4177FF] text-white hover:bg-[#3461D9] shadow-lg'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Result Popup */}
      {showResultPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 relative text-center">
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                  <div className="w-20 h-20 bg-[#4177FF] rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-blue-400 rounded-full blur-xl opacity-30 -z-10"></div>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Selamat, Kamu Lolos!
            </h3>

            {/* Description */}
            <p className="text-gray-500 mb-6">
              Kamu telah berhasil menyelesaikan tugas 1 dan mendapatkan nilai yang memuaskan.
            </p>

            {/* Score */}
            <div className="mb-8">
              <span className="text-[#4177FF] text-lg font-regular">Nilai Kamu : </span>
              <span className="text-[#4177FF] text-xl font-bold">{score}</span>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowResultPopup(false)
                  // Could show review or stay on page
                }}
                className="flex-1 py-2.5 bg-blue-100 text-[#4177FF] font-bold text-base rounded-full hover:bg-blue-200 transition-colors"
              >
                Ulangi
              </button>
              <button
                onClick={() => {
                  setShowResultPopup(false)
                  navigate(-1)
                }}
                className="flex-1 py-2.5 px-6 bg-[#4177FF] text-white font-bold text-base rounded-full hover:bg-[#3461D9] transition-colors"
              >
                Kembali ke Kursus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
