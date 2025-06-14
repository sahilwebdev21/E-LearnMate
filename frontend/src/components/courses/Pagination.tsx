type Props = {
  currentPage: number
  totalPages: number
  setPage: (page: number) => void
}

export const Pagination = ({ currentPage, totalPages, setPage }: Props) => {
  return (
    <div className="mt-6 flex justify-center gap-2">
      {Array.from({ length: totalPages }).map((_, index) => {
        const page = index + 1
        return (
          <button
            key={page}
            onClick={() => setPage(page)}
            className={`px-3 py-1 rounded ${currentPage === page ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          >
            {page}
          </button>
        )
      })}
    </div>
  )
}
