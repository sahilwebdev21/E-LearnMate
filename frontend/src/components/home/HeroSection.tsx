import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Learn from the Best Instructors
        </h1>
        <p className="text-lg mb-6">
          Join thousands of learners on E-LearnMate to upgrade your skills.
        </p>
        <Link href="/courses">
          <Button className="bg-white text-blue-600 font-semibold hover:bg-gray-200">
            Browse Courses
          </Button>
        </Link>
        <div className="mt-8">
          <img
            src="/images/hero.svg"
            alt="E-learning"
            className="mx-auto max-w-md"
          />
        </div>
      </div>
    </section>
  )
}
