'use client';

import Link from 'next/link';

export default function CTA() {
  return (
    <section className="cta">
      <div className="cta-content">
        <h2>Ready to start your learning journey?</h2>
        <p>Join thousands of learners and gain access to high-quality courses from expert instructors.</p>
        <Link href="/signup">
          <button className="cta-btn">Get Started for Free</button>
        </Link>
      </div>
    </section>
  );
}
