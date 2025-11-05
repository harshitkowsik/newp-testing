
import React from 'react';
import { SectionTitle, DetailCard } from '../../components/ngo/NGOShared';

const BeyondLimits: React.FC = () => {
    const interventions = [
        { icon: '🎓', title: 'Inclusive Education & Skills for Life', description: 'Promoting inclusive education, scholarships, vocational training, and accessible learning materials.' },
        { icon: '♿', title: 'Accessibility, Rights & Infrastructure', description: 'Providing assistive devices, promoting universal design, and advocating for barrier-free infrastructure and civic inclusion.' },
        { icon: '💖', title: 'Health, Wellbeing & Caregiver Support', description: 'Offering psychological counseling, peer support networks, telehealth services, and training for caregivers.' },
        { icon: '🌟', title: 'Awareness, Advocacy & Celebration', description: 'Organizing legal awareness programs, celebrating World Disability Day, and promoting inclusive sports and arts to spotlight abilities.' },
        { icon: '💼', title: 'Livelihoods, CSR & Innovation', description: 'Connecting PwDs with employment, supporting accessibility-focused startups, and establishing digital resource portals.' },
    ];
    
    return (
        <article>
            <header className="text-center">
                <h1 className="text-5xl font-extrabold font-heading text-primary">♿ Beyond Limits Foundation</h1>
                <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">Empowering Ability. Redefining Possibility.</p>
                 <p className="mt-2 text-md text-gray-500">Inclusion | Accessibility | Dignity for All</p>
            </header>

            <section className="mt-12 text-lg text-center max-w-4xl mx-auto text-gray-700 leading-relaxed">
                <p>
                    The Beyond Limits Foundation is a purpose-driven initiative founded by Dr. Ashutosh Mishra to champion the dignity, inclusion, and empowerment of persons with disabilities (PwDs) across India. Built on the belief that disability is not inability, the Foundation is committed to breaking barriers—social, physical, digital, and attitudinal.
                </p>
            </section>

            <SectionTitle>Core Interventions</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {interventions.map(item => (
                    <DetailCard key={item.title} icon={item.icon} title={item.title}>
                        <p>{item.description}</p>
                    </DetailCard>
                ))}
            </div>

            <section className="mt-12 bg-light-bg p-8 rounded-lg">
                <h3 className="text-2xl font-bold font-heading text-secondary text-center">Flagship Initiatives</h3>
                <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
                    <div className="font-semibold text-primary">Model Inclusive Villages</div>
                    <div className="font-semibold text-primary">Digital Disability Hub</div>
                    <div className="font-semibold text-primary">Virtual Therapy Helplines</div>
                    <div className="font-semibold text-primary">Inclusive Sports Meets</div>
                    <div className="font-semibold text-primary">Accessible Transport Audits</div>
                </div>
            </section>
        </article>
    );
};
export default BeyondLimits;
