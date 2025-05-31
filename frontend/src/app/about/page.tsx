export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          About <span className="text-primary">E-LearnMate</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Learn about our mission, vision, and the team behind our platform
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-gray-100 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
          <p className="text-gray-500 text-xl">Company history and mission</p>
        </div>
        
        <div className="bg-gray-100 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
          <p className="text-gray-500 text-xl">Team members</p>
        </div>
      </div>
    </div>
  );
}