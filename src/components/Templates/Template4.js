import React from 'react';

const Template4 = ({ formData }) => {
    const { firstName, lastName, email, phone, links, summary, education, experience, skills, projects, certifications, achievements, extra_curricular_activities, additional_links } = formData;

    return (
        <div className="p-8 max-w-3xl mx-auto bg-gray-50 border-t-4 border-green-500 shadow-md rounded-lg">
            <header className="text-center mb-8">
                <h1 className="text-3xl font-bold text-green-800">{firstName} {lastName}</h1>
                <p className="text-lg text-gray-600">{email} | {phone}</p>
                <a href={links} className="text-green-600">{links}</a>
            </header>
            <section className="mb-8 text-center">
                <h2 className="text-xl font-semibold mb-2">Summary</h2>
                <p className="text-gray-800">{summary}</p>
            </section>
            <section className="mb-8">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Education</h2>
                        {education.map((edu, index) => (
                            <div key={index} className="mb-4">
                                <h3 className="text-lg font-semibold">{edu.clg_name}</h3>
                                <p className="text-gray-600">{edu.course_name}</p>
                                <p className="text-gray-600">CGPA: {edu.cgpa}</p>
                                <p className="text-gray-600">{edu.from} - {edu.to}</p>
                            </div>
                        ))}
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Experience</h2>
                        {experience.map((exp, index) => (
                            <div key={index} className="mb-4">
                                <h3 className="text-lg font-semibold">{exp.exp_position} at {exp.exp_company}</h3>
                                <p className="text-gray-600">{exp.exp_desc}</p>
                                <p className="text-gray-600">{exp.exp_from} - {exp.exp_to}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="mb-8 text-center">
                <h2 className="text-xl font-semibold mb-2">Skills</h2>
                <p className="text-gray-800">{skills}</p>
            </section>
            <section className="mb-8">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Projects</h2>
                        {projects.map((proj, index) => (
                            <div key={index} className="mb-4">
                                <h3 className="text-lg font-semibold">{proj.proj_name}</h3>
                                <p className="text-gray-600">{proj.proj_desc}</p>
                                <a href={proj.proj_link} className="text-green-600">{proj.proj_link}</a>
                            </div>
                        ))}
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Certifications</h2>
                        {certifications.map((cert, index) => (
                            <div key={index} className="mb-4">
                                <h3 className="text-lg font-semibold">{cert.cert_name}</h3>
                                <p className="text-gray-600">{cert.cert_orgname}</p>
                                <a href={cert.cert_link} className="text-green-600">{cert.cert_link}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="mb-8 text-center">
                <h2 className="text-xl font-semibold mb-2">Achievements</h2>
                <p className="text-gray-800">{achievements}</p>
            </section>
            <section className="mb-8 text-center">
                <h2 className="text-xl font-semibold mb-2">Extra-Curricular Activities</h2>
                <p className="text-gray-800">{extra_curricular_activities}</p>
            </section>
            <section className="text-center">
                <h2 className="text-xl font-semibold mb-2">Additional Links</h2>
                <a href={additional_links} className="text-green-600">{additional_links}</a>
            </section>
        </div>
    );
};

export default Template4;
