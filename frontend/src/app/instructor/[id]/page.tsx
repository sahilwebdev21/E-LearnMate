import { instructors } from "@/data/instructors"
import { InstructorProfile } from "@/components/instructor/InstructorProfile"

type Props = {
  params: { id: string }
}

export default function InstructorDetailPage({ params }: Props) {
  const id = parseInt(params.id)
  const instructor = instructors.find(i => i.id === id)

  if (!instructor) return <p>Instructor not found</p>

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <InstructorProfile
        name={instructor.name}
        image={instructor.image}
        bio={instructor.bio}
        instructorId={instructor.id}
      />
    </main>
  )
}
