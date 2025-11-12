import React, { useEffect } from 'react';
import { keyExpertise } from '../constants';



const AboutPage: React.FC = () => {

  useEffect(() => {
      document.title = "About | Dr. Ashutosh Mishra | Supreme Court Advocate | Professor of Management & Law | Author | Psychologist | NLP Master Practitioner | PhD Guide | PMP | IIM Ahmedabad Alumnus";
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', " Dr. Ashutosh Mishra is a distinguished Supreme Court Advocate, Corporate Legal Strategist, and Professor of Management & Law with over two decades of leadership excellence in legal, academic, and corporate domains. An IIM Ahmedabad alumnus, he brings together the rare blend of legal acumen, managerial insight, and psychological depth that defines next-generation leadershipp. As a PhD Guide and academic mentor, Dr.Mishra has guided research scholars across India and Europe in Corporate Law, Organizational Behavior, and Strategic Management.He is also a Certified Project Management Professional(PMP) and an NLP Master Practitioner, applying behavioral science and neuro - linguistic techniques to leadership, negotiation, and conflict resolution. Beyond the courtroom, Dr.Mishra is an Author, Psychologist, and Motivational Speaker known for his transformative sessions on Human Resource Development, Corporate Ethics, and Emotional Intelligence in Leadership.As the President of Atal Foundation, and Director of JBLC INDIA, one of the top 10 law firms in India, he has led numerous national initiatives in education, entrepreneurship, and social reform. His work unites law, psychology, and management science—empowering individuals and institutions to lead with integrity, innovation, and purpose. ");
      }
    }, []);

  const leadershipPrinciples = ['Friendly', 'Firm', 'Fair', 'Fit'];

  const education = [
    { degree: "PhD in Education", university: "Guru Ghasidas University", year: "2013" },
    { degree: "PhD in Management", university: "Newport University, Latvia", year: "2011" },
    { degree: "Master's in Law (LL.M)", university: "National Law University, Jodhpur", year: "2010" },
    { degree: "Master's in Education (M.Ed)", university: "Chatrapati Sahuji Maharaj Kanpur University", year: "2009" },
    { degree: "Bachelor's in Law (LL.B.)", university: "Veer Bahadur Singh Purvanchal University, Jaunpur", year: "2008" },
    { degree: "Bachelor of Education (B.Ed)", university: "Bundelkhand University", year: "2005" },
    { degree: "MBA", university: "Bundelkhand University", year: "2004" },
    { degree: "Bachelor's Degree", university: "Veer Bahadur Singh Purvanchal University, Jaunpur", year: "2002" },
  ];

  const executiveEducation = [
    { program: "MDP: Essentials of Entrepreneurship", institution: "UC Irvine", year: "2017" },
    { program: "Successful Negotiation: Essential Strategies and Skills", institution: "University of Michigan", year: "2017" },
    { program: "Leadership in 21st Century Organizations", institution: "Copenhagen Business School", years: "2016-2017" },
    { program: "Design Thinking for Innovation", institution: "University of Virginia", years: "2015-2016" },
    { program: "Executive Program", institution: "IIM Ahmedabad", year: "2015" },
    { program: "MDP Program", institution: "Duke University", year: "2015" },
    { program: "Program for Leaders in Management Education", institution: "IIM Ahmedabad", year: "2012" },
  ];

  const globalRoles = [
    "Director (Legal Operations) – Innovation Society, New Delhi",
    "Head (Legal Operations) – Kaytee Foundation, New York",
    "Senior Vice President (Legal) – Kidspark Preschools, Ahmedabad",
    "Director (Legal Operations) – Asia Africa Development Council, Uganda",
    "International Education & Children Policy Advisor – Public Opinions International, Uganda",
    "Consulting Director – Atal Skill Development Training Center, New Delhi",
    "Senior Vice President & Head Global Operations – MME Limited, Ahmedabad",
    "Managing Partner – JBLC INDIA, New Delhi",
    "Head Of Legal Affairs – Atal Foundation",
    "Advocate – Supreme Court of India (Since November 2018)",
    "Legal Policy Advisor – Sarthi Foundation",
    "Director Of Legal Operations – Innovation Society",
    "Legal Advisor – Council for Sustainable Peace and Development",
    "Head Global Operations – Kaytee Foundation",
  ];


  return (
    <div className="bg-white py-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold font-heading text-primary">About Dr. Ashutosh Mishra</h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
            A dynamic leader with a multifaceted career spanning academia, law, and corporate strategy.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-12 items-start">
          <div className="lg:col-span-1 text-center">
            <img
              className="h-64 w-64 rounded-full mx-auto object-cover shadow-lg"
              src="fab-icon.png"
              alt="Dr. Ashutosh Mishra"
            />
            <h2 className="mt-6 text-2xl font-bold text-secondary font-heading">Dr. Ashutosh Mishra</h2>
            <p className="text-gray-500">MBA, M.Ed, LL.M., PhD</p>
          </div>

          <div className="lg:col-span-2 mt-12 lg:mt-0">
            <h3 className="text-2xl font-bold font-heading text-primary">Professional Summary</h3>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              With a PhD in Management and Education and over 22 years of diverse experience, I have built a career that bridges academia, legal expertise, and business strategy. My core philosophy is grounded in the 4 F's—Friendly, Firm, Fair, and Fit—principles that guide my approach to leadership and organizational growth.
            </p>
          </div>
        </div>

        <section className="mt-20">
          <h3 className="text-3xl font-bold font-heading text-center text-primary">Core Philosophy: The 4 F's of Leadership</h3>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipPrinciples.map((principle) => (
              <div key={principle} className="bg-light-bg p-6 rounded-lg text-center shadow-md">
                <p className="text-5xl font-extrabold text-primary opacity-20">{principle.charAt(0)}</p>
                <h4 className="text-xl font-bold text-secondary -mt-6">{principle}</h4>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h3 className="text-3xl font-bold font-heading text-center text-primary">Key Expertise Areas</h3>
          <div className="mt-8 max-w-4xl mx-auto flex flex-wrap justify-center gap-3">
            {keyExpertise.map((item, index) => (
              <span key={index} className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h3 className="text-3xl font-bold font-heading text-center text-primary">Educational & Professional Journey</h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-semibold mb-4 font-heading text-secondary">Educational Background</h4>
              <ul className="space-y-4">
                {education.map((item, i) => <li key={i} className="border-l-4 border-accent-teal pl-4"><p className="font-bold">{item.degree}</p><p className="text-sm text-gray-600">{item.university} ({item.year})</p></li>)}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 font-heading text-secondary">Executive Education</h4>
              <ul className="space-y-4">
                {executiveEducation.map((item, i) => <li key={i} className="border-l-4 border-accent-gold pl-4"><p className="font-bold">{item.program}</p><p className="text-sm text-gray-600">{item.institution} ({item.years || item.year})</p></li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <h3 className="text-3xl font-bold font-heading text-center text-primary">Global Leadership Roles</h3>
          <div className="mt-8 columns-1 md:columns-2 lg:columns-3 gap-4">
            {globalRoles.map((role, index) => (
              <div key={index} className="bg-light-bg p-4 rounded-lg mb-4 break-inside-avoid">
                <p className="font-semibold text-gray-800">{role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
