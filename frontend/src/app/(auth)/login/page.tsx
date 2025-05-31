import LoginForm from '@/components/auth/LoginForm';

export default function LoginPage() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Sign in to <span className="text-primary">E-LearnMate</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-md">
          Access your personalized learning dashboard
        </p>
      </div>
      
      <LoginForm />
      
      <div className="mt-8 text-center text-sm text-gray-500">
        By signing in, you agree to our{' '}
        <a href="#" className="text-primary hover:underline">Terms of Service</a> and{' '}
        <a href="#" className="text-primary hover:underline">Privacy Policy</a>
      </div>
    </div>
  );
}