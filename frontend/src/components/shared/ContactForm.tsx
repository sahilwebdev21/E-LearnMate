"use client"

import { useState } from "react"
import toast from "react-hot-toast"

export const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success("Message sent successfully!")
    setForm({ name: "", email: "", message: "" })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        className="w-full border p-3 rounded"
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
      />
      <input
        className="w-full border p-3 rounded"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Your Email"
        required
      />
      <textarea
        className="w-full border p-3 rounded"
        name="message"
        rows={5}
        value={form.message}
        onChange={handleChange}
        placeholder="Your Message"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded"
      >
        Send Message
      </button>
    </form>
  )
}
