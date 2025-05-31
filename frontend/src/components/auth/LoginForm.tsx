import Link from "next/link";

const LoginForm = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
      {/* Header */}
      <div className="bg-primary py-8 px-6 text-center">
        <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
        <p className="text-primary-light mt-2">Sign in to continue your learning journey</p>
      </div>
      
      {/* Form */}
      <div className="p-8">
        <form>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="password" className="block text-gray-700 font-medium">
                Password
              </label>
              <Link href="/forgot-password" className="text-primary text-sm font-medium hover:underline">
                Forgot Password?
              </Link>
            </div>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-light text-white font-bold py-3 px-4 rounded-lg transition-colors"
          >
            Sign In
          </button>
          
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="text-primary font-bold hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
          
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              className="flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg py-3 px-4 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <div className="bg-gray-200 border-2 border-dashed rounded w-5 h-5" />
              Google
            </button>
            
            <button
              type="button"
              className="flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg py-3 px-4 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <div className="bg-gray-200 border-2 border-dashed rounded w-5 h-5" />
              Facebook
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;