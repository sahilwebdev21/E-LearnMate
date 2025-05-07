'use client';

import { BookOpen, Users, BadgeCheck } from 'lucide-react';

export default function Features() {
  return (
    <section className="features">
      <h2 className="features-title">Why Choose E-LearnMate?</h2>
      <div className="features-grid">
        <div className="feature-box">
          <BookOpen className="icon" />
          <h3>Quality Courses</h3>
          <p>Expert-led courses across multiple fields with interactive content.</p>
        </div>
        <div className="feature-box">
          <Users className="icon" />
          <h3>Community Support</h3>
          <p>Join a strong learner-instructor community and collaborate easily.</p>
        </div>
        <div className="feature-box">
          <BadgeCheck className="icon" />
          <h3>Certified Learning</h3>
          <p>Earn certificates to showcase your learning and grow your career.</p>
        </div>
      </div>
    </section>
  );
}
