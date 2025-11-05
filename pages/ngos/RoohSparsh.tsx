
import React from 'react';
import { SectionTitle, DetailCard } from '../../components/ngo/NGOShared';

const RoohSparsh: React.FC = () => {
    const objectives = [
        { icon: '👩‍⚕️', title: 'Medical & Psychological Support', description: 'Provide immediate and long-term medical treatment, reconstructive surgeries, and trauma recovery counselling.' },
        { icon: '⚖️', title: 'Legal Aid & Advocacy', description: 'Ensure legal aid, FIR filing, case monitoring, and advocate for stricter laws on acid sales.' },
        { icon: '💡', title: 'Awareness & Social Mobilization', description: 'Run anti-acid violence campaigns, conduct school workshops, and promote ethical survivor representation in media.' },
        { icon: '📚', title: 'Research & Documentation', description: 'Create a digital database of survivors, document stories, and conduct national research on acid crimes.' },
        { icon: '💪', title: 'Skill Building & Empowerment', description: 'Train survivors in life skills, offer rehabilitation courses, and promote survivor-led entrepreneurship.' },
        { icon: '🏠', title: 'Shelter & Safety', description: 'Operate safe shelters, halfway homes, and 24x7 rescue response teams and helplines for emergencies.' },
    ];

    return (
        <article>
            <header className="text-center">
                <h1 className="text-5xl font-extrabold font-heading text-primary">🌸 Rooh Sparsh Foundation</h1>
                <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">Transforming Scars into Strength | For Acid Attack Survivors</p>
            </header>

            <section className="mt-12 text-lg text-center max-w-4xl mx-auto text-gray-700 leading-relaxed">
                <p>
                    Rooh Sparsh Foundation is a heartfelt initiative dedicated to supporting acid attack survivors across India. We strive to restore not just the physical scars but also the lost confidence, dreams, and smiles of the survivors.
                </p>
            </section>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                <div className="bg-pink-50 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold font-heading text-pink-800">🎯 Our Mission</h2>
                    <p className="mt-2 text-gray-700">To create a safe, supportive, and empowering ecosystem for acid attack survivors where healing, justice, and reintegration become possible realities.</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold font-heading text-purple-800">🌍 Our Vision</h2>
                    <p className="mt-2 text-gray-700">A world where acid attack survivors are not just victims but changemakers, living with dignity, strength, and purpose.</p>
                </div>
            </div>

            <SectionTitle>Our Core Objectives</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {objectives.map(item => (
                    <DetailCard key={item.title} icon={item.icon} title={item.title}>
                        <p>{item.description}</p>
                    </DetailCard>
                ))}
            </div>
        </article>
    );
};
export default RoohSparsh;
