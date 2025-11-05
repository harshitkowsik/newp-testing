
import React from 'react';
import { SectionTitle, DetailCard } from '../../components/ngo/NGOShared';

const SecondChance: React.FC = () => {
    const activities = [
        { icon: '📚', title: 'Education & Skills Training', description: 'Equipping inmates with future-ready skills through vocational training, digital literacy, and entrepreneurship workshops.' },
        { icon: '⚖️', title: 'Legal Aid & Awareness', description: 'Ensuring access to justice through free legal counseling for undertrials, assistance with bail, and rights education.' },
        { icon: '🧠', title: 'Mental & Behavioral Therapy', description: 'Offering psychological therapy, trauma counseling, anger management, and art therapy to promote healing.' },
        { icon: '🤝', title: 'Post-Release Reintegration', description: 'Providing support through halfway homes, housing assistance, identity restoration, and community mentorship.' },
        { icon: '👩‍👧‍👦', title: 'Women, Juveniles & LGBTQ+ Support', description: 'Specialized services including maternity care, support for juvenile offenders, and reintegration pathways for LGBTQ+ inmates.' },
        { icon: '🏛️', title: 'Policy Advocacy & Reform', description: 'Promoting bail reform, supporting restorative justice, and advocating for humane prison conditions.' },
    ];

    return (
        <article>
            <header className="text-center">
                <h1 className="text-5xl font-extrabold font-heading text-primary">⚖️ Second Chance Foundation</h1>
                <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">“Transforming Lives Beyond Bars”</p>
            </header>

            <section className="mt-12 text-lg text-center max-w-4xl mx-auto text-gray-700 leading-relaxed">
                <p>
                    A beacon of hope for prisoners, undertrials, and their families — creating real second chances through rehabilitation, education, and reintegration. We believe that incarceration should not be a life sentence to exclusion. Every individual deserves a fair opportunity to heal, grow, and rebuild.
                </p>
            </section>

            <SectionTitle>What We Do</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {activities.map(item => (
                    <DetailCard key={item.title} icon={item.icon} title={item.title}>
                        <p>{item.description}</p>
                    </DetailCard>
                ))}
            </div>
        </article>
    );
};
export default SecondChance;
