export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Browse by <span className="text-primary">Category</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Find courses in your area of interest from our diverse categories
        </p>
      </div>
      
      <div className="bg-gray-100 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
        <p className="text-gray-500 text-xl">Categories listing will appear here</p>
      </div>
    </div>
  );
}