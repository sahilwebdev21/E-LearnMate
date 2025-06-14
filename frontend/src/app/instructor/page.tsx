import { instructors } from "@/data/instructors"
import { InstructorCard } from "@/components/instructor/InstructorCard"

export default function InstructorPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Instructors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {instructors.map(inst => (
          <InstructorCard key={inst.id} {...inst} />
        ))}
      </div>
    </main>
  )
}
