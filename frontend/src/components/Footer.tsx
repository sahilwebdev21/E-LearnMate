'use client';

import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo" onClick={scrollToTop}>
          <h2>E-LearnMate</h2>
        </div>

        <nav className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/instructors">Instructors</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="footer-social">
          <a href="https://facebook.com" target="_blank"><FaFacebookF /></a>
          <a href="https://twitter.com" target="_blank"><FaTwitter /></a>
          <a href="https://linkedin.com" target="_blank"><FaLinkedinIn /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} E-LearnMate. All rights reserved.</p>
        <button className="scroll-top" onClick={scrollToTop}><FaArrowUp /></button>
      </div>
    </footer>
  );
}
