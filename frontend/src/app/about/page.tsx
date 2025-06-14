import { SocialLinks } from "@/components/shared/SocialLinks"

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">About E-LearnMate</h1>
        <p className="text-gray-600 text-lg">
          E-LearnMate is a full-featured e-learning platform built as a 6th-sem TU BCA project by Sahil Gupta & Anita Chokhal. Our aim is to bring modern, gamified, and affordable education to all.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <img src="/images/about/dev-team.png" alt="Team" className="rounded shadow" />
        <div>
          <h2 className="text-2xl font-semibold mb-2">Developers</h2>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Sahil Gupta</strong> — Full Stack Developer</li>
            <li><strong>Anita Chokhal</strong> — UI/UX Designer & Frontend Dev</li>
          </ul>
          <SocialLinks />
        </div>
      </div>
    </main>
  )
}
