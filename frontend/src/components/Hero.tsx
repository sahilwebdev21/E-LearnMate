'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Empower Your Learning with <span>E-LearnMate</span></h1>
        <p>Join thousands of learners and instructors on the smartest e-learning platform. Learn at your pace, grow at your style.</p>
        <div className="hero-buttons">
          <Link href="/register" className="btn primary-btn">Get Started</Link>
          <Link href="/courses" className="btn secondary-btn">Browse Courses</Link>
        </div>
      </div>
      <div className="hero-image">
        <img src="/hero-illustration.svg" alt="Learning Illustration" />
      </div>
    </section>
  );
}
