

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/providers/AuthClientProvider";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";

import {
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  ShoppingCart,
  User,
  LayoutDashboard,
  Image as ImageIcon,
  LogOut,
  ChevronDown
} from "lucide-react";

const Navbar = () => {
  const { user, logout } =  useAuth();
  console.log(user)
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="w-full z-50 sticky top-0 bg-white">
      {/* Top info bar - Responsive padding */}
      <div className="bg-teal-500 text-white hidden sm:block">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between py-2 px-4 md:px-6">
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="truncate max-w-[150px] lg:max-w-none">Kashimpur, Gazipur</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+880 01713-027875</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Facebook className="w-4 h-4 cursor-pointer hover:text-teal-200" />
            <Twitter className="w-4 h-4 cursor-pointer hover:text-teal-200" />
            <Instagram className="w-4 h-4 cursor-pointer hover:text-teal-200" />
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white border-b shadow-sm">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between py-3 px-4 md:px-6">
          
          {/* Left Side: Hamburger (Mobile) + Logo */}
          <div className="flex items-center gap-2">
            <div className="md:hidden">
              <NavigationSheet />
            </div>
            <Link href="/" className="flex items-center shrink-0">
              <Logo />
            </Link>
          </div>

          {/* Center: Desktop Menu */}
          <div className="hidden md:flex md:items-center md:justify-center md:flex-1 px-4">
            <NavMenu />
          </div>

          {/* Right Side: Icons & Profile */}
          <div className="flex items-center gap-1.5 sm:gap-4">
            
            {/* Cart - Always Visible */}
            <Link href="/cart" className="relative p-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="absolute top-1 right-1 bg-orange-500 text-white text-[10px] font-bold px-1.5 rounded-full border-2 border-white">
                0
              </span>
            </Link>

            {/* Auth Section - Always Visible */}
            {user ? (
              <div 
                className="relative"
                onMouseEnter={() => setIsProfileOpen(true)}
                onMouseLeave={() => setIsProfileOpen(false)}
                onClick={() => setIsProfileOpen(!isProfileOpen)} // Toggle on click for mobile
              >
                <button className="flex items-center gap-1 sm:gap-2 p-1 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-200">
                  <div className="relative w-8 h-8 sm:w-9 sm:h-9">
                    {user.photoUrl ? (
                      <Image
                        src={user.photoUrl }
                        alt={user.name || "User"}
                        fill
                        className="rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-teal-100 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-teal-600" />
                      </div>
                    )}
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-500 hidden sm:block" />
                </button>

                {/* Profile Dropdown (Hover/Click) */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-1 w-64 bg-white border border-gray-100 shadow-2xl rounded-xl py-2 z-[60] animate-in fade-in zoom-in-95">
                    <div className="px-4 py-3 border-b border-gray-50 bg-gray-50/50 rounded-t-xl">
                      <p className="text-sm font-bold text-gray-900 truncate">Hello, {user.name}</p>
                      <p className="text-xs text-gray-500 truncate">{user.email}</p>
                    </div>
                    
                    <div className="p-1.5">
                      <Link href="/admin/products" className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 rounded-lg transition-colors">
                        <LayoutDashboard className="w-4 h-4" />
                        Product Management
                      </Link>
                      <Link href="/admin/banners" className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 rounded-lg transition-colors">
                        <ImageIcon className="w-4 h-4" />
                        Hero-Banner Management
                      </Link>
                    </div>

                    <div className="border-t border-gray-100 p-1.5">
                      <button 
                        onClick={() => void logout()}
                        className="flex w-full items-center gap-3 px-3 py-2.5 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <LogOut className="w-4 h-4" />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Sign In - Always visible on mobile, icon + text on desktop */
              <Link href="/login" className="flex items-center gap-2 p-2 text-gray-700 hover:text-teal-600 transition-colors">
                <User className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="hidden sm:inline text-sm font-semibold uppercase tracking-tight">Sign In</span>
              </Link>
            )}

            {/* Desktop Contact Button */}
            <Link href="/contact" className="hidden lg:inline-flex items-center bg-teal-600 text-white px-5 py-2.5 text-sm font-bold rounded-full hover:bg-teal-700 shadow-md hover:shadow-lg transition-all active:scale-95">
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;