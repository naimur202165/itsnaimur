"use client";

import {
  Heart,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "YouTube",
      href: "https://youtube.com/@naimurrahman-b5l?si=87d2x5tf5XrQ6wGD",
      icon: Youtube,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/naimur202170",
      icon: Instagram,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/naimur202164/",
      icon: Linkedin,
    },
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
    {
      name: "Email",
      href: "mailto:contact.naimur202164@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <footer className="bg-gray-900/50 backdrop-blur-md border-t border-gray-700/50 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Naimur Rahman</h3>
            <p className="text-gray-400 text-sm">
              Video Editor and Motion Graphics Designer passionate about
              creating visual stories with style, precision, and cinematic
              magic.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link
                href="/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-400 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/skills"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Skills
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Connect With Me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={link.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-1">
            Made with <Heart className="text-red-500" size={16} /> by{" "}
            <a
              href="https://www.linkedin.com/in/naimur202164/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Naimur Rahman
            </a>{" "}
            © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
