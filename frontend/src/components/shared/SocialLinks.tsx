import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa"

export const SocialLinks = () => (
  <div className="flex gap-4 mt-4">
    <a href="https://github.com/sahilgupta" target="_blank" rel="noopener noreferrer">
      <FaGithub size={24} />
    </a>
    <a href="https://linkedin.com/in/anita" target="_blank" rel="noopener noreferrer">
      <FaLinkedin size={24} />
    </a>
    <a href="https://facebook.com/elearnmate" target="_blank" rel="noopener noreferrer">
      <FaFacebook size={24} />
    </a>
  </div>
)
