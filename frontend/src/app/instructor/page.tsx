import InstructorCourseCard from './components/InstructorCourseCard'

export default function InstructorDashboard() {
  const courses = [
    { title: 'Mastering JavaScript', enrolledCount: 120, status: 'published' },
    { title: 'Beginner Python', enrolledCount: 65, status: 'draft' }
  ]

  return (
    <div>
      <h1>Instructor Dashboard</h1>
      <button style={{
        padding: '10px 20px',
        backgroundColor: '#4caf50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        marginBottom: '20px',
        cursor: 'pointer'
      }}>
        ➕ Create New Course
      </button>

      {courses.map((course, index) => (
        <InstructorCourseCard
          key={index}
          title={course.title}
          enrolledCount={course.enrolledCount}
          status={course.status}
        />
      ))}
    </div>
  )
}
