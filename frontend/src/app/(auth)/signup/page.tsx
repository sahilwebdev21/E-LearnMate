import SignupForm from '@/components/auth/SignupForm';

export default function SignupPage() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Join <span className="text-primary">E-LearnMate</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-md">
          Start your learning journey with us today
        </p>
      </div>
      
      <SignupForm />
      
      <div className="mt-8 text-center text-sm text-gray-500">
        By creating an account, you agree to our{' '}
        <a href="#" className="text-primary hover:underline">Terms of Service</a> and{' '}
        <a href="#" className="text-primary hover:underline">Privacy Policy</a>
      </div>
    </div>
  );
}