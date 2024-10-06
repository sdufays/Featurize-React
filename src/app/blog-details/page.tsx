// src/pages/BlogDetailsPage.js

import Image from "next/image";
import { Metadata } from "next";

/**
 * Metadata Configuration
 * Enhances SEO and provides essential information for social sharing.
 */
export const metadata = {
  title: "Uber Careers | Featurize",
  description:
    "Join Uber and help us innovate transportation solutions worldwide.",
  keywords: ["Uber", "Careers", "Transportation", "Job Opportunities"],
};

/**
 * BlogDetailsPage Component
 * Serves as the main landing page for Uber Careers, encapsulating all sub-components.
 */
const BlogDetailsPage = () => {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="w-full max-w-4xl p-8">
          {/* Logo Section */}
          <LogoSection />

          {/* Description Section */}
          <DescriptionSection />

          {/* Recruiter Info */}
          <RecruiterInfo />

          {/* Submission Form */}
          <SubmissionForm />
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;

/* -------------------- Component Definitions Below -------------------- */

/**
 * LogoSection Component
 * Displays the Uber logo prominently at the top of the page with added spacing.
 */
const LogoSection = () => {
  return (
    <div className="flex justify-center mt-16 mb-12">
      <div className="relative h-28 w-72">
        <Image
          src="/images/Uber_logo_2018.png" // Ensure this path is correct and the image is placed in public/images/
          alt="Uber Logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

/**
 * DescriptionSection Component
 * Provides a concise and engaging description of Uber's mission and services.
 */
const DescriptionSection = () => {
  return (
    <div className="mb-12 text-center px-4">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
        Welcome to Uber Careers
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        At Uber, we strive to revolutionize the way people move around the
        world. Our mission is to make transportation as reliable as running
        water, everywhere, for everyone. Join us in shaping the future of
        mobility.
      </p>
    </div>
  );
};

/**
 * RecruiterInfo Component
 * Showcases the recruiter's name, title, and professional headshot.
 */
const RecruiterInfo = () => {
  return (
    <div className="flex flex-col items-center mb-12">
      <div className="relative h-28 w-28 mb-4">
        {/* Recruiter's Headshot */}
        <Image
          src="/images/Headshot.jpg" // Ensure this path is correct and the image is placed in public/images/
          alt="Abraham Alemu Headshot"
          layout="fill"
          objectFit="cover"
          className="rounded-full border-4 border-primary"
        />
      </div>
      <h4 className="text-2xl font-semibold text-gray-800 dark:text-white">
        Abraham Alemu
      </h4>
      <p className="text-lg text-gray-500 dark:text-gray-300">
        Software Engineering Manager
      </p>
    </div>
  );
};

/**
 * SubmissionForm Component
 * Contains two large text boxes for developers to submit their proposals and a smaller submission button.
 * Redirects the user to a Thank You page after submission.
 */
const SubmissionForm = () => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
      <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        Submit Your Proposal
      </h3>
      <form
        action="/blog-sidebar" // Ensure this matches your API route path
        method="POST"
        className="space-y-6"
      >
        {/* First Question: Objective and Rationale */}
        <div>
          <label
            htmlFor="objective"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            What do you want to build and why?
          </label>
          <textarea
            id="objective"
            name="objective"
            rows="4"
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-gray-100 transition-colors duration-300"
            placeholder="Briefly describe your proposal or feature idea and its purpose..."
          ></textarea>
        </div>

        {/* Second Question: Technical Implementation */}
        <div>
          <label
            htmlFor="implementation"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            How would you technically implement it?
          </label>
          <textarea
            id="implementation"
            name="implementation"
            rows="4"
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-gray-100 transition-colors duration-300"
            placeholder="Outline the technical approach and technologies you would use..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-primary text-white rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors duration-300 text-sm font-medium"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
