"use client";

import { m } from "framer-motion";
import GlassmorphismCard from "@/components/glassmorphism-card";
import {
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ArrowUpRight,
  Linkedin,
  Instagram,
  Music2,
  Youtube,
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="text-center mb-24 relative"
        >
          {/* Spotlight Effect behind title */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/15 blur-[100px] rounded-full pointer-events-none" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mt-0 md:mt-16 mb-6 text-white tracking-tight relative z-10">
            <span className="bg-gradient-to-r from-white via-purple-100 to-gray-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed relative z-10">
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Let's create something amazing together!
          </p>
        </m.div>

        <div className="grid lg:grid-cols-2 gap-12 justify-center items-center">
          {/* Contact Info */}
          <m.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <GlassmorphismCard className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=naimur202164@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      naimur202164@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-green-600 p-3 rounded-lg">
                    <MessageCircle className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">WhatsApp</p>
                    <a
                      href="https://wa.me/+8801778470061"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-green-400 transition-colors"
                    >
                      +88 (017) 784-70061
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-purple-600 p-3 rounded-lg">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Available Worldwide (Remote)</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-orange-600 p-3 rounded-lg">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Availability</p>
                    <p className="text-white">Flexible with time zones</p>
                  </div>
                </div>
              </div>
            </GlassmorphismCard>

            <GlassmorphismCard className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Why Choose Me?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-white">Quick Turnaround</h4>
                    <p className="text-gray-400 text-sm">
                      Fast delivery without compromising quality
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-600 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-white">
                      Professional Quality
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Cinematic edits with attention to detail
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-600 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-white">
                      Clear Communication
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Regular updates and transparent process
                    </p>
                  </div>
                </div>
              </div>
            </GlassmorphismCard>

          </m.div>

          {/* Direct Contact */}
          <m.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <GlassmorphismCard className="p-8">
              <h3 className="text-2xl font-semibold mb-3 text-white">
                Let&apos;s Work Together
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Tell me about your project directly on WhatsApp. I&apos;ll get back to you as soon as possible.
              </p>
              <a href="https://wa.me/+8801778470061" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full rounded-2xl bg-green-600 px-5 py-4 text-white font-semibold hover:bg-green-500 transition-colors">
                <span className="flex items-center gap-3"><MessageCircle size={22} /> Start a WhatsApp Chat</span>
                <ArrowUpRight size={20} />
              </a>
            </GlassmorphismCard>

            <GlassmorphismCard className="p-8 mt-8">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Find Me Online
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://www.linkedin.com/in/naimur202164/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl bg-blue-600/20 px-4 py-3 text-white transition-colors hover:bg-blue-600/40"
                >
                  <Linkedin size={20} /> LinkedIn
                </a>
                <a
                  href="https://www.tiktok.com/@naimur202164"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl bg-pink-600/20 px-4 py-3 text-white transition-colors hover:bg-pink-600/40"
                >
                  <Music2 size={20} /> TikTok
                </a>
                <a
                  href="https://www.youtube.com/channel/UCcBIyuW6S7_xyhsRr_bLc2A/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl bg-red-600/20 px-4 py-3 text-white transition-colors hover:bg-red-600/40"
                >
                  <Youtube size={20} /> YouTube
                </a>
                <a
                  href="https://www.instagram.com/naimur202170/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl bg-purple-600/20 px-4 py-3 text-white transition-colors hover:bg-purple-600/40"
                >
                  <Instagram size={20} /> Instagram
                </a>
              </div>
            </GlassmorphismCard>
          </m.div>
        </div>

        {/* FAQ Section */}
        {/* <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <GlassmorphismCard className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-white text-center">
              Frequently Asked Questions
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-white mb-2">
                    How long does a typical project take?
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Most projects are completed within 3-7 days, depending on
                    complexity and length. Rush orders can be accommodated.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-2">
                    What file formats do you work with?
                  </h4>
                  <p className="text-gray-400 text-sm">
                    I work with all major video formats including MP4, MOV, AVI,
                    and more. I can deliver in any format you need.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-2">
                    Do you provide revisions?
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Yes! I include multiple revisions in all packages to ensure
                    you're completely satisfied with the final result.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-white mb-2">
                    What's your payment process?
                  </h4>
                  <p className="text-gray-400 text-sm">
                    I typically require 50% upfront and 50% upon completion.
                    Payment can be made via PayPal, bank transfer, or other
                    methods.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-2">
                    Can you work with my existing brand guidelines?
                  </h4>
                  <p className="text-gray-400 text-sm">
                    I can work with your brand colors, fonts, logos, and style
                    guidelines to maintain consistency.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-2">
                    Do you offer ongoing video editing services?
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Yes! I work with many clients on retainer for regular
                    content creation. Let's discuss your ongoing needs.
                  </p>
                </div>
              </div>
            </div>
          </GlassmorphismCard>
        </m.div> */}
      </div>
    </div>
  );
}
