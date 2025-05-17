export default function SignupPage() {
  return (
    <section className="el-auth-section">
      <div className="el-auth-wrapper">
        <h1 className="el-auth-title">Create an Account</h1>
        <form className="el-auth-form">
          <input type="text" placeholder="Full Name" className="el-auth-input" required />
          <input type="email" placeholder="Email Address" className="el-auth-input" required />
          <input type="password" placeholder="Password" className="el-auth-input" required />
          <input type="password" placeholder="Confirm Password" className="el-auth-input" required />
          <button type="submit" className="el-auth-button">Sign Up</button>
        </form>
        <p className="el-auth-link-text">
          Already have an account? <a href="/auth/login">Login</a>
        </p>
      </div>
    </section>
  );
}