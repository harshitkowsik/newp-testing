
import React from 'react';
import { SectionTitle, DetailCard } from '../../components/ngo/NGOShared';

const VidyaSetu: React.FC = () => {
    const focusAreas = [
        { icon: '🏫', title: 'Accessible Education', description: 'Establishing schools, digital classrooms, and vocational training centers in underserved and rural areas.' },
        { icon: '💰', title: 'Scholarships & Financial Aid', description: 'Offering merit and need-based scholarships to students pursuing higher education or vocational careers.' },
        { icon: '👧', title: 'Girl Child & Inclusive Education', description: 'Promoting gender equality and supporting the education of girls, children with disabilities, and marginalized communities.' },
        { icon: '💻', title: 'Digital Literacy', description: 'Bridging the digital divide through community-level digital education and online learning platforms.' },
        { icon: '🧑‍🏫', title: 'Teacher Empowerment', description: 'Conducting teacher training programs and mentorship workshops to uplift teaching standards.' },
        { icon: '🗣️', title: 'Career Guidance & Skill Development', description: 'Providing career counseling, life skills training, and job placement support.' },
    ];
    return (
        <article>
            <header className="text-center">
                <h1 className="text-5xl font-extrabold font-heading text-primary">🌐 Vidya Setu Foundation</h1>
                <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">Empowering Through Education | Bridging Gaps, Building Futures</p>
            </header>

            <section className="mt-12 text-lg text-center max-w-4xl mx-auto text-gray-700 leading-relaxed">
                <p>
                    Vidya Setu Foundation is a non-profit organization dedicated to promoting accessible, inclusive, and quality education for underprivileged communities across India. With a vision to ensure “Education for All”, the foundation actively works to eliminate socio-economic barriers to learning by fostering academic excellence, innovation, and skill development.
                </p>
            </section>

            <SectionTitle>Our Key Focus Areas</SectionTitle>
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
export default VidyaSetu;
