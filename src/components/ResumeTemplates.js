import React from "react";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.png";
import { Link } from "react-router-dom";

export default function ResumeTemplates() {
  const templates = [
    { img: img1, templateNumber: 1 },
    { img: img2, templateNumber: 2 },
    { img: img3, templateNumber: 3 },
    { img: img4, templateNumber: 4 },
    { img: img5, templateNumber: 5 },
    { img: img6, templateNumber: 6 },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 text-center my-8">
        Sample Resume Templates
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {templates.map((template, index) => (
          <div key={index} className="relative group w-auto h-auto">
            <img
              src={template.img}
              alt={`Template ${template.templateNumber}`}
              className="w-full h-full object-contain rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <Link
                to={`/resumebuilder/template/${template.templateNumber}`}
                className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
              >
                Create Resume
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
