'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import axios from '@/lib/axios'
import { CourseCard } from '@/components/courses/CourseCard'

type Course = {
  id: number
  title: string
  image: string
  category: { name: string }
  price: number
}

type Instructor = {
  id: number
  user: string
  bio: string
  image: string
  courses: Course[]
}

const InstructorDetailPage = () => {
  const params = useParams()
  const [instructor, setInstructor] = useState<Instructor | null>(null)

  useEffect(() => {
    if (!params?.id) return
    axios.get(`/instructors/${params.id}/`).then((res) => {
      setInstructor(res.data)
    })
  }, [params?.id])

  if (!instructor) return <p>Loading...</p>

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <img
          src={instructor.image}
          alt="Instructor"
          className="w-48 h-48 object-cover rounded-full"
        />
        <div>
          <h2 className="text-3xl font-bold">{instructor.user}</h2>
          <p className="mt-2 text-gray-600">{instructor.bio}</p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Courses by {instructor.user}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {instructor.courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </main>
  )
}

export default InstructorDetailPage
