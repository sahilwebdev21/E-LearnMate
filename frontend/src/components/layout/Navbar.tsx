'use client';

import Link from 'next/link';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Courses', href: '/courses' },
  { name: 'Category', href: '/category' },
  { name: 'Instructor', href: '/instructor' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar = () => (
  <nav className="bg-white shadow sticky top-0 z-50">
    <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
      <Link href="/" className="text-xl font-bold text-primary">
        E-LearnMate
      </Link>
      <ul className="flex gap-4">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-gray-700 hover:text-primary transition">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);
