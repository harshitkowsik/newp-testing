
import React from 'react';
import { SectionTitle, DetailCard, BulletList } from '../../components/ngo/NGOShared';

const AasthaCare: React.FC = () => {
    const coreServices = {
        "Old Age Homes & Geriatric Centers": ["Establishing safe, loving homes for neglected or abandoned elders."],
        "Food, Shelter & Medical Support": ["Nutritious meals, hygiene essentials, clothing, and healthcare access."],
        "Counseling & Spiritual Healing": ["Providing emotional, psychological, and spiritual well-being support."],
        "Elder Abuse Protection": ["Legal and community action to safeguard against neglect or exploitation."],
    };

    const specialServices = {
        "Legal & Safety Assistance": ["Free legal aid for property, pension, and maintenance disputes", "24×7 elder helpline & emergency response teams", "Coordination with police for lost/missing senior cases"],
        "Health & Wellness Programs": ["Yoga, physiotherapy, and mental wellness activities", "Regular health check-up camps & medicine distribution", "Hospital tie-ups for elderly-friendly care"],
        "Empowerment & Engagement": ["Festival celebrations, birthdays & elder talent shows", "Hobby classes, storytelling & life skills workshops", "Mobile libraries & educational events"],
        "Community & Volunteer Involvement": ["Intergenerational bonding & youth-elder mentorship", "Elder SHGs & support for destitute widows", "Training volunteers and caregivers at grassroots level"],
    };

    return (
        <article>
            <header className="text-center">
                <h1 className="text-5xl font-extrabold font-heading text-primary">🏡 Aastha Care Foundation</h1>
                <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">Empowering Dignity & Care for Our Elders (Vridhashram / Elderly Support)</p>
            </header>

            <section className="mt-12 text-lg text-center max-w-4xl mx-auto text-gray-700 leading-relaxed">
                <p>
                    At Aastha Care Foundation, we believe that every elder deserves dignity, love, and care — not just in words, but in action. Founded with compassion at its core, our mission is to transform the lives of senior citizens who are neglected, homeless, or without family support. We serve as a sanctuary of hope, healing, and happiness.
                </p>
                <div className="mt-6 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-md">
                    <h2 className="font-bold text-xl">💛 Our Vision</h2>
                    <p>To build inclusive elder communities across India where seniors are respected, heard, and nurtured with dignity and love.</p>
                </div>
            </section>

            <SectionTitle>Core Services for Senior Citizens</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.entries(coreServices).map(([title, details]) => (
                    <DetailCard key={title} title={title}>
                        <BulletList items={details} />
                    </DetailCard>
                ))}
            </div>

            <SectionTitle>Specialized Programs & Support</SectionTitle>
            <div className="space-y-8">
                {Object.entries(specialServices).map(([title, details]) => (
                    <div key={title} className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold text-secondary">{title}</h3>
                        <div className="mt-4"><BulletList items={details} /></div>
                    </div>
                ))}
            </div>
        </article>
    );
};

export default AasthaCare;
