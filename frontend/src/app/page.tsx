export default function Home() {
  return (
    <div className="py-12">
      <section className="container mx-auto px-4 text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Welcome to <span className="text-blue-600">E-LearnMate</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Revolutionizing education through AI-powered personalized learning experiences.
        </p>
        <div className="mt-10">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 mx-auto" />
        </div>
      </section>
    </div>
  );
}