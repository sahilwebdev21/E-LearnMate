'use client'

import { useEffect, useState } from "react"
import { CourseCard } from "@/components/courses/CourseCard"
import { CourseFilter } from "@/components/courses/CourseFilter"
import { Pagination } from "@/components/courses/Pagination"
import axios from "@/lib/axios"

type Course = {
  id: number
  title: string
  image: string
  price: number
  category: { name: string }
}

const CoursesPage = () => {
  const [courses, setCourses] = useState<Course[]>([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const fetchCourses = async () => {
    try {
      const res = await axios.get("/courses/", {
        params: { page },
      })
      setCourses(res.data.results)
      setTotalPages(Math.ceil(res.data.count / 10)) // backend returns count
    } catch (err) {
      console.error("Failed to fetch courses", err)
    }
  }

  useEffect(() => {
    fetchCourses()
  }, [page])

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Explore Courses</h1>

      <CourseFilter />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>

      <Pagination currentPage={page} setPage={setPage} totalPages={totalPages} />
    </main>
  )
}

export default CoursesPage
