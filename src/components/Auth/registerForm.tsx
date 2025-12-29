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
import { User, Mail, Phone, Lock, Eye, EyeOff, Facebook, Apple } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { register } from "@/actions/auth";

export default function RegisterForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
    },
  });

  const onSubmit = async (values: FieldValues) => {
    try {
      setLoading(true);
      const res = await register(values);
      if (res?.id) {
        toast.success("User Registered successfully");
        router.push("/login");
      }
    } catch (error) {
      console.error(error);
      toast.error("Registration failed. Please try again.");
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
            <Link href="/login" className="text-sm font-medium text-white hover:opacity-80 transition-opacity">
                Login
            </Link>
            <span className="rounded-full border border-white/50 bg-white/10 px-5 py-1 text-sm font-bold text-white backdrop-blur-sm">
              Sign Up
            </span>
          </div>

          <h1 className="mt-8 text-3xl font-bold text-white tracking-tight">Create Account</h1>
          <p className="mt-2 text-sm font-medium text-white/90">
            Join us today! It only takes a minute.
          </p>
        </div>

        {/* Form Content Section */}
        <div className="bg-white px-8 pb-10 pt-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              
              {/* Name Field */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <User size={18} />
                      </div>
                      <FormControl>
                        <input
                          {...field}
                          placeholder="Full Name"
                          className="w-full rounded-xl border border-gray-100 bg-gray-50/50 py-4 pl-12 pr-4 text-sm outline-none transition-all focus:border-[#07B4B0] focus:bg-white focus:ring-1 focus:ring-[#07B4B0]"
                        />
                      </FormControl>
                    </div>
                    <FormMessage className="text-[10px] ml-2" />
                  </FormItem>
                )}
              />

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

              {/* Phone Field */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <Phone size={18} />
                      </div>
                      <FormControl>
                        <input
                          {...field}
                          placeholder="Phone Number"
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

              <button 
                type="submit" 
                disabled={loading}
                className="mt-4 w-full rounded-xl bg-[#07B4B0] py-4 text-sm font-bold text-white shadow-lg shadow-teal-500/20 transition-all hover:bg-[#06a3a0] active:scale-[0.98] disabled:opacity-70"
              >
                {loading ? "Creating Account..." : "Register Now"}
              </button>
            </form>
          </Form>

          {/* Divider */}
          <div className="relative my-8 flex items-center justify-center">
            <div className="h-[1px] w-full bg-gray-100"></div>
            <span className="absolute bg-white px-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">or register with</span>
          </div>

          {/* Social Registrations */}
          <div className="flex justify-center gap-3">
            <button type="button" className="flex h-12 w-full items-center justify-center rounded-xl border border-gray-100 bg-white transition-all hover:shadow-md hover:border-gray-200">
              <Facebook className="text-[#1877F2]" size={22} fill="currentColor" />
            </button>
            <button type="button" className="flex h-12 w-full items-center justify-center rounded-xl border border-gray-100 bg-white transition-all hover:shadow-md hover:border-gray-200">
              <img 
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
                alt="Google" 
                className="w-5 h-5"
              />
            </button>
            <button type="button" className="flex h-12 w-full items-center justify-center rounded-xl border border-gray-100 bg-white transition-all hover:shadow-md hover:border-gray-200">
              <Apple className="text-black" size={22} fill="currentColor" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}