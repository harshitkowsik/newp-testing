
import React from 'react';
import { SectionTitle, DetailCard } from '../../components/ngo/NGOShared';

const PositiveLife: React.FC = () => {
    const interventions = [
        { icon: '🧬', title: 'Prevention, Awareness & Education', description: 'Mass awareness campaigns, condom distribution, voluntary testing camps, and adolescent reproductive health programs.' },
        { icon: '👥', title: 'Testing, Treatment & Care', description: 'Free HIV counseling and testing, linkage to ART services, mobile clinics, and monitoring of TB-HIV co-infections.' },
        { icon: '🛡️', title: 'Rights, Support & Inclusion', description: 'Legal aid against discrimination, psychosocial counseling, peer educator training, and support for vulnerable communities.' },
        { icon: '📚', title: 'Child & Family Support', description: 'Shelter and education programs for orphans of HIV-affected families, nutrition support, and vocational training.' },
    ];
    
    return (
        <article>
            <header className="text-center">
                <h1 className="text-5xl font-extrabold font-heading text-primary">🩺 Positive Life Initiative</h1>
                <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">Empowering Lives. Ending Stigma. Strengthening the Fight Against HIV/AIDS.</p>
                <p className="mt-2 text-md text-gray-500">Awareness | Access | Dignity | Rights</p>
            </header>

            <section className="mt-12 text-lg text-center max-w-4xl mx-auto text-gray-700 leading-relaxed">
                <p>
                    Positive Life Initiative is a national public health and human rights movement focused on HIV/AIDS awareness, prevention, treatment, and care. Our vision is to build an inclusive society where People Living with HIV (PLHIV) can live free of stigma, with access to holistic healthcare, education, legal rights, and dignity.
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
                    <div className="font-semibold text-primary">🏥 RedCare</div>
                    <div className="font-semibold text-primary">👩‍⚕️ Care Connect</div>
                    <div className="font-semibold text-primary">📖 SchoolSafe</div>
                    <div className="font-semibold text-primary">📢 Positive Voices</div>
                    <div className="font-semibold text-primary">📊 AIDS MAP</div>
                </div>
            </section>
        </article>
    );
};
export default PositiveLife;
