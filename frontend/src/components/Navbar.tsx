'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">E-LearnMate</Link>
        <ul className="navbar-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/courses">Courses</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        <div className="navbar-buttons">
          <Link href="/login" className="btn login-btn">Login</Link>
          <Link href="/register" className="btn register-btn">Register</Link>
        </div>
      </div>
    </nav>
  );
}
