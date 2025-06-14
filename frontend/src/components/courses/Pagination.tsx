export const Pagination = () => (
  <div className="mt-8 flex justify-center gap-2">
    {Array.from({ length: 4 }).map((_, i) => (
      <button
        key={i}
        className="px-4 py-2 rounded border border-gray-300 hover:bg-indigo-500 hover:text-white"
      >
        {i + 1}
      </button>
    ))}
  </div>
)
