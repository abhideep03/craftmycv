import React from 'react';

const Template2 = ({ formData }) => {
    const { firstName, lastName, email, phone, links, summary, education, experience, skills, projects, certifications, achievements, extra_curricular_activities, additional_links } = formData;

    return (
        <div className="p-6 max-w-3xl mx-auto bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 shadow-lg rounded-lg">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold text-blue-800">{firstName} {lastName}</h1>
                <p className="text-lg text-blue-600">{email} | {phone}</p>
                {links && <a href={links} className="text-blue-700 hover:underline">{links}</a>}
            </header>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-800 mb-3">Summary</h2>
                <p className="text-blue-700">{summary}</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-800 mb-3">Education</h2>
                {education.map((edu, index) => (
                    <div key={index} className="bg-white p-4 mb-4 shadow-lg rounded-lg">
                        <h3 className="text-xl font-semibold text-blue-800">{edu.clg_name}</h3>
                        <p className="text-blue-600">{edu.course_name} - CGPA: {edu.cgpa}</p>
                        <p className="text-blue-600">{edu.from} - {edu.to}</p>
                    </div>
                ))}
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-800 mb-3">Skills</h2>
                <p className="text-blue-700">{skills}</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-800 mb-3">Projects</h2>
                {projects.map((proj, index) => (
                    <div key={index} className="bg-white p-4 mb-4 shadow-lg rounded-lg">
                        <h3 className="text-xl font-semibold text-blue-800">{proj.proj_name}</h3>
                        <p className="text-blue-600">{proj.proj_desc}</p>
                        {proj.proj_link && <a href={proj.proj_link} className="text-blue-700 hover:underline">{proj.proj_link}</a>}
                    </div>
                ))}
            </section>

            {certifications.length > 0 && (
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-blue-800 mb-3">Certifications</h2>
                    {certifications.map((cert, index) => (
                        <div key={index} className="bg-white p-4 mb-4 shadow-lg rounded-lg">
                            <h3 className="text-xl font-semibold text-blue-800">{cert.cert_name}</h3>
                            <p className="text-blue-600">{cert.cert_orgname}</p>
                            {cert.cert_link && <a href={cert.cert_link} className="text-blue-700 hover:underline">{cert.cert_link}</a>}
                        </div>
                    ))}
                </section>
            )}

            {achievements && (
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-blue-800 mb-3">Achievements</h2>
                    <p className="text-blue-700">{achievements}</p>
                </section>
            )}

            {extra_curricular_activities && (
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-blue-800 mb-3">Extra-Curricular Activities</h2>
                    <p className="text-blue-700">{extra_curricular_activities}</p>
                </section>
            )}

            {additional_links && (
                <section>
                    <h2 className="text-2xl font-semibold text-blue-800 mb-3">Additional Links</h2>
                    <a href={additional_links} className="text-blue-700 hover:underline">{additional_links}</a>
                </section>
            )}
        </div>
    );
};

export default Template2;
