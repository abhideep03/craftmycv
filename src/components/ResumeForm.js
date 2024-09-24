import React, { useState, useRef } from "react";
import ExpandableSection from "./ExpandableSection";

const ResumeForm = ({ formData, onFormChange }) => {
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    onFormChange({ ...formData, [name]: value });
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const photoUrl = URL.createObjectURL(file);
      onFormChange({ ...formData, photo: photoUrl });
    }
  };

  const handleSectionChange = (section, index, field, value) => {
    const updatedSection = [...formData[section]];
    updatedSection[index][field] = value;
    onFormChange({ ...formData, [section]: updatedSection });
  };

  const handleAddField = (section) => {
    const updatedSection = [...formData[section], { ...formData[section][0] }];
    onFormChange({ ...formData, [section]: updatedSection });
  };

  const handleRemoveField = (section, index) => {
    const updatedSection = formData[section].filter((_, i) => i !== index);
    onFormChange({ ...formData, [section]: updatedSection });
  };

  return (
    <form className="bg-white p-4 mx-4 rounded-lg shadow-2xl lg:mx-4 lg:mb-4">
      <ExpandableSection title="Basic Details">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        <input
          type="file"
          ref={fileInputRef}
          onChange={handlePhotoChange}
          className="hidden"
        />
      </ExpandableSection>

      <ExpandableSection title="Summary">
        <textarea
          name="summary"
          value={formData.summary}
          onChange={handleChange}
          placeholder="Professional summary"
          className="w-full p-2 border rounded"
          rows="4"
        />
      </ExpandableSection>

      <ExpandableSection title="Education">
        {formData.education.map((edu, index) => (
          <div key={index} className="space-y-2">
            <input
              type="text"
              value={edu.clg_name}
              onChange={(e) =>
                handleSectionChange(
                  "education",
                  index,
                  "clg_name",
                  e.target.value
                )
              }
              placeholder="School/College/University"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              value={edu.course_name}
              onChange={(e) =>
                handleSectionChange(
                  "education",
                  index,
                  "course_name",
                  e.target.value
                )
              }
              placeholder="Course"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              value={edu.cgpa}
              onChange={(e) =>
                handleSectionChange("education", index, "cgpa", e.target.value)
              }
              placeholder="CGPA"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              value={edu.from}
              onChange={(e) =>
                handleSectionChange("education", index, "from", e.target.value)
              }
              placeholder="From"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              value={edu.to}
              onChange={(e) =>
                handleSectionChange("education", index, "to", e.target.value)
              }
              placeholder="To"
              className="w-full p-2 border rounded"
            />
            {formData.education.length > 1 && (
              <button
                type="button"
                onClick={() => handleRemoveField("education", index)}
                className="w-full p-2 bg-red-500 text-white rounded"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={() => handleAddField("education")}
          className="w-full p-2 bg-green-500 text-white rounded"
        >
          Add Education
        </button>
      </ExpandableSection>

      {/* Similar sections for Experience, Projects, Certifications */}

      {/* Skills */}
      <ExpandableSection title="Skills">
        <textarea
          id="skills"
          name="skills"
          value={DataTransfer.skills}
          onChange={handleChange}
          rows="4"
          placeholder="Skills........"
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </ExpandableSection>

      {/* Experience */}
      <ExpandableSection title="Experience">
        {formData.experience.map((experience, index) => (
          <div key={index} className="mb-4 border-b pb-4">
            <input
              type="text"
              name="position"
              value={experience.position}
              placeholder="Position"
              onChange={(e) =>
                handleSectionChange(
                  "experience",
                  index,
                  "exp_position",
                  e.target.value
                )
              }
              className="w-full mb-2 p-2 border border-gray-300 rounded-md shadow-sm"
            />
            <input
              type="text"
              name="organization"
              value={experience.exp_company}
              placeholder="Organization"
              onChange={(e) =>
                handleSectionChange(
                  "experience",
                  index,
                  "exp_company",
                  e.target.value
                )
              }
              className="w-full mb-2 p-2 border border-gray-300 rounded-md shadow-sm"
            />
            <textarea
              name="description"
              value={experience.exp_desc}
              placeholder="Describe your role..."
              onChange={(e) =>
                handleSectionChange(
                  "experience",
                  index,
                  "exp_desc",
                  e.target.value
                )
              }
              rows="2"
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
            <div className="flex gap-2">
              <input
                type="text"
                name="from"
                value={experience.exp_from}
                placeholder="From"
                onChange={(e) =>
                  handleSectionChange(
                    "experience",
                    index,
                    "exp_from",
                    e.target.value
                  )
                }
                className="w-1/2 mb-2 p-2 border border-gray-300 rounded-md shadow-sm"
              />
              <input
                type="text"
                name="to"
                value={experience.exp_to}
                placeholder="To"
                onChange={(e) =>
                  handleSectionChange(
                    "experience",
                    index,
                    "exp_to",
                    e.target.value
                  )
                }
                className="w-1/2 mb-2 p-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            {formData.experience.length > 1 && (
              <button
                type="button"
                onClick={() => handleRemoveField("experience", index)}
                className="mt-2 text-red-500 hover:underline"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={() => handleAddField("experience")}
          className="w-full p-2 bg-green-500 text-white rounded"
        >
          Add Experience
        </button>
      </ExpandableSection>

      {/* Certifications */}
      <ExpandableSection title="Certifications">
        {formData.certifications.map((certifications, index) => (
          <div key={index} className="mb-4 border-b pb-4">
            <input
              type="text"
              name="cert_name"
              value={certifications.cert_name}
              placeholder="Certification name"
              onChange={(e) =>
                handleSectionChange(
                  "certifications",
                  index,
                  "cert_name",
                  e.target.value
                )
              }
              className="w-full mb-2 p-2 border border-gray-300 rounded-md shadow-sm"
            />
            <input
              type="text"
              name="cert_orgname"
              value={certifications.cert_orgname}
              placeholder="Organization"
              onChange={(e) =>
                handleSectionChange(
                  "certifications",
                  index,
                  "cert_orgname",
                  e.target.value
                )
              }
              className="w-full mb-2 p-2 border border-gray-300 rounded-md shadow-sm"
            />
            <textarea
              name="cert_link"
              value={certifications.cert_link}
              placeholder="Links"
              onChange={(e) =>
                handleSectionChange(
                  "certifications",
                  index,
                  "cert_link",
                  e.target.value
                )
              }
              rows="2"
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
            {formData.certifications.length > 1 && (
              <button
                type="button"
                onClick={() => handleRemoveField("certifications", index)}
                className="mt-2 text-red-500 hover:underline"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={() => handleAddField("certifications")}
          className="w-full p-2 bg-green-500 text-white rounded"
        >
          Add Certification
        </button>
      </ExpandableSection>

      {/* Certifications */}
      <ExpandableSection title="Projects">
        {formData.projects.map((project, index) => (
          <div key={index} className="mb-4 border-b pb-4">
            <input
              type="text"
              name="proj_name"
              value={project.proj_name}
              placeholder="projects name"
              onChange={(e) =>
                handleSectionChange(
                  "projects",
                  index,
                  "proj_name",
                  e.target.value
                )
              }
              className="w-full mb-2 p-2 border border-gray-300 rounded-md shadow-sm"
            />
            <textarea
              name="proj_desc"
              value={project.proj_desc}
              placeholder="Desc"
              onChange={(e) =>
                handleSectionChange(
                  "projects",
                  index,
                  "proj_desc",
                  e.target.value
                )
              }
              rows="3"
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
            <input
              type="text"
              name="proj_link"
              value={project.proj_link}
              placeholder="projects links"
              onChange={(e) =>
                handleSectionChange(
                  "projects",
                  index,
                  "proj_link",
                  e.target.value
                )
              }
              className="w-full mb-2 p-2 border border-gray-300 rounded-md shadow-sm"
            />

            {formData.projects.length > 1 && (
              <button
                type="button"
                onClick={() => handleRemoveField("projects", index)}
                className="mt-2 text-red-500 hover:underline"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={() => handleAddField("projects")}
          className="w-full p-2 bg-green-500 text-white rounded"
        >
          Add Project
        </button>
      </ExpandableSection>

      <ExpandableSection title="Extra-Curricular Activities">
        <textarea
          name="extra_curricular_activities"
          value={formData.extra_curricular_activities}
          onChange={handleChange}
          placeholder="Your extra-curricular activities"
          className="w-full p-2 border rounded"
          rows="4"
        />
      </ExpandableSection>

      <ExpandableSection title="Additional Links">
        <input
          type="text"
          name="additional_links"
          value={formData.additional_links}
          onChange={handleChange}
          placeholder="Additional links"
          className="w-full p-2 border rounded"
        />
      </ExpandableSection>
    </form>
  );
};

export default ResumeForm;
