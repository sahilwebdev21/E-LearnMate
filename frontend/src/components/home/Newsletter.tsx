export const Newsletter = () => {
  return (
    <section className="bg-indigo-600 text-white py-12 px-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
      <p className="mb-6">Get the latest courses and deals right into your inbox.</p>
      <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          placeholder="Your email"
          className="flex-1 px-4 py-2 rounded text-black"
        />
        <button type="submit" className="bg-white text-indigo-600 px-6 py-2 rounded font-semibold">
          Subscribe
        </button>
      </form>
    </section>
  )
}
