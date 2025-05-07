'use client';

const courses = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    instructor: 'Sahil Sharma',
    image: '/courses/webdev.jpg',
    rating: 4.8,
    price: '₹499',
  },
  {
    id: 2,
    title: 'Python for Beginners',
    instructor: 'Priya Mehta',
    image: '/courses/python.jpg',
    rating: 4.6,
    price: '₹349',
  },
  {
    id: 3,
    title: 'UI/UX Design Masterclass',
    instructor: 'Aman Verma',
    image: '/courses/uiux.jpg',
    rating: 4.9,
    price: '₹599',
  },
];

export default function CoursesOverview() {
  return (
    <section className="courses-overview">
      <h2>Featured Courses</h2>
      <div className="courses-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p><strong>Instructor:</strong> {course.instructor}</p>
            <p>⭐ {course.rating} / 5</p>
            <p className="price">{course.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
