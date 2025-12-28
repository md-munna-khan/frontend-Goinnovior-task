"use client";

import Link from "next/link";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";

import {
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ShoppingCart,
  User,
} from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full z-40">
      {/* Top info bar */}
      <div className="bg-teal-500 text-white">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between py-2 px-4 md:px-6">
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Kashimpur,Gazipur Sadar / Gazipur</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+880 01713-027875</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a className="text-white opacity-90 hover:opacity-100"><Facebook className="w-4 h-4" /></a>
            <a className="text-white opacity-90 hover:opacity-100"><Twitter className="w-4 h-4" /></a>
            <a className="text-white opacity-90 hover:opacity-100"><Instagram className="w-4 h-4" /></a>
            <a className="text-white opacity-90 hover:opacity-100"><Youtube className="w-4 h-4" /></a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between py-4 px-4 md:px-6">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:justify-center md:flex-1">
            <NavMenu />
          </div>

          <div className="flex items-center gap-4">
         

            <Link href="/cart" className="relative inline-flex items-center p-2 text-gray-700 hover:text-black">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-yellow-400 text-xs px-1 rounded-full">0</span>
            </Link>

            <Link href="/account" className="hidden md:inline-flex items-center gap-2 text-sm text-gray-700 hover:text-black">
              <User className="w-5 h-5" />
              <span>sign in</span>
            </Link>

            <Link href="/contact" className="inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
              Contact Us
            </Link>

            {/* Mobile menu trigger */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
