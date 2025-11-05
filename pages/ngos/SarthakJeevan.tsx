
import React from 'react';
import { SectionTitle, DetailCard } from '../../components/ngo/NGOShared';

const SarthakJeevan: React.FC = () => {
    const focusAreas = [
        { icon: '💪', title: 'Empowerment & Rehabilitation', description: 'Holistic support, therapy, assistive devices, and rehabilitation for individuals with physical and mental disabilities.' },
        { icon: '🎓', title: 'Inclusive Education', description: 'Supporting inclusive models, providing financial aid, and developing learning material in accessible formats.' },
        { icon: '💼', title: 'Skill Development & Employment', description: 'Vocational training, corporate partnerships for inclusive hiring, and job placement assistance.' },
        { icon: '♿', title: 'Accessibility & Mobility', description: 'Advocacy for accessible public infrastructure, transport, and provision of assistive devices for independent living.' },
        { icon: '⚖️', title: 'Advocacy & Legal Support', description: 'Legal aid for discrimination cases, policy advocacy for inclusion, and campaigns to remove societal barriers.' },
        { icon: '❤️', title: 'Healthcare & Mental Well-being', description: 'Ensuring access to quality medical services, therapies, crisis intervention, and psychological counseling.' },
    ];
    return (
        <article>
            <header className="text-center">
                <h1 className="text-5xl font-extrabold font-heading text-primary">🌈 Sarthak Jeevan Foundation</h1>
                <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">Empowering Persons with Disabilities – For a Dignified, Inclusive Life</p>
            </header>

            <section className="mt-12 text-lg text-center max-w-4xl mx-auto text-gray-700 leading-relaxed">
                <p>
                    Sarthak Jeevan Foundation is a not-for-profit organization dedicated to creating an inclusive society where persons with physical, intellectual, sensory, and multiple disabilities are empowered to live with dignity, independence, and equal opportunity. With a strong belief in ability over disability, we work to promote accessibility, education, livelihood, legal rights, and healthcare for persons with disabilities (PwDs).
                </p>
            </section>

            <SectionTitle>Core Focus Areas</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {focusAreas.map(item => (
                    <DetailCard key={item.title} icon={item.icon} title={item.title}>
                        <p>{item.description}</p>
                    </DetailCard>
                ))}
            </div>
        </article>
    );
};
export default SarthakJeevan;
