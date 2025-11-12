import React, { useEffect } from 'react';
import { certifications, awards } from '../constants';

const HighlightsPage: React.FC = () => {
   useEffect(() => {
       document.title = "Highlights | Dr. Ashutosh Mishra - Supreme Court Advocate | Professor of Management & Law | Author | NLP Master Practitioner | Psychologist | PhD Guide | PMP | IIM Ahmedabad Alumnus";
       const metaDescription = document.querySelector('meta[name="description"]');
       if (metaDescription) {
         metaDescription.setAttribute('content', " Dr. Ashutosh Mishra is a distinguished Supreme Court Advocate, Corporate Legal Strategist, and Professor of Management & Law with over two decades of leadership excellence in legal, academic, and corporate domains. An IIM Ahmedabad alumnus, he brings together the rare blend of legal acumen, managerial insight, and psychological depth that defines next-generation leadershipp. As a PhD Guide and academic mentor, Dr.Mishra has guided research scholars across India and Europe in Corporate Law, Organizational Behavior, and Strategic Management.He is also a Certified Project Management Professional(PMP) and an NLP Master Practitioner, applying behavioral science and neuro - linguistic techniques to leadership, negotiation, and conflict resolution. Beyond the courtroom, Dr.Mishra is an Author, Psychologist, and Motivational Speaker known for his transformative sessions on Human Resource Development, Corporate Ethics, and Emotional Intelligence in Leadership.As the President of Atal Foundation, and Director of JBLC INDIA, one of the top 10 law firms in India, he has led numerous national initiatives in education, entrepreneurship, and social reform. His work unites law, psychology, and management science—empowering individuals and institutions to lead with integrity, innovation, and purpose. ");
       }
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