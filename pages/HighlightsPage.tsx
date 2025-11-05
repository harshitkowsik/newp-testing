import React, { useEffect } from 'react';
import { certifications, awards } from '../constants';

const HighlightsPage: React.FC = () => {
    useEffect(() => {
        document.title = "Highlights | Dr. Ashutosh Mishra - Awards & Certifications";
    }, []);

    const onlineCourses = [
        "Think Again I - Duke University",
        "Learning How to Learn - University of California San Diego",
        "Leadership in 21st Century Organizations - Copenhagen Business School",
    ];

    const languages = [
        { lang: "Bhojpuri", proficiency: "Full Professional Proficiency" },
        { lang: "Hindi", proficiency: "Professional Working Proficiency" },
        { lang: "English", proficiency: "Professional Working Proficiency" },
        { lang: "Marathi", proficiency: "Elementary Proficiency" },
    ];

    const keyStrengths = [
        "Integration of Legal Expertise with Management Principles",
        "Execution-Focused Strategy",
        "Sustainable Growth & Long-term Success",
        "Global Perspective & Local Expertise",
        "Track Record of Success in Multiple Sectors",
        "Expertise in Startups & Investor Relations",
    ];

    return (
        <div className="bg-light-bg py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="text-center mb-16" aria-labelledby="page-heading-highlights">
                    <h1 id="page-heading-highlights" className="text-4xl font-extrabold font-heading text-primary">Professional Highlights</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
                        A curated overview of certifications, awards, and key strengths that define a distinguished career.
                    </p>
                </header>

                <div className="space-y-16">
                    <section aria-labelledby="certifications-heading">
                        <h2 id="certifications-heading" className="text-2xl font-bold font-heading text-secondary border-b-2 border-primary pb-2 mb-6">Certifications & Professional Qualifications</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {certifications.map((cert, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="font-bold text-lg text-primary">{cert.title}</h3>
                                    <p className="text-gray-600">{cert.issuer}</p>
                                    {cert.date && <p className="text-sm text-gray-500 mt-1">Issued: {cert.date}</p>}
                                </div>
                            ))}
                        </div>
                    </section>
                    
                    <section aria-labelledby="awards-heading">
                        <h2 id="awards-heading" className="text-2xl font-bold font-heading text-secondary border-b-2 border-primary pb-2 mb-6">Awards & Recognitions</h2>
                        <div className="space-y-4">
                            {awards.map((award, index) => (
                                <div key={index} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
                                    <div>
                                        <h3 className="font-semibold text-lg text-primary">{award.title}</h3>
                                        <p className="text-gray-600">{award.issuer}</p>
                                    </div>
                                    <span className="text-sm font-medium bg-accent-gold text-secondary px-3 py-1 rounded-full">{award.date}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <section aria-labelledby="online-courses-heading">
                            <h2 id="online-courses-heading" className="text-2xl font-bold font-heading text-secondary border-b-2 border-primary pb-2 mb-6">Online Certifications & Courses</h2>
                            <ul className="list-disc list-inside space-y-2 bg-white p-6 rounded-lg shadow-md">
                                {onlineCourses.map((course, index) => (
                                    <li key={index} className="text-gray-700">{course}</li>
                                ))}
                            </ul>
                        </section>

                        <section aria-labelledby="languages-heading">
                            <h2 id="languages-heading" className="text-2xl font-bold font-heading text-secondary border-b-2 border-primary pb-2 mb-6">Languages</h2>
                            <div className="bg-white p-6 rounded-lg shadow-md space-y-3">
                                {languages.map((lang, index) => (
                                    <div key={index} className="flex justify-between items-baseline">
                                        <p className="font-semibold text-gray-800">{lang.lang}</p>
                                        <p className="text-sm text-gray-600">{lang.proficiency}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <section aria-labelledby="strengths-heading">
                        <h2 id="strengths-heading" className="text-2xl font-bold font-heading text-secondary border-b-2 border-primary pb-2 mb-6">Key Strengths</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {keyStrengths.map((strength, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                                    <p className="font-semibold text-gray-800">{strength}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default HighlightsPage;