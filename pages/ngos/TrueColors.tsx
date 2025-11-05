
import React from 'react';
import { SectionTitle, DetailCard } from '../../components/ngo/NGOShared';

const TrueColors: React.FC = () => {
    const interventions = [
        { icon: '🏳️‍⚧️', title: 'Rights, Protection & Legal Empowerment', description: 'Upholding rights through policy advocacy, litigation, legal aid cells, and support for gender identity documentation.' },
        { icon: '💖', title: 'Mental Health, Wellness & Crisis Support', description: 'Running counseling centers, peer support groups, suicide prevention campaigns, and safe shelters for survivors of violence.' },
        { icon: '📣', title: 'Awareness, Education & Inclusion', description: 'Organizing Pride marches, gender sensitization programs, and promoting positive queer representation in media.' },
        { icon: '🏢', title: 'Livelihoods, Innovation & Entrepreneurship', description: 'Conducting job fairs, promoting queer-owned businesses, and building skill development centers for trans and non-binary individuals.' },
    ];

    return (
        <article>
            <header className="text-center">
                <h1 className="text-5xl font-extrabold font-heading text-primary">🏳️‍🌈 True Colors Foundation</h1>
                <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">Uplifting LGBTQIA+ Lives with Dignity, Safety & Pride</p>
                <p className="mt-2 text-md text-gray-500">Equality | Justice | Representation for All</p>
            </header>

            <section className="mt-12 text-lg text-center max-w-4xl mx-auto text-gray-700 leading-relaxed">
                <p>
                    True Colors Foundation is a transformative initiative dedicated to defending the rights, amplifying the voices, and enhancing the lives of LGBTQIA+ individuals across India. We envision a nation where every identity is respected, every love is valid, and every person is free to live as their truest self.
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
            
            <section className="mt-12 bg-light-bg p-8 rounded-lg">
                <h3 className="text-2xl font-bold font-heading text-secondary text-center">Flagship Programs</h3>
                <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                    <div className="font-semibold text-primary">🏠 True Shelter</div>
                    <div className="font-semibold text-primary">🎭 Queer Creators Collective</div>
                    <div className="font-semibold text-primary">💼 PRIDEWorks</div>
                    <div className="font-semibold text-primary">🧠 MindMatters</div>
                    <div className="font-semibold text-primary">🔊 Rainbow Voices Podcast</div>
                </div>
            </section>
        </article>
    );
};
export default TrueColors;
