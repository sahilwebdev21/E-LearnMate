export const CourseFilter = () => (
  <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    <input type="text" placeholder="Search by name..." className="px-4 py-2 border rounded" />
    <select className="px-4 py-2 border rounded">
      <option>All Categories</option>
      <option>Web Dev</option>
      <option>Data Science</option>
      <option>Design</option>
    </select>
    <select className="px-4 py-2 border rounded">
      <option>Sort by Price</option>
      <option>Low to High</option>
      <option>High to Low</option>
    </select>
  </div>
)
