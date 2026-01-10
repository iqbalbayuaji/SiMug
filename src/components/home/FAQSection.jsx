import { useState } from "react"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Apakah semua course di SiMug berbayar?",
      answer: "Tidak semua course di SiMug berbayar. Kami menyediakan beberapa course gratis untuk membantu Anda memulai perjalanan fitness. Namun, untuk akses penuh ke semua fitur dan materi premium, tersedia paket berlangganan dengan harga terjangkau."
    },
    {
      question: "Apakah saya mendapatkan sertifikat setelah menyelesaikan course?",
      answer: "Ya, setelah menyelesaikan course dan lulus ujian akhir, Anda akan mendapatkan sertifikat digital yang dapat diunduh dan dibagikan di media sosial atau LinkedIn Anda."
    },
    {
      question: "Bagaimana sistem event di SiMug bekerja?",
      answer: "Event di SiMug dirancang untuk memotivasi dan menghubungkan komunitas. Anda dapat mendaftar event melalui platform, mengikuti challenge, dan berkompetisi dengan member lain. Setiap event memiliki reward menarik untuk para pemenang."
    },
    {
      question: "Apakah saya harus aktif setiap hari untuk menggunakan SiMug?",
      answer: "Tidak harus! SiMug dirancang fleksibel sesuai dengan jadwal Anda. Anda dapat belajar dengan kecepatan Anda sendiri dan mengakses materi kapan saja. Namun, konsistensi akan membantu Anda mencapai hasil yang lebih baik."
    },
    {
      question: "Apa saja benefit menyelesaikan course selain mendapat sertifikat?",
      answer: "Selain sertifikat, Anda akan mendapatkan akses ke komunitas eksklusif, diskon untuk event berbayar, badge achievement di profil Anda, dan kesempatan untuk menjadi mentor bagi member baru."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Decorative Circle - Top Left */}
      <div className="absolute left-0 top-32 w-40 h-40 bg-[#C8D7FF] rounded-full -translate-x-24"></div>

      {/* Decorative Circle - Middle Right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48 bg-[#C8D7FF] rounded-full translate-x-36"></div>

      <div className="w-full px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#4177FF]"></div>
              <h2 className="text-2xl font-bold text-gray-900">FAQ's</h2>
              <div className="w-8 h-0.5 bg-[#4177FF]"></div>
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Masih ngerasa bingung pakai <span className="text-[#4177FF]">SiMug?</span>
            </h3>
            <p className="text-gray-600">
              Tenang aja, ini adalah beberapa pertanyaan yang sering diajukan
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#EBF1FF] rounded-4xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-3 text-left hover:bg-[#E5ECFF] transition-colors"
                >
                  <span className="text-gray-900 font-medium pl-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 w-10 h-10 bg-[#4177FF] rounded-full flex items-center justify-center">
                    <svg
                      className={`w-6 h-6 text-white transition-transform ${
                        openIndex === index ? "rotate-45" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
