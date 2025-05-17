'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="el-nav-wrapper">
      <div className="el-nav-logo">
        <Link href="/">E-LearnMate</Link>
      </div>
      <nav className={`el-nav-links ${isOpen ? 'open' : ''}`}>
        <Link href="/">Home</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/auth/login" className="el-login-btn">Login</Link>
      </nav>
      <button className="el-nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
    </header>
  );
}
