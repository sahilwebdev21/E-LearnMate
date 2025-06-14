export const Footer = () => (
  <footer className="bg-gray-900 text-white py-8 mt-20">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
      <div>
        <h2 className="text-xl font-bold mb-2">E-LearnMate</h2>
        <p className="text-sm">Professional E-Learning Platform for Students & Instructors</p>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Links</h3>
        <ul className="space-y-1 text-sm">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms & Rules</a></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Social</h3>
        <div className="flex space-x-3">
          <a href="#"><img src="/icons/facebook.svg" alt="Facebook" /></a>
          <a href="#"><img src="/icons/twitter.svg" alt="Twitter" /></a>
        </div>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Contact</h3>
        <p className="text-sm">Kathmandu, Nepal</p>
        <p className="text-sm">info@elearnmate.com</p>
      </div>
    </div>
    <div className="text-center mt-8 text-sm border-t border-gray-700 pt-4">
      &copy; {new Date().getFullYear()} E-LearnMate | Developed by Sahil Gupta & Anita Chokhal
    </div>
  </footer>
);
