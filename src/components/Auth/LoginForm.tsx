/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Mail, Lock, Eye, EyeOff, Facebook, Apple } from "lucide-react";
import { useAuth } from "@/providers/AuthClientProvider";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  // Set the default admin credentials here
  const form = useForm<FieldValues>({
    defaultValues: {
      email: "admin@gmail.com",
      password: "munna123",
    },
  });

  const { setUser } = useAuth();

  const onSubmit = async (values: FieldValues) => {
    try {
      setLoading(true);
      toast.loading("Logging in...", { id: "login-toast" });

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
          credentials: "include",
        }
      );

      if (!res.ok) {
        toast.error("Invalid credentials", { id: "login-toast" });
        return;
      }

      const payload = await res.json();
      const user = payload?.user ?? payload?.data?.user ?? payload;
      
      if (!user) {
        toast.error("Login failed", { id: "login-toast" });
        return;
      }

      const normalized = {
        id: user.id ?? user._id,
        name: user.name ?? user.fullName ?? null,
        email: user.email ?? null,
        photoUrl: user.photoUrl ?? user.picture ?? null,
      };

      setUser(normalized as any);
      toast.success("Login Successful", { id: "login-toast" });
      router.replace("/");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!", { id: "login-toast" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-teal-50 p-4 font-sans">
      <div className="w-full max-w-[500px] overflow-hidden rounded-[40px] bg-white shadow-2xl">
        
        {/* Teal Gradient Header Section */}
        <div className="relative flex flex-col items-center justify-center bg-gradient-to-br from-[#07B4B0] to-[#b2ecea] py-12 px-8 text-center">
          {/* Brand Logo */}
          <div className="absolute top-8 left-8">
             <div className="h-10 w-10 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/30">
                <span className="text-white font-bold text-xs tracking-tighter">ZIK</span>
             </div>
          </div>

          {/* Nav Toggle */}
          <div className="absolute top-8 right-8 flex items-center gap-4">
            <span className="text-sm font-bold text-white">Login</span>
            <Link 
              href="/register" 
              className="rounded-full border border-white/50 bg-white/10 px-5 py-1 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              Sign Up
            </Link>
          </div>

          <h1 className="mt-8 text-3xl font-bold text-white tracking-tight">Admin Portal</h1>
          <p className="mt-2 text-sm font-medium text-white/90">
            Welcome back, Munna! Please verify your identity.
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-white px-8 pb-10 pt-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              
              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <Mail size={18} />
                      </div>
                      <FormControl>
                        <input
                          {...field}
                          type="email"
                          placeholder="Email Address"
                          className="w-full rounded-xl border border-gray-100 bg-gray-50/50 py-4 pl-12 pr-4 text-sm outline-none transition-all focus:border-[#07B4B0] focus:bg-white focus:ring-1 focus:ring-[#07B4B0]"
                        />
                      </FormControl>
                    </div>
                    <FormMessage className="text-[10px] ml-2" />
                  </FormItem>
                )}
              />

              {/* Password Field */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <Lock size={18} />
                      </div>
                      <FormControl>
                        <input
                          {...field}
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          className="w-full rounded-xl border border-gray-100 bg-gray-50/50 py-4 pl-12 pr-12 text-sm outline-none transition-all focus:border-[#07B4B0] focus:bg-white focus:ring-1 focus:ring-[#07B4B0]"
                        />
                      </FormControl>
                      <button 
                        type="button" 
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                    <FormMessage className="text-[10px] ml-2" />
                  </FormItem>
                )}
              />

              <div className="flex justify-end pr-1">
                <button type="button" className="text-xs font-bold text-gray-500 hover:text-[#07B4B0] transition-colors">
                  Forget Password?
                </button>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="mt-2 w-full rounded-xl bg-[#07B4B0] py-4 text-sm font-bold text-white shadow-lg shadow-teal-500/20 transition-all hover:bg-[#06a3a0] active:scale-[0.98] disabled:opacity-70"
              >
                {loading ? "Authenticating..." : "Log In"}
              </button>
            </form>
          </Form>

          {/* Divider */}
          <div className="relative my-8 flex items-center justify-center">
            <div className="h-[1px] w-full bg-gray-100"></div>
            <span className="absolute bg-white px-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">or continue with</span>
          </div>

          {/* Social Logins */}
          <div className="flex justify-center gap-3">
            <button 
              type="button"
              onClick={() => window.open(`${process.env.NEXT_PUBLIC_BASE_API}/auth/facebook`)}
              className="flex h-12 w-full items-center justify-center rounded-xl border border-gray-100 bg-white transition-all hover:shadow-md hover:border-gray-200"
            >
              <Facebook className="text-[#1877F2]" size={20} fill="currentColor" />
            </button>
            <button 
              type="button"
              onClick={() => window.open(`${process.env.NEXT_PUBLIC_BASE_API}/auth/google`)}
              className="flex h-12 w-full items-center justify-center rounded-xl border border-gray-100 bg-white transition-all hover:shadow-md hover:border-gray-200"
            >
              <img 
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
                alt="Google" 
                className="w-5 h-5"
              />
            </button>
            <button 
              type="button"
              className="flex h-12 w-full items-center justify-center rounded-xl border border-gray-100 bg-white transition-all hover:shadow-md hover:border-gray-200"
            >
              <Apple className="text-black" size={20} fill="currentColor" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}