
import React from 'react';
import { SectionTitle, DetailCard } from '../../components/ngo/NGOShared';

const UnityForDiversity: React.FC = () => {
    const interventions = [
        { icon: '🎓', title: 'Education, Skilling & Digital Empowerment', description: 'Supporting minority-centric schools, coaching institutes, language preservation programs, and vocational training centers.' },
        { icon: '⚖️', title: 'Legal Rights, Justice & Advocacy', description: 'Conducting constitutional awareness camps, operating legal aid clinics, and providing support for hate crime survivors.' },
        { icon: '💼', title: 'Livelihoods & Economic Empowerment', description: 'Incubating start-ups and SHGs, organizing job fairs, and promoting traditional crafts through market access.' },
        { icon: '🕊️', title: 'Culture, Heritage & Interfaith Harmony', description: 'Preserving minority heritage, celebrating interfaith festivals, and establishing community cultural centers.' },
    ];

    return (
        <article>
            <header className="text-center">
                <h1 className="text-5xl font-extrabold font-heading text-primary">🤝 Unity for Diversity Foundation</h1>
                <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">Empowering India’s Minorities with Dignity, Opportunity & Inclusion</p>
                <p className="mt-2 text-md text-gray-500">Justice | Innovation | Nation-Building</p>
            </header>

            <section className="mt-12 text-lg text-center max-w-4xl mx-auto text-gray-700 leading-relaxed">
                <p>
                    The Unity for Diversity Foundation is built on the core belief that India’s religious, linguistic, ethnic, and tribal minorities deserve not just protection—but active promotion, support, and opportunity. We are committed to transforming India’s development landscape by bridging structural gaps and amplifying minority voices.
                </p>
            </section>

            <SectionTitle>Core Interventions</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {interventions.map(item => (
                    <DetailCard key={item.title} icon={item.icon} title={item.title}>
                        <p>{item.description}</p>
                    </DetailCard>
                ))}
            </div>
        </article>
    );
};
export default UnityForDiversity;
