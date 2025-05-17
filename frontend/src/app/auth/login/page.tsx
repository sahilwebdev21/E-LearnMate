export default function LoginPage() {
  return (
    <section className="el-auth-section">
      <div className="el-auth-wrapper">
        <h1 className="el-auth-title">Login to Your Account</h1>
        <form className="el-auth-form">
          <input type="email" placeholder="Email Address" className="el-auth-input" required />
          <input type="password" placeholder="Password" className="el-auth-input" required />
          <button type="submit" className="el-auth-button">Login</button>
        </form>
        <p className="el-auth-link-text">
          Don't have an account? <a href="/auth/signup">Sign Up</a>
        </p>
      </div>
    </section>
  );
}