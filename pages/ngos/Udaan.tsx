
import React from 'react';
import { SectionTitle, DetailCard } from '../../components/ngo/NGOShared';

const Udaan: React.FC = () => {
    const focusAreas = [
        { icon: '⚖️', title: 'Empowerment & Rights', description: 'Advocacy for gender equality, legal protection, and support for survivors of domestic violence, acid attacks, and trafficking.' },
        { icon: '📚', title: 'Education & Literacy', description: 'Scholarships, adult literacy, digital literacy, and STEM education programs for girls and women.' },
        { icon: '💼', title: 'Skill Development & Livelihood', description: 'Vocational training, leadership workshops, entrepreneurship support, and microfinance for economic independence.' },
        { icon: '🏥', title: 'Health & Well-being', description: 'Maternal healthcare, wellness drives, mental health support, and menstrual hygiene campaigns.' },
        { icon: '🏛️', title: 'Governance & Leadership', description: 'Political training, leadership fellowships, and promoting women’s participation in local governance.' },
    ];
    return (
        <article>
            <header className="text-center">
                <h1 className="text-5xl font-extrabold font-heading text-primary">🌸 Udaan Foundation</h1>
                <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">Empowering Women, Transforming Lives</p>
            </header>

            <section className="mt-12 text-lg text-center max-w-4xl mx-auto text-gray-700 leading-relaxed">
                <p>
                    Udaan Foundation is a dedicated non-profit organization committed to promoting gender equality and empowering women across all walks of life. Our mission is not just to support women, but to help them take flight — to rise above challenges and realize their full potential as change-makers, entrepreneurs, and leaders.
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
export default Udaan;
