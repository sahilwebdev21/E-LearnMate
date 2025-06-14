import { CategoryCard } from "@/components/home/CategoryCard";
import { FeaturedCourseCard } from "@/components/home/FeaturedCourseCard";
import { HeroSection } from "@/components/home/HeroSection";
import { InstructorCard } from "@/components/home/InstructorCard";
import { Newsletter } from "@/components/home/Newsletter";
import { categories, instructors, featuredCourses } from "@/data/home";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Popular Categories
        </h2>
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

      {/* Featured Courses */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Trending Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredCourses.map((course) => (
            <FeaturedCourseCard key={course.id} {...course} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </>
  );
}
