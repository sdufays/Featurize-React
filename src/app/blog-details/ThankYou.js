// src/pages/ThankYou.js

import Image from "next/image";
import { Metadata } from "next";

/**
 * Metadata Configuration
 * Enhances SEO and provides essential information for social sharing.
 */
export const metadata = {
  title: "Thank You | Uber Careers",
  description:
    "Thank you for your submission. We will review your request within 24-48 hours.",
};

/**
 * ThankYou Component
 * Displays a confirmation message to users after form submission.
 */
const ThankYou = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-4xl p-8 text-center">
        {/* Logo Section */}
        <LogoSection />

        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Thank You!
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          We appreciate your proposal. Our team will review your submission and
          get back to you within <strong>24-48 hours</strong>.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-2 bg-primary text-white rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors duration-300 text-sm font-medium"
        >
          Return to Home
        </a>
      </div>
    </section>
  );
};

export default ThankYou;

/**
 * LogoSection Component
 * Reuses the logo display for consistency.
 */
const LogoSection = () => {
  return (
    <div className="flex justify-center mt-16 mb-12">
      <div className="relative h-28 w-72">
        <Image
          src="/images/Uber_logo_2018.png" // Ensure the path is correct
          alt="Uber Logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};
