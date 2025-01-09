import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-brand-dark text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* About Section */}
        <div className="flex flex-col gap-6">
          <div className="relative">
            <h3 className="font-bold text-xl">About Us</h3>
            <div className="absolute bottom-0 left-0 w-7 h-[2px] bg-red-500 -mb-2"></div>
          </div>
          <p className="text-gray-300 leading-relaxed lg:w-[80%]">
            Quicklie Distribution is your one-stop solution for all wholesale
            beverage needs. We pride ourselves on providing a seamless supply
            chain, offering premium spirits, wines, and other beverages with
            unmatched efficiency. Trust us to stock your shelves and keep your
            business running smoothly
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col gap-6">
          <div className="relative">
            <h3 className="font-bold text-xl">Quick Links</h3>
            <div className="absolute bottom-0 left-0 w-7 h-[2px] bg-red-500 -mb-2"></div>
          </div>
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            {/* <Link
              href="/requests"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Requests
            </Link>
            <Link
              href="/orders"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Orders
            </Link>
            <Link
              href="/notifications"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Notifications
            </Link> */}
            <Link
              href="/faqs"
              className="text-gray-300 hover:text-white transition-colors"
            >
              FAQs
            </Link>
            {/* <Link
              href="/privacy-policy"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link> */}
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="flex flex-col gap-6">
          <div className="relative">
            <h3 className="font-bold text-xl">Contact Us</h3>
            <div className="absolute bottom-0 left-0 w-7 h-[2px] bg-red-500 -mb-2"></div>
          </div>
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-brand-white text-brand-dark px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="bg-brand-white text-brand-dark px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
