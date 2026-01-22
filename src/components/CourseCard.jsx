export default function CourseCard({
  image,
  title,
  instructor,
  date,
  rating,
  ratingCount,
  materialsCount,
  duration,
  level,
  price,
  hasFreeTrial = true
}) {
  return (
    <div className="bg-white p-2 border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      <div className="relative">
        <img src={image} alt={title} className="rounded-xl w-full h-37 border border-gray-200 object-cover" />
        {hasFreeTrial && (
          <span className="absolute top-3 right-3 bg-white text-gray-900 text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            Free Trial
          </span>
        )}
      </div>
      <div className="p-1">
        <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[3rem]">
          {title}
        </h3>
        <p className="text-xs text-gray-500 mb-3">{instructor} • {date}</p>

        <div className="flex items-center gap-1 mb-2 text-xs text-gray-600">
          <div className="border border-gray-200 rounded-lg px-2 py-1 flex items-center gap-1">
            <span className="text-yellow-500">⭐</span>
            <span className="font-semibold">{rating}</span>
          </div>
          <span className="border border-gray-200 rounded-lg px-2 py-1">{ratingCount}</span>
          <span className="border border-gray-200 rounded-lg px-2 py-1">{materialsCount}</span>
        </div>

        <div className="flex items-center gap-1 mb-4 text-xs text-gray-600">
          <span className="border border-gray-200 rounded-lg px-2 py-1">{duration}</span>
          <span className="border border-gray-200 rounded-lg px-2 py-1">{level}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-blue-600 font-bold text-lg">{price}</span>
          <button className="px-3 py-2 bg-blue-200 rounded-lg flex items-center gap-1 text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Detail
          </button>
        </div>
      </div>
    </div>
  )
}
