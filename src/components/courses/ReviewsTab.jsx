import { FaStar, FaQuoteLeft } from 'react-icons/fa'

export default function ReviewsTab({ course }) {
  const ratingBreakdown = {
    5: 75,
    4: 15,
    3: 7,
    2: 2,
    1: 1,
  }

  return (
    <div className="py-2 px-3">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-500/30">
          <FaStar className="text-white text-xl" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Rating & Reviews</h2>
      </div>

      {/* Rating Summary - Modern Card */}
      <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 rounded-3xl p-8 mb-10 border border-yellow-100/50">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="text-center md:text-left md:border-r md:border-yellow-200/50 md:pr-8">
            <div className="text-7xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-2">
              {course.rating}
            </div>
            <div className="flex items-center justify-center md:justify-start gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className={`w-6 h-6 ${star <= Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <p className="text-gray-500 font-medium">{course.totalRatings.toLocaleString()} ulasan</p>
          </div>

          {/* Rating Bars */}
          <div className="flex-1 space-y-3">
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="flex items-center gap-4">
                <span className="w-12 text-sm text-gray-600 flex items-center gap-1.5 font-medium">
                  {star} <FaStar className="text-yellow-400 text-xs" />
                </span>
                <div className="flex-1 h-3 bg-white rounded-full overflow-hidden shadow-inner">
                  <div
                    className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all duration-700"
                    style={{ width: `${ratingBreakdown[star]}%` }}
                  ></div>
                </div>
                <span className="w-14 text-sm text-gray-500 text-right font-medium">{ratingBreakdown[star]}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {course.reviews.map((review) => (
          <div
            key={review.id}
            className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:shadow-gray-100/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="relative">
                <img
                  src={review.avatar}
                  alt={review.user}
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-md"
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h4 className="font-bold text-gray-900">{review.user}</h4>
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar
                        key={star}
                        className={`w-4 h-4 ${star <= review.rating ? 'text-yellow-400' : 'text-gray-200'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-400 bg-gray-100 px-3 py-1 rounded-full">{review.date}</span>
                </div>
                <div className="relative">
                  <FaQuoteLeft className="absolute -top-1 -left-1 text-[#4177ff]/20 text-2xl" />
                  <p className="text-gray-600 pl-6">{review.comment}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {course.reviews.length === 0 && (
        <div className="text-center py-16">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaStar className="text-gray-300 text-3xl" />
          </div>
          <p className="text-gray-500 font-medium">Belum ada review untuk course ini.</p>
          <p className="text-gray-400 text-sm mt-1">Jadilah yang pertama memberikan review!</p>
        </div>
      )}
    </div>
  )
}
