
import React from 'react';
import { SectionTitle, DetailCard } from '../../components/ngo/NGOShared';

const AanganDisha: React.FC = () => {
    const approaches = [
        { icon: "🏠", title: "Child Rescue & Protection", details: "Rescue operations, helplines, foster homes, and coordination with CWC, DCPU & Juvenile Justice Boards." },
        { icon: "🍲", title: "Food, Shelter & Healthcare", details: "Nutritious meals, clean shelter, medical care, mobile medical vans, and psychological support." },
        { icon: "📚", title: "Education & Development", details: "Mainstream schooling, bridge courses, digital literacy, creative arts, sports, and life skills training." },
        { icon: "👨‍👩‍👧", title: "Legal Support & Adoption", details: "Facilitating legal adoptions, providing legal identity documents, and offering aid against trafficking & abuse." },
        { icon: "🤝", title: "Reintegration & Aftercare", details: "Aftercare programs, vocational training, job placements, and mentorship for a smooth transition into adulthood." },
        { icon: "💡", title: "Child Rights & Safeguarding", details: "Strict safeguarding policies, awareness campaigns, and training child protection committees." },
    ];

    return (
        <article>
            <header className="text-center">
                <h1 className="text-5xl font-extrabold font-heading text-primary">👶 Aangan Disha Foundation</h1>
                <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">For Orphaned & Abandoned Children</p>
            </header>
            
            <section className="mt-12 text-lg text-center max-w-4xl mx-auto text-gray-700 leading-relaxed">
              <p>
                We are a dedicated NGO committed to providing a safe, nurturing, and empowering environment for India’s orphaned, abandoned, and neglected children. At Aangan Disha, we believe every child deserves love, care, and opportunity — no matter their background.
              </p>
            </section>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                <div className="bg-blue-50 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold font-heading text-blue-800">🎯 Our Mission</h2>
                    <p className="mt-2 text-gray-700">To rescue, rehabilitate, and reintegrate abandoned and orphaned children into society by ensuring their health, education, protection, and empowerment.</p>
                </div>
                <div className="bg-teal-50 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold font-heading text-teal-800">🌈 Our Vision</h2>
                    <p className="mt-2 text-gray-700">To build a world where no child is left behind, and every orphaned or abandoned child has the chance to thrive with dignity, safety, education, and love. ❤️</p>
                </div>
            </div>

            <SectionTitle>Our 360° Approach</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {approaches.map(item => (
                    <DetailCard key={item.title} icon={item.icon} title={item.title}>
                        <p>{item.details}</p>
                    </DetailCard>
                ))}
            </div>
        </article>
    );
};
export default AanganDisha;
