import { CourseCard } from "@/components/courses/CourseCard"
import { CourseFilter } from "@/components/courses/CourseFilter"
import { Pagination } from "@/components/courses/Pagination"
import { courses } from "@/data/courses"

const CoursesPage = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Explore Courses</h1>

      <CourseFilter />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>

      <Pagination />
    </main>
  )
}

export default CoursesPage
