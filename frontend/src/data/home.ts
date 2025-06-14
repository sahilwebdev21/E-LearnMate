// data/home.ts

export const categories = [
  { id: 1, name: 'Web Development', image: '/images/category/web.png' },
  { id: 2, name: 'Data Science', image: '/images/category/data.png' },
  { id: 3, name: 'Design', image: '/images/category/design.png' },
]

export const instructors = [
  {
    id: 1,
    name: 'John Doe',
    image: '/images/instructors/john.png',
    specialization: 'Frontend Developer',
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: '/images/instructors/jane.png',
    specialization: 'Data Analyst',
  },
]

export const featuredCourses = [
  {
    id: 1,
    title: 'Complete React Bootcamp',
    image: '/images/courses/react.png',
    price: 49,
    category: 'Web Development',
  },
  {
    id: 2,
    title: 'Python for Data Analysis',
    image: '/images/courses/python.png',
    price: 59,
    category: 'Data Science',
  },
  {
    id: 3,
    title: 'UI/UX Design Mastery',
    image: '/images/courses/design.png',
    price: 39,
    category: 'Design',
  },
]
