import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12">
      {/* First Row */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Col 1 */}
        <div>
          <h3 className="font-bold text-lg mb-2">E-LearnMate</h3>
          <p>Learn from the best instructors anytime, anywhere.</p>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms & Conditions</Link></li>
            <li><Link href="/rules">Rules</Link></li>
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex gap-3 text-xl">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>

        {/* Col 4 */}
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p>Email: support@elearnmate.com</p>
          <p>Location: Kathmandu, Nepal</p>
        </div>
      </div>

      {/* Second Row */}
      <div className="mt-8 text-center py-4 border-t border-gray-700 text-sm">
        &copy; {new Date().getFullYear()} E-LearnMate. Developed by Sahil, Anita.
      </div>
    </footer>
  )
}
