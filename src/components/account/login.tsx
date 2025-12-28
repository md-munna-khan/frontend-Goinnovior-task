import React from "react";
import Image from "next/image";
import { Mail, Lock, Eye, Facebook, Chrome, Apple } from "lucide-react";

const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-teal-50 p-4">
 
      <div className="w-full max-w-[550px] overflow-hidden rounded-[40px] bg-white shadow-2xl">
        
        {/* Teal Gradient Header Section */}
        <div className="relative flex flex-col items-center justify-center bg-gradient-to-br from-[#07B4B0] to-[#b2ecea] py-14 px-8 text-center">
          
          {/* Logo Branding (Top Left) */}
          <div className="absolute top-8 left-8 flex gap-2">
             <div className="h-10 w-10 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/30">
                <span className="text-white font-bold text-xs tracking-tighter">ZIK</span>
             </div>
          </div>

          {/* Nav Buttons (Top Right) */}
          <div className="absolute top-8 right-8 flex items-center gap-6">
            <button className="text-sm font-medium text-white hover:opacity-80 transition-opacity">Login</button>
            <button className="rounded-full border border-white/50 bg-white/10 px-6 py-1.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20">
              Sign Up
            </button>
          </div>

          <h1 className="mt-8 text-4xl font-bold text-white tracking-tight">Welcome Back!</h1>
          <p className="mt-2 text-sm font-medium text-white/90">
            We missed you, Please provide your credential
          </p>
        </div>

        {/* Form Content Section */}
        <div className="bg-white px-10 pb-12 pt-10">
          <form className="space-y-5">
            {/* Email Input with Icon */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Mail size={18} />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-xl border border-gray-200 bg-gray-50/30 py-4 pl-12 pr-4 text-sm outline-none transition-all focus:border-[#07B4B0] focus:ring-1 focus:ring-[#07B4B0]"
              />
            </div>

            {/* Password Input with Icon and Visibility Toggle */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Lock size={18} />
              </div>
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-xl border border-gray-200 bg-gray-50/30 py-4 pl-12 pr-12 text-sm outline-none transition-all focus:border-[#07B4B0] focus:ring-1 focus:ring-[#07B4B0]"
              />
              <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <Eye size={18} />
              </button>
            </div>

            {/* Forget Password link */}
            <div className="flex justify-end pr-1">
              <button type="button" className="text-xs font-bold text-gray-800 hover:text-[#07B4B0] transition-colors">
                Forget Password?
              </button>
            </div>

            {/* Primary Action Button */}
            <button className="mt-2 w-full rounded-xl bg-[#07B4B0] py-4 text-sm font-bold text-white shadow-lg shadow-teal-500/20 transition-all hover:bg-[#06a3a0] active:scale-[0.98]">
              Log In
            </button>
          </form>

          {/* Visual Divider */}
          <div className="relative my-10 flex items-center justify-center">
            <div className="h-[1px] w-full bg-gray-100"></div>
            <span className="absolute bg-white px-4 text-xs font-medium text-gray-400 uppercase tracking-widest">or</span>
          </div>

          {/* Social Auth Options - Exactly as like component style */}
          <div className="flex justify-center gap-4">
            <button className="flex h-12 w-28 items-center justify-center rounded-xl border border-gray-100 bg-white transition-all hover:shadow-md hover:border-gray-200">
              <Facebook className="text-blue-600" size={24} fill="currentColor" />
            </button>
            <button className="flex h-12 w-28 items-center justify-center rounded-xl border border-gray-100 bg-white transition-all hover:shadow-md hover:border-gray-200">
              <Apple className="text-black" size={24} fill="currentColor" />
            </button>
            <button className="flex h-12 w-28 items-center justify-center rounded-xl border border-gray-100 bg-white transition-all hover:shadow-md hover:border-gray-200">
              <Chrome className="text-red-500" size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;