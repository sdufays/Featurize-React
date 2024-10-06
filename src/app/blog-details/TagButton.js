// src/pages/TagButton.js
"use client"; // <-- Add this directive if using client-side features

import { useState } from "react";

const TagButton = ({ text }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setIsActive(!isActive)}
      className={`mr-2 mb-2 inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${
        isActive
          ? "bg-primary text-white"
          : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
      } hover:bg-gray-300 dark:hover:bg-gray-600`}
    >
      {text}
    </button>
  );
};

export default TagButton;
