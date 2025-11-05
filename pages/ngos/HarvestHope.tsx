
import React from 'react';
import { SectionTitle, DetailCard } from '../../components/ngo/NGOShared';

const HarvestHope: React.FC = () => {
    const interventions = [
        { icon: '🌱', title: 'Agri-Education, Capacity Building & Skilling', description: 'Financial literacy, youth skilling, digital tools training, and mental health awareness for farmers.' },
        { icon: '🚜', title: 'Technology, Sustainability & Climate Action', description: 'Promoting agri-tech, precision farming, soil health drives, and water conservation.' },
        { icon: '🧑‍🌾', title: 'Livelihoods, Agripreneurship & Inclusion', description: 'Facilitating FPOs, supporting food processing units, and empowering female farmers.' },
        { icon: '🌾', title: 'Agroecology, Indigenous Knowledge & Nutrition', description: 'Advocating for organic farming, reviving indigenous seed banks, and promoting millets.' },
        { icon: '🏡', title: 'Village Development & Infrastructure', description: 'Building model farms, supporting rural agro-tourism, and digitizing land records.' },
    ];

    return (
        <article>
            <header className="text-center">
                <h1 className="text-5xl font-extrabold font-heading text-primary">🌾 Harvest Hope Foundation</h1>
                <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">Empowering India’s Farmers through Innovation, Sustainability & Equity</p>
                <p className="mt-2 text-md text-gray-500">Resilience | Innovation | Rural Renaissance</p>
            </header>

            <section className="mt-12 text-lg text-center max-w-4xl mx-auto text-gray-700 leading-relaxed">
                <p>
                    Harvest Hope Foundation is a nationwide movement dedicated to transforming India’s agricultural ecosystem by uplifting marginal and smallholder farmers, fostering innovation, and promoting climate-resilient, tech-driven, and dignified livelihoods in rural India.
                </p>
            </section>

            <SectionTitle>Core Interventions</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {interventions.map(item => (
                    <DetailCard key={item.title} icon={item.icon} title={item.title}>
                        <p>{item.description}</p>
                    </DetailCard>
                ))}
            </div>

            <section className="mt-12 bg-light-bg p-8 rounded-lg">
                <h3 className="text-2xl font-bold font-heading text-secondary text-center">Flagship Programs</h3>
                <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
                    <div className="font-semibold text-primary">24×7 Farmer Helpline</div>
                    <div className="font-semibold text-primary">Village-level Cold Chains</div>
                    <div className="font-semibold text-primary">Women-led Cooperatives</div>
                    <div className="font-semibold text-primary">Mobile Grain Banks</div>
                    <div className="font-semibold text-primary">Agri-Policy Advocacy</div>
                </div>
            </section>
        </article>
    );
};
export default HarvestHope;
