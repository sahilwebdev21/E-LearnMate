export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Explore Our <span className="text-primary">Courses</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover a wide range of courses to enhance your skills and knowledge
        </p>
      </div>
      
      <div className="bg-gray-100 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
        <p className="text-gray-500 text-xl">Courses listing will appear here</p>
      </div>
    </div>
  );
}