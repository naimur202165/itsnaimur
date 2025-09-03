"use client";

import GlassmorphismCard from "@/components/glassmorphism-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import React, { FormEvent, useState } from "react";

interface FormData {
  name: string;
  email: string;
  projectType: string;
  timeline: string;
  projectDetails: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    projectType: "",
    timeline: "",
    projectDetails: "",
  });

  const [message, setMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("Sending...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Message sent successfully! 🎉");
        setFormData({
          name: "",
          email: "",
          projectType: "",
          timeline: "",
          projectDetails: "",
        });
      } else {
        const errorData = await response.json();
        setMessage(`Failed to send message: ${errorData.message}`);
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#1a1a2e]">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <GlassmorphismCard className="p-8 max-w-2xl w-full">
          <h3 className="text-2xl font-semibold mb-6 text-white text-center">
            Send Message
          </h3>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm text-gray-300 mb-2 block"
                >
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="bg-gray-800/50 border-gray-600 text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-sm text-gray-300 mb-2 block"
                >
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="bg-gray-800/50 border-gray-600 text-white"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="projectType"
                className="text-sm text-gray-300 mb-2 block"
              >
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full bg-gray-800/50 border border-gray-600 text-white rounded-md px-3 py-2"
              >
                <option value="">Select project type</option>
                <option value="Web Development">Web Development</option>
                <option value="Mobile App">Mobile App</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="timeline"
                className="text-sm text-gray-300 mb-2 block"
              >
                Timeline
              </label>
              <Input
                id="timeline"
                name="timeline"
                type="text"
                value={formData.timeline}
                onChange={handleChange}
                placeholder="e.g., 1 week, ASAP"
                className="bg-gray-800/50 border-gray-600 text-white"
              />
            </div>

            <div>
              <label
                htmlFor="projectDetails"
                className="text-sm text-gray-300 mb-2 block"
              >
                Project Details *
              </label>
              <Textarea
                id="projectDetails"
                name="projectDetails"
                required
                rows={6}
                value={formData.projectDetails}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="bg-gray-800/50 border-gray-600 text-white resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2"
            >
              <Send className="mr-2" size={16} />
              Send Message
            </Button>
          </form>

          {message && (
            <p className="text-center mt-4 font-semibold text-gray-400">
              {message}
            </p>
          )}

          <div className="mt-6 pt-6 border-t border-gray-700">
            <p className="text-gray-400 text-sm text-center">
              Prefer to chat directly? Reach out on{" "}
              <a
                href="https://wa.me/YOUR_PHONE_NUMBER"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300"
              >
                WhatsApp
              </a>{" "}
              for instant communication.
            </p>
          </div>
        </GlassmorphismCard>
      </motion.div>
    </div>
  );
};

export default ContactForm;
