export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Forgot Password?</h2>
        <p className="text-sm text-gray-600 mb-6">
          Enter your email address to receive reset instructions.
        </p>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </main>
  )
}
