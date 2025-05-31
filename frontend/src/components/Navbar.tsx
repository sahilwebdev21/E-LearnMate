import Link from "next/link";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Instructors", path: "/instructors" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="bg-primary w-12 h-12 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">ELM</span>
          </div>
          <span className="text-xl font-bold text-dark">E-LearnMate</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-primary hover:text-primary-dark font-bold transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="bg-primary hover:bg-primary-light text-white font-bold py-2 px-6 rounded-full transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
