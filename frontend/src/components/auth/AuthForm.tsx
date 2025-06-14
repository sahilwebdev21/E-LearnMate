"use client"

import { useState } from "react"
import Link from "next/link"
import { FaGoogle, FaFacebook } from "react-icons/fa"

type Props = {
  mode: "login" | "signup"
}

export default function AuthForm({ mode }: Props) {
  const [form, setForm] = useState({ name: "", email: "", password: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const title = mode === "login" ? "Login to E-LearnMate" : "Create an Account"
  const toggleText = mode === "login" ? "Don't have an account?" : "Already have an account?"
  const toggleLink = mode === "login" ? "/auth/signup" : "/auth/login"
  const buttonText = mode === "login" ? "Login" : "Sign Up"

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center">{title}</h2>
        
        <form className="space-y-4">
          {mode === "signup" && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border p-3 rounded"
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          {mode === "login" && (
            <div className="text-right text-sm">
              <Link href="/auth/forgot" className="text-blue-600 hover:underline">
                Forgot Password?
              </Link>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold"
          >
            {buttonText}
          </button>
        </form>

        <div className="text-center text-sm text-gray-600">{toggleText}{" "}
          <Link href={toggleLink} className="text-blue-600 hover:underline">
            {mode === "login" ? "Sign Up" : "Login"}
          </Link>
        </div>

        <div className="flex items-center justify-center gap-4 mt-4">
          <button className="flex items-center gap-2 border py-2 px-4 w-full rounded hover:bg-gray-100">
            <FaGoogle className="text-red-500" /> Google
          </button>
          <button className="flex items-center gap-2 border py-2 px-4 w-full rounded hover:bg-gray-100">
            <FaFacebook className="text-blue-600" /> Facebook
          </button>
        </div>
      </div>
    </main>
  )
}
