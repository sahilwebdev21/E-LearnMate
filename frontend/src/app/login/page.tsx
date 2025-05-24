import AuthForm from '../components/auth/AuthForm'
import InputField from '../components/auth/InputField'
import SubmitButton from '../components/auth/SubmitButton'

export default function LoginPage() {
  return (
    <AuthForm
      title="Welcome back"
      subtitle="Don't have an account?"
      linkText="Register here"
      linkHref="/register"
    >
      <form className="space-y-6">
        <InputField
          label="Email address"
          name="email"
          type="email"
          autoComplete="email"
          required
        />

        <InputField
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
        />

        <div className="flex items-center justify-end">
          <a
            href="#"
            className="text-sm text-blue-600 hover:text-blue-500"
          >
            Forgot password?
          </a>
        </div>

        <SubmitButton text="Sign in" />
      </form>
    </AuthForm>
  )
}