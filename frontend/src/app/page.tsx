import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary-light/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Hero Content */}
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Transform Your <span className="text-primary">Learning</span> Experience
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl">
                AI-powered personalized education platform that adapts to your learning style, 
                pace, and goals. Unlock your full potential with E-LearnMate.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                {/* Fixed Primary Button */}
                <Link 
                  href="/signup"
                  className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Started For Free
                </Link>

                {/* Secondary Button */}
                <Link 
                  href="/courses"
                  className="bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white font-bold py-3 px-6 rounded-full transition-all duration-300"
                >
                  Explore Courses
                </Link>
              </div>
              
              <div className="mt-12 flex flex-wrap justify-center md:justify-start gap-6">
                {['24/7 AI Tutor', 'Personalized Paths', 'Progress Tracking', 'Certifications'].map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Enhanced Hero Image Placeholder */}
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-lg">
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl w-full h-80 md:h-[450px] flex flex-col items-center justify-center p-4 animate-float">
                  <div className="bg-gray-200 border-2 border-dashed border-gray-300 rounded-xl w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="mx-auto bg-gray-300 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-gray-500 font-medium">AI Learning Illustration</p>
                      <p className="text-sm text-gray-400 mt-2">
                        Add your image at: <br />
                        <code className="bg-gray-100 px-2 py-1 rounded">public/images/hero-illustration.png</code>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-light rounded-full opacity-20 z-[-1]"></div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary rounded-full opacity-20 z-[-1]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '10K+', label: 'Active Learners' },
              { value: '500+', label: 'Courses' },
              { value: '200+', label: 'Expert Instructors' },
              { value: '98%', label: 'Satisfaction Rate' }
            ].map((stat, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}