import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      {/* First Row - 4 Columns */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Logo & Description */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10" />
            <span className="text-xl font-bold text-white">E-LearnMate</span>
          </div>
          <p className="text-gray-400">
            Empowering learners with AI-driven education and personalized learning experiences.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/rules" className="text-gray-400 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((platform) => (
              <div 
                key={platform}
                className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors"
                title={platform}
              >
                <span className="text-xs">{platform[0]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Email: support@elearnmate.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Address: 123 Education St, Learning City</li>
          </ul>
        </div>
      </div>

      {/* Second Row: Copyright */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 text-center text-gray-500">
          &copy; {currentYear} E-LearnMate. All rights reserved. Developed by [Your Team Name].
        </div>
      </div>
    </footer>
  );
};

export default Footer;