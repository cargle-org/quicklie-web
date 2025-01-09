"use client";

import React, { useState } from "react";
import contactbg from "@/assets/imgs/landing/contact_us/bg.png";
import Image from "next/image";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-[400px] lg:h-[600px] flex flex-col items-center justify-center text-center">
          <div className="absolute inset-0">
            <Image
              src={contactbg}
              alt="contact"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative z-10">
            <h1 className="text-4xl font-bold text-brand-main mb-4">
              Contact Us
            </h1>
            <p className="text-lg max-w-md text-brand-white">
              Send us a message now, and we will respond as soon as possible
            </p>
          </div>
        </div>

        <div className="bg-white p-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded-lg bg-brand-ash/20"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full p-3 rounded-lg bg-brand-ash/20"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              />
            </div>
            <button
              type="submit"
              className="mt-4 px-6 py-3 bg-brand-main text-white rounded-lg hover:bg-brand-main/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
