import { ContactForm } from "@/components/shared/ContactForm"

export default function ContactPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-10">
        <ContactForm />
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=..." // your location here
            className="w-full h-64 rounded shadow mb-6"
            loading="lazy"
          ></iframe>
          <h2 className="text-xl font-semibold mb-1">Address</h2>
          <p>Kathmandu, Nepal</p>
          <p>Email: support@elearnmate.com</p>
          <p>Phone: +977-9800000000</p>
        </div>
      </div>
    </main>
  )
}
