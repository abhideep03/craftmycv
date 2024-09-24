import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{question}</span>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="mt-2">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "How do I create a resume?",
      answer:
        "To create a resume, start by gathering your personal information, work experience, education, and skills. Then, choose a template and fill in your details. Make sure to tailor your resume to the job you're applying for.",
    },
    {
      question: "What should I include in my resume?",
      answer:
        "Your resume should include your contact information, a summary or objective statement, work experience, education, skills, and any relevant achievements or certifications.",
    },
    {
      question: "How long should my resume be?",
      answer:
        "Generally, your resume should be one to two pages long. For entry-level positions, aim for one page. For more experienced professionals, two pages may be appropriate.",
    },
    {
      question: "How can I make my resume stand out?",
      answer:
        "To make your resume stand out, use a clean and professional format, highlight your achievements with quantifiable results, and tailor your resume to match the job description. Use keywords from the job posting and include a compelling summary statement.",
    },
    {
      question: "Should I include references in my resume?",
      answer:
        "It's generally not necessary to include references directly on your resume. Instead, include a note that references are available upon request. Prepare a separate reference list that you can provide if requested by the employer.",
    },
  ];

  return (
    <>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Steps to Create Your Resume
        </h1>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-4/5 mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-2xl font-bold mb-4 text-blue-600">
                Step 1
              </div>
              <h2 className="text-xl font-semibold mb-2">Gather Information</h2>
              <p className="text-gray-600">
                Collect all relevant details about your work history, education,
                skills, and achievements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-2xl font-bold mb-4 text-blue-600">
                Step 2
              </div>
              <h2 className="text-xl font-semibold mb-2">Choose a Format</h2>
              <p className="text-gray-600">
                Select a resume format that best highlights your strengths and
                fits your career situation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-2xl font-bold mb-4 text-blue-600">
                Step 3
              </div>
              <h2 className="text-xl font-semibold mb-2">Write and Refine</h2>
              <p className="text-gray-600">
                Draft your resume content, then edit and proofread carefully to
                ensure it's polished and error-free.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-8">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;
