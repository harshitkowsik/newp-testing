
import React from 'react';
import { SectionTitle, DetailCard } from '../../components/ngo/NGOShared';

const ReLifeIndia: React.FC = () => {
    const objectives = [
        { icon: '🏠', title: 'Rehabilitation & Treatment', description: 'Establishing de-addiction centers, residential programs, detoxification, medical care, and psychological counselling.' },
        { icon: '👨‍👩‍👧‍👦', title: 'Family & Community Support', description: 'Conducting family therapy, running support groups like AA/NA, and implementing anti-addiction curriculum in schools.' },
        { icon: '📢', title: 'Awareness & Prevention', description: 'Organizing street plays, rallies, and mass awareness drives in collaboration with local bodies to prevent substance abuse.' },
        { icon: '💼', title: 'Empowerment & Reintegration', description: 'Providing vocational training, employment programs, and life skills to ensure sustainable recovery and social reintegration.' },
        { icon: '📱', title: 'Tech & Helplines', description: 'Launching 24x7 helplines, developing mobile apps for recovery tracking, and building AI-powered prediction models for relapse.' },
        { icon: '⚖️', title: 'Policy & Legal Support', description: 'Providing legal aid to distressed individuals and advocating for humane drug policies and decriminalization for users.' },
    ];
    
    return (
        <article>
            <header className="text-center">
                <h1 className="text-5xl font-extrabold font-heading text-primary">🕊️ ReLife India Foundation</h1>
                <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">Empowering Lives. Restoring Futures.</p>
            </header>

            <section className="mt-12 text-lg text-center max-w-4xl mx-auto text-gray-700 leading-relaxed">
                <p>
                    ReLife India Foundation is a national non-profit initiative dedicated to the de-addiction and rehabilitation of individuals battling substance abuse. With a holistic and compassionate approach, we are committed to building an addiction-free India through awareness, treatment, and empowerment, ensuring “No life is wasted to addiction.”
                </p>
            </section>

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
export default ReLifeIndia;
