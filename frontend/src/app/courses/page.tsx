'use client';

import CourseCard from '@/components/CourseCard';

const courses = [
  {
    title: 'Web Development Bootcamp',
    description: 'Learn HTML, CSS, JS, and React from scratch.',
    image: '/images/webdev.jpg',
    slug: 'web-development-bootcamp',
    price: 999,
  },
  {
    title: 'Python for Beginners',
    description: 'Master Python programming step by step.',
    image: '/images/python.jpg',
    slug: 'python-for-beginners',
    price: 799,
  },
  {
    title: 'MERN Stack Mastery',
    description: 'Become a full-stack developer using MongoDB, Express, React, Node.',
    image: '/images/mern.jpg',
    slug: 'mern-stack-mastery',
    price: 1299,
  }
];

export default function CoursesPage() {
  return (
    <section className="el-courses-section">
      <h1 className="el-courses-title">All Courses</h1>
      <div className="el-courses-grid">
        {courses.map((course) => (
          <CourseCard key={course.slug} {...course} />
        ))}
      </div>
    </section>
  );
}