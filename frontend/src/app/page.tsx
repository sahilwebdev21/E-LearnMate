import { CategoryCard } from "@/components/home/CategoryCard";
import { HeroSection } from "@/components/home/HeroSection";
import { InstructorCard } from "@/components/home/InstructorCard";
import { categories, instructors } from '@/data/home'

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Popular Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
      </section>

      {/* Instructor Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Top Instructors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {instructors.map((instructor) => (
            <InstructorCard key={instructor.id} {...instructor} />
          ))}
        </div>
      </section>
    </>
  );
}
