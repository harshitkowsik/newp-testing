
import React from 'react';
import SEO from '../SEO';
import { certifications, awards } from '../constants';

const HighlightsPage: React.FC = () => {
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
            <SEO 
                title="Professional Highlights - Dr. Ashutosh Mishra"
                description="Discover the professional highlights of Dr. Ashutosh Mishra, including his certifications, awards, key strengths, and language proficiency."
                keywords="certifications, awards, professional qualifications, key strengths, Dr. Ashutosh Mishra, highlights"
                pathname="/highlights"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold font-heading text-primary">Professional Highlights</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
                        A curated overview of certifications, awards, and key strengths that define a distinguished career.
                    </p>
                </div>

                <div className="space-y-16">
                    <section>
                        <h2 className="text-2xl font-bold font-heading text-secondary border-b-2 border-primary pb-2 mb-6">Certifications & Professional Qualifications</h2>
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
                    
                    <section>
                        <h2 className="text-2xl font-bold font-heading text-secondary border-b-2 border-primary pb-2 mb-6">Awards & Recognitions</h2>
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
                        <section>
                            <h2 className="text-2xl font-bold font-heading text-secondary border-b-2 border-primary pb-2 mb-6">Online Certifications & Courses</h2>
                            <ul className="list-disc list-inside space-y-2 bg-white p-6 rounded-lg shadow-md">
                                {onlineCourses.map((course, index) => (
                                    <li key={index} className="text-gray-700">{course}</li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold font-heading text-secondary border-b-2 border-primary pb-2 mb-6">Languages</h2>
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

                    <section>
                        <h2 className="text-2xl font-bold font-heading text-secondary border-b-2 border-primary pb-2 mb-6">Key Strengths</h2>
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
