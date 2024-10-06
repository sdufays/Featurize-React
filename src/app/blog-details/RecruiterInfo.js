// src/components/LandingPage/RecruiterInfo.js

import Image from "next/image";

const RecruiterInfo = () => {
  return (
    <div className="flex flex-col items-center mb-12">
      <div className="relative h-20 w-20 mb-4">
        {/* Placeholder for Recruiter's Headshot */}
        <Image
          src="/images/recruiter-placeholder.png" // Replace with actual headshot path
          alt="Recruiter Headshot"
          fill
          className="rounded-full object-cover"
        />
      </div>
      <h4 className="text-xl font-semibold text-black dark:text-white">
        Jane Doe
      </h4>
      <p className="text-base text-gray-600 dark:text-gray-300">
        Senior Recruiter at Uber
      </p>
    </div>
  );
};

export default RecruiterInfo;
