"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-rose-400 text-white p-4 relative">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <h1 className="font-bold text-lg">Мій сайт</h1>

        <nav className="hidden md:flex gap-6">
          <Link href="/" className="hover:underline">Головна</Link>
          <Link href="/blog" className="hover:underline">Блог</Link>
          <Link href="/contacts" className="hover:underline">Контакти</Link>
        </nav>


        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="
              absolute top-full left-0 w-full
              bg-rose-500 bg-opacity-95
              flex flex-col items-center gap-6 py-6
              shadow-lg z-50
            "
          >
            <Link href="/" className="hover:underline" onClick={() => setIsOpen(false)}>Головна</Link>
            <Link href="/blog" className="hover:underline" onClick={() => setIsOpen(false)}>Блог</Link>
            <Link href="/contacts" className="hover:underline" onClick={() => setIsOpen(false)}>Контакти</Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
