import { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { FaExclamationTriangle } from 'react-icons/fa'
import logo from "../../assets/images/logo-simug.png"

export default function AssignmentPage() {
  const navigate = useNavigate()
  const { phaseId } = useParams()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showMenu, setShowMenu] = useState(false)
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
      {/* Simple Header - Logo Left, Back & Menu Right */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-8xl mx-auto px-3 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/home" className="flex items-center gap-1.5 sm:gap-2">
            <img src={logo} alt="SiMUG Logo" className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />
            <span className="hidden xs:inline text-base sm:text-lg md:text-xl font-bold text-gray-900">SiMUG</span>
          </Link>

          {/* Back Button & Hamburger Menu - Right */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => navigate(-1)}
              className="cursor-pointer flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 md:px-6 py-2 sm:py-2.5 border-2 border-gray-300 rounded-lg sm:rounded-xl text-gray-600 hover:border-gray-400 hover:text-gray-700 transition-colors"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="hidden sm:inline text-sm sm:text-base font-medium">Kembali</span>
            </button>

            <button
              className="cursor-pointer p-2 sm:p-2.5 md:p-3 border-2 border-gray-300 rounded-lg sm:rounded-xl text-gray-600 hover:border-gray-400 hover:text-gray-700 transition-colors relative"
              onClick={() => setShowMenu(!showMenu)}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>

              {/* Dropdown Menu */}
              {showMenu && (
                <>
                  {/* Backdrop */}
                  <div
                    className="cursor-pointer fixed inset-0 z-40"
                    onClick={() => setShowMenu(false)}
                  ></div>

                  {/* Menu */}
                  <div className="absolute right-0 top-full mt-2 w-64 sm:w-72 bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden z-50">
                    {/* Bagikan URL */}
                    <button className="w-full flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 hover:bg-[#E3EBFF] transition-colors">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center border border-gray-200 flex-shrink-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#4177FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                      </div>
                      <span className="text-base sm:text-lg font-semibold text-gray-900">Bagikan URL</span>
                    </button>

                    {/* Laporkan */}
                    <button className="w-full flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 hover:bg-[#E3EBFF] transition-colors">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center border border-gray-200 flex-shrink-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#4177FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <span className="text-base sm:text-lg font-semibold text-gray-900">Laporkan</span>
                    </button>

                    {/* Beri Rating */}
                    <button className="w-full flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 hover:bg-[#E3EBFF] transition-colors">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center border border-gray-200 flex-shrink-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#4177FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      </div>
                      <span className="text-base sm:text-lg font-semibold text-gray-900">Beri Rating</span>
                    </button>

                    {/* Perbesar Layar */}
                    <button className="w-full flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 hover:bg-[#E3EBFF] transition-colors">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center border border-gray-200 flex-shrink-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#4177FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-base sm:text-lg font-semibold text-gray-900">Perbesar Layar</span>
                    </button>
                  </div>
                </>
              )}
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

      <div className="max-w-7xl mx-auto px-4 lg:px-8 lg:-mt-8 -mt-10 pb-12">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Timer Mobile */}
          <div className="flex items-center lg:hidden gap-4 lg:mb-8 p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center relative">
              <svg className="w-8 h-8 text-[#4177FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <div className="text-2xl font-semibold text-[#4177FF]">{formatTime(timeRemaining)}</div>
              <div className="text-sm text-gray-500">waktu yang tersisa</div>
            </div>
          </div>
          {/* Left - Question Card */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 lg:p-8 p-6">
              {/* Title */}
              <div className="flex items-center justify-between lg:mb-6 mb-4">
                <h2 className="lg:text-xl text-lg font-semibold lg:font-bold text-gray-900 flex items-center gap-2">
                  <span className="hidden lg:block w-1 h-8 bg-[#4177FF] rounded-full"></span>
                  Tugas 1 - Penguatan Otot Inti
                  <span className="hidden lg:block w-1 h-8 bg-[#4177FF] rounded-full"></span>
                </h2>
                <button className="cursor-pointer text-[#4177FF] text-sm lg:text-base font-semibold flex items-center gap-2">
                  <FaExclamationTriangle className="w-4 h-4" />
                  Laporkan Soal
                </button>
              </div>

              {/* Question Number Mobile*/}
              <div className="lg:hidden grid justify-center grid-cols-5 mb-5">
                {questions.map((q, index) => (
                  <button
                    key={q.id}
                    onClick={() => handleQuestionNavigation(index)}
                    className={`w-13 h-13 aspect-square rounded-xl font-medium text-xl transition-all border-2 ${currentQuestion === index
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
                    className={`cursor-pointer w-full text-left p-4 rounded-xl border-2 transition-all ${answers[currentQ.id] === index
                      ? 'border-[#4177FF] bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 flex-shrink-0 rounded-full border-2 flex items-center justify-center ${answers[currentQ.id] === index
                        ? 'border-[#4177FF] bg-[#4177FF]'
                        : 'border-gray-300'
                        }`}>
                        {answers[currentQ.id] === index && (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>
                      <span className={`text-base ${answers[currentQ.id] === index ? 'text-[#4177FF] font-medium' : 'text-gray-700'
                        }`}>
                        {option}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
              <div className="lg:hidden grid grid-cols-3 gap-3 mt-6">
                <button
                  onClick={handlePrev}
                  disabled={currentQuestion === 0}
                  className={`py-2 rounded-xl font-medium text-xl transition-colors border-2 ${currentQuestion === 0
                    ? 'bg-white text-gray-300 border-gray-200 cursor-not-allowed'
                    : 'bg-white text-[#4177FF] border-gray-200 hover:bg-blue-50'
                    }`}
                >
                  Prev
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentQuestion === questions.length - 1}
                  className={`py-2 rounded-xl font-medium text-xl transition-colors border-2 ${currentQuestion === questions.length - 1
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
                  className={`py-2 rounded-xl font-medium text-xl transition-all ${allQuestionsAnswered
                    ? 'bg-[#4177FF] text-white hover:bg-[#3461D9] shadow-lg'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>

          {/* Right - Timer & Navigation */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sticky top-24">
              {/* Timer */}
              <div className="flex items-center gap-4 mb-4 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center relative">
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
              <div className="grid grid-cols-5 gap-3 mb-4">
                {questions.map((q, index) => (
                  <button
                    key={q.id}
                    onClick={() => handleQuestionNavigation(index)}
                    className={`cursor-pointer w-full aspect-square rounded-xl font-bold text-2xl transition-all border-2 ${currentQuestion === index
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
                  className={`cursor-pointer py-4 rounded-xl font-bold text-xl transition-colors border-2 ${currentQuestion === 0
                    ? 'bg-white text-gray-300 border-gray-200 cursor-not-allowed'
                    : 'bg-white text-[#4177FF] border-gray-200 hover:bg-blue-50'
                    }`}
                >
                  Prev
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentQuestion === questions.length - 1}
                  className={`cursor-pointer py-4 rounded-xl font-bold text-xl transition-colors border-2 ${currentQuestion === questions.length - 1
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
                  className={`cursor-pointer py-4 rounded-xl font-bold text-xl transition-all ${allQuestionsAnswered
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
