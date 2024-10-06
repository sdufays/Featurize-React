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
          action="/blog-details/api/submit" // Adjusted path to match your API route
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
  