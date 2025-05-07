'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">E-LearnMate</Link>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={menuOpen ? 'line rotate1' : 'line'}></span>
          <span className={menuOpen ? 'line fade' : 'line'}></span>
          <span className={menuOpen ? 'line rotate2' : 'line'}></span>
        </div>

        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/courses">Courses</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        <div className={`navbar-buttons ${menuOpen ? 'active' : ''}`}>
          <Link href="/login" className="btn login-btn">Login</Link>
          <Link href="/register" className="btn register-btn">Register</Link>
        </div>
      </div>
    </nav>
  );
}
