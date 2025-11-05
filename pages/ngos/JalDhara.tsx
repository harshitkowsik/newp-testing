
import React from 'react';
import { SectionTitle, DetailCard } from '../../components/ngo/NGOShared';

const JalDhara: React.FC = () => {
    const activities = [
        { icon: '💧', title: 'Water Harvesting', description: 'Establish check dams, recharge wells, and traditional harvesting systems to conserve rainwater.' },
        { icon: '🧂', title: 'Safe Drinking Water', description: 'Install filtration units, water ATMs, and safe drinking water solutions in rural belts.' },
        { icon: '👩‍🌾', title: 'Community Training', description: 'Train youth, farmers, and PRIs on sustainable water practices and climate-resilient agriculture.' },
        { icon: '📊', title: 'Literacy Campaigns', description: 'Conduct water audits, school eco-clubs, and public awareness campaigns.' },
        { icon: '🛰️', title: 'Innovation & Technology', description: 'Use satellite mapping, hydrology models, mobile apps, and MIS dashboards for real-time monitoring.' },
        { icon: '🧒', title: 'Public Engagement', description: 'Train students as Jal Rakshaks (Water Ambassadors) and organize Jal Melas and Water Yatras.' },
    ];

    return (
        <article>
            <header className="text-center">
                <h1 className="text-5xl font-extrabold font-heading text-primary">🌊 Jal Dhara Foundation</h1>
                <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">Mission Focus: Water & Land Conservation</p>
                <p className="mt-2 text-lg font-semibold text-primary">“Jal Hai Toh Kal Hai”</p>
            </header>

            <section className="mt-12 text-lg text-center max-w-4xl mx-auto text-gray-700 leading-relaxed">
                <p>
                    Jal Dhara Foundation is reviving India’s traditional water wisdom with modern techniques to create a future where every village is water-secure, every field is nutrient-rich, and every citizen is a custodian of nature.
                </p>
            </section>
            
            <SectionTitle>Key Objectives & Activities</SectionTitle>
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
export default JalDhara;
