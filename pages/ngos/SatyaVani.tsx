
import React from 'react';
import { SectionTitle, DetailCard } from '../../components/ngo/NGOShared';

const SatyaVani: React.FC = () => {
    const activities = [
        { icon: '🧑‍⚖️', title: 'Journalist Rights & Safety', description: 'Providing legal aid, insurance schemes, safety training, and emergency support for harassed or at-risk journalists.' },
        { icon: '🎓', title: 'Training & Capacity Building', description: 'Offering media fellowships, scholarships, mentorship, and certification programs, with a focus on rural and student journalists.' },
        { icon: '🏛️', title: 'Advocacy & Awareness', description: 'Lobbying for press protection laws, campaigning for media autonomy, and tracking press freedom violations.' },
        { icon: '🧭', title: 'Education & Literacy', description: 'Running media ethics programs, fake news awareness campaigns, and supporting community radios and mobile press vans.' },
        { icon: '🤖', title: 'Innovation & Inclusion', description: 'Developing AI tools to detect fake news and supporting women, tribal, and marginalized journalists.' },
    ];
    return (
        <article>
            <header className="text-center">
                <h1 className="text-5xl font-extrabold font-heading text-primary">📰 Satya Vani Foundation</h1>
                <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">Empowering Ethical Journalism | Defending Press Freedom | Strengthening Media Literacy</p>
            </header>

            <section className="mt-12 text-lg text-center max-w-4xl mx-auto text-gray-700 leading-relaxed">
                <p>
                    Satya Vani Foundation is a non-profit initiative dedicated to protecting the rights of journalists, advocating for media freedom, and nurturing a new generation of ethical, fearless, and socially responsible journalists across India. We stand with truth-tellers to empower, educate, and elevate journalism that matters.
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
export default SatyaVani;
