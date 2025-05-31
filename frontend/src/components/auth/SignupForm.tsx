"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreedToTerms: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
    
    // Clear error when user types
    if (errors[id]) {
      setErrors({
        ...errors,
        [id]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    
    if (!formData.agreedToTerms) {
      newErrors.agreedToTerms = "You must agree to the terms";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users/register/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.email,
          email: formData.email,
          password: formData.password,
          password2: formData.confirmPassword,
          first_name: formData.firstName,
          last_name: formData.lastName,
        }),
      }
    );
    
    // Handle non-2xx responses
    if (!response.ok) {
      // Try to parse error response
      try {
        const errorData = await response.json();
        handleApiErrors(errorData);
      } catch (parseError) {
        // If we can't parse JSON, show generic error
        toast.error(`Registration failed: ${response.statusText}`);
      }
      return;
    }
    
    const data = await response.json();
    toast.success("Account created successfully! Redirecting to login...");
    setTimeout(() => {
      router.push("/login");
    }, 2000);
  } catch (error) {
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
    toast.error("Cannot connect to server. Please check your network connection and ensure the backend is running.");
  } else {
    toast.error("An unexpected error occurred. Please try again.");
    console.error("Registration error:", error);
  }
  } finally {
    setIsSubmitting(false);
  }
};

// Add helper function for API errors
const handleApiErrors = (errorData: any) => {
  const apiErrors: Record<string, string> = {};
  
  if (errorData.username) {
    apiErrors.email = errorData.username[0];
  }
  
  if (errorData.email) {
    apiErrors.email = errorData.email[0];
  }
  
  if (errorData.password) {
    apiErrors.password = errorData.password[0];
  }
  
  if (errorData.non_field_errors) {
    toast.error(errorData.non_field_errors[0]);
  } else if (Object.keys(apiErrors).length > 0) {
    setErrors({ ...errors, ...apiErrors });
  } else {
    toast.error("Registration failed. Please try again.");
  }
};

  return (
    <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
      {/* Header */}
      <div className="bg-primary py-8 px-6 text-center">
        <h2 className="text-3xl font-bold text-white">Create Account</h2>
        <p className="text-primary-light mt-2">Join thousands of learners worldwide</p>
      </div>
      
      {/* Form */}
      <div className="p-8">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                className={`w-full px-4 py-3 border ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent`}
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                className={`w-full px-4 py-3 border ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent`}
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
              )}
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className={`w-full px-4 py-3 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>
          
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className={`w-full px-4 py-3 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent`}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
          </div>
          
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              className={`w-full px-4 py-3 border ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent`}
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>
            )}
          </div>
          
          <div className="mb-6">
            <label className="flex items-start">
              <input
                type="checkbox"
                id="agreedToTerms"
                checked={formData.agreedToTerms}
                onChange={handleChange}
                className="mt-1 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <span className="ml-2 text-gray-700">
                I agree to the{' '}
                <Link href="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </span>
            </label>
            {errors.agreedToTerms && (
              <p className="mt-1 text-sm text-red-500">{errors.agreedToTerms}</p>
            )}
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-primary hover:bg-primary-light text-white font-bold py-3 px-4 rounded-lg transition-colors ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Creating Account..." : "Create Account"}
          </button>
          
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link href="/login" className="text-primary font-bold hover:underline">
                Sign In
              </Link>
            </p>
          </div>
          
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Or sign up with</span>
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

export default SignupForm;