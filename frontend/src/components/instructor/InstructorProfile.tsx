import { courses } from "@/data/courses"
import { CourseCard } from "../courses/CourseCard"

type Props = {
  name: string
  image: string
  bio: string
  instructorId: number
}

export const InstructorProfile = ({ name, image, bio, instructorId }: Props) => {
  const instructorCourses = courses.filter(c => c.instructorId === instructorId)

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-6 items-center mb-8">
        <img src={image} alt={name} className="w-40 h-40 object-cover rounded-full" />
        <div>
          <h1 className="text-3xl font-bold">{name}</h1>
          <p className="mt-2 text-gray-600">{bio}</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Courses by {name}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {instructorCourses.map(course => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  )
}
