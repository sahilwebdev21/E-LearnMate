import EnrolledCourseCard from './components/EnrolledCourseCard'

export default function StudentDashboard() {
  const dummyCourses = [
    { title: 'HTML & CSS Basics', instructor: 'John Doe', progress: 75 },
    { title: 'React for Beginners', instructor: 'Jane Smith', progress: 40 },
    { title: 'Python Programming', instructor: 'Amit Sharma', progress: 90 },
  ]

  return (
    <div>
      <h1>Welcome, Student!</h1>
      <h2>Your Enrolled Courses:</h2>
      {dummyCourses.map((course, index) => (
        <EnrolledCourseCard
          key={index}
          title={course.title}
          instructor={course.instructor}
          progress={course.progress}
        />
      ))}
    </div>
  )
}
