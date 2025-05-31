export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Contact <span className="text-primary">Us</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Have questions? Get in touch with our support team
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-gray-100 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
          <p className="text-gray-500 text-xl">Contact information</p>
        </div>
        
        <div className="bg-gray-100 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
          <p className="text-gray-500 text-xl">Contact form</p>
        </div>
      </div>
    </div>
  );
}