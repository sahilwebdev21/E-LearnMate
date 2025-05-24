import UserRow from './components/UserRow'
import InstructorApplicationCard from './components/InstructorApplicationCard'

export default function AdminDashboard() {
  const users = [
    { name: 'Sahil', email: 'sahil@example.com', role: 'admin' },
    { name: 'Aman', email: 'aman@example.com', role: 'student' },
    { name: 'Pooja', email: 'pooja@example.com', role: 'instructor' }
  ]

  const applications = [
    { name: 'Ravi', email: 'ravi@example.com' },
    { name: 'Meena', email: 'meena@example.com' }
  ]

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <section style={{ marginTop: '20px' }}>
        <h2>User List</h2>
        <table border={1} cellPadding={10}>
          <thead>
            <tr><th>Name</th><th>Email</th><th>Role</th></tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <UserRow key={i} name={u.name} email={u.email} role={u.role} />
            ))}
          </tbody>
        </table>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>Total Revenue: ₹50,000 (Static)</h2>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>Instructor Applications</h2>
        {applications.map((app, i) => (
          <InstructorApplicationCard key={i} name={app.name} email={app.email} />
        ))}
      </section>
    </div>
  )
}
