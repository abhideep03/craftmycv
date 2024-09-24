import React, { useState } from "react";
import { useParams } from "react-router-dom"; // to get the template number from the URL
import ResumeForm from "./ResumeForm";
import Template1 from "./Templates/Template1";
import Template2 from "./Templates/Template2";
import Template3 from "./Templates/Template3";
import Template4 from "./Templates/Template4";
import Template5 from "./Templates/Template5";
import Template6 from "./Templates/Template6";
import Template7 from "./Templates/Template7";
import html2pdf from "html2pdf.js";

const ResumeBuilder = () => {
  const { templateNumber } = useParams();

  const [formData, setFormData] = useState({
    firstName: "Michael",
    lastName: "Jordan",
    email: "michael776@example.com",
    phone: "9123456789",
    links: "github.com",
    summary:
      "A passionate frontend developer with expertise in crafting dynamic and responsive user interfaces.",
    education: [
      {
        clg_name: "CBIT",
        course_name: "Computer Science",
        cgpa: "8.5",
        from: "2021",
        to: "2025",
      },
    ],
    experience: [
      {
        exp_position: "Team Lead",
        exp_company: "Course Vita",
        exp_desc:
          "Developed key features using ReactJS, enhancing application performance and user engagement.",
        exp_from: "2021",
        exp_to: "2025",
      },
    ],
    skills: "Html, Css, Javascript, Python, Machine Learning",
    projects: [
      {
        proj_name: "Resume Builder",
        proj_desc: "Build a resume pdf using data collected from a form",
        proj_link: "www.craftMyCV.com",
      },
    ],
    certifications: [
      {
        cert_name: "Google Data Analytics",
        cert_orgname: "Coursera",
        cert_link: "www.coursera.com",
      },
    ],
    achievements: "Winner in Hackathon conducted by Course Vita",
    extra_curricular_activities: "Reading books, playing badminton, jogging",
    additional_links: "www.linkedIn.com, www.leetcode.com",
  });

  const handleFormChange = (newData) => {
    setFormData(newData);
  };

  const generatePDF = () => {
    const element = document.getElementById("resumePreview");
    const opt = {
      margin: 0,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };
    html2pdf().set(opt).from(element).save();
  };

  // Function to render the template based on templateNumber from the URL
  const renderTemplate = () => {
    switch (templateNumber) {
      case "1":
        return <Template1 formData={formData} />;
      case "2":
        return <Template2 formData={formData} />;
      case "3":
        return <Template3 formData={formData} />;
      case "4":
        return <Template4 formData={formData} />;
      case "5":
        return <Template5 formData={formData} />;
      case "6":
        return <Template6 formData={formData} />;
      case "7":
        return <Template7 formData={formData} />;
      default:
        return <Template1 formData={formData} />; // default to Template1
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row mx-auto">
        <div className="w-full lg:w-1/2">
          <h1 className="text-center py-2 text-2xl font-bold text-black">
            Fill in the form
          </h1>
          <ResumeForm formData={formData} onFormChange={handleFormChange} />
          <div className="flex justify-center w-full pt-4 pb-4">
            <button
              type="button"
              onClick={generatePDF}
              className="text-center p-3 shadow-xl bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Generate PDF
            </button>
          </div>
        </div>

        <div
          id="resumePreview"
          className="w-full mx-auto mt-4 mb-4 shadow-2xl rounded-lg lg:w-1/2 lg:mx-4 lg:mt-0"
        >
          {renderTemplate()}
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
