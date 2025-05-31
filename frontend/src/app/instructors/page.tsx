export default function InstructorsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Meet Our <span className="text-primary">Instructors</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Learn from industry experts with real-world experience
        </p>
      </div>
      
      <div className="bg-gray-100 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
        <p className="text-gray-500 text-xl">Instructors listing will appear here</p>
      </div>
    </div>
  );
}