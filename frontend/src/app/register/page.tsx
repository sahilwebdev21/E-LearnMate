import AuthForm from '../components/auth/AuthForm'
import InputField from '../components/auth/InputField'
import SubmitButton from '../components/auth/SubmitButton'

export default function RegisterPage() {
  return (
    <AuthForm
      title="Create your account"
      subtitle="Already have an account?"
      linkText="Login here"
      linkHref="/login"
    >
      <form className="space-y-6">
        <div className="flex gap-4">
          <InputField
            label="First Name"
            name="firstName"
            type="text"
            required
          />
          <InputField
            label="Last Name"
            name="lastName"
            type="text"
            required
          />
        </div>

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
          autoComplete="new-password"
          required
          minLength={8}
        />

        <InputField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          autoComplete="new-password"
          required
          minLength={8}
        />

        <SubmitButton text="Create Account" />
      </form>
    </AuthForm>
  )
}