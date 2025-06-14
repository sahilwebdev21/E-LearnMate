// src/hooks/useAuth.ts
import { useState } from "react";
import axios from "@/lib/axios";

export const useAuth = () => {
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    try {
      const res = await axios.post("/users/auth/login/", {
        email,
        password,
      });

      const token = res.data.access;
      localStorage.setItem("token", token);
      setError(null);
      return true;
    } catch (err: any) {
      setError("Invalid credentials");
      return false;
    }
  };

  const register = async (email: string, username: string, password: string, role: string) => {
    try {
      const res = await axios.post("/users/auth/registration/", {
        email,
        username,
        password1: password,
        password2: password,
        role,
      });

      const loginRes = await axios.post("/users/auth/login/", {
        email,
        password,
      });

      const token = loginRes.data.access;
      localStorage.setItem("token", token);
      setError(null);
      return true;
    } catch (err: any) {
      setError("Registration failed");
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
  };

  return { login, register, logout, error };
};
