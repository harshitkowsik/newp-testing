
import React from 'react';
import { SectionTitle, DetailCard } from '../../components/ngo/NGOShared';

const PashuRaksha: React.FC = () => {
    const focusAreas = [
        { icon: "🏥", title: "Rescue, Treatment & Rehabilitation", description: "Emergency care, surgeries, and long-term shelters for injured, unadoptable, or senior animals." },
        { icon: "🛡️", title: "Prevention of Cruelty & Legal Advocacy", description: "Campaigns against animal abuse, legal aid for cruelty cases, and lobbying for stricter welfare laws." },
        { icon: "📣", title: "Awareness & Education", description: "School programs, workshops, and community talks on animal care and responsible pet ownership." },
        { icon: "🐾", title: "Adoption & Rescue Network", description: "Organizing adoption drives and managing online platforms for rehoming animals." },
        { icon: "📉", title: "Population Control", description: "Conducting spaying/neutering drives for stray animals to humanely reduce homelessness." },
        { icon: "🌳", title: "Wildlife & Habitat Protection", description: "Collaborating on wildlife rescue, anti-poaching measures, and habitat conservation." },
    ];
    return (
        <article>
            <header className="text-center">
                <h1 className="text-5xl font-extrabold font-heading text-primary">🐾 Pashu Raksha Foundation</h1>
                <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">“Voice for the Voiceless”</p>
            </header>
            
            <section className="mt-12 text-lg text-center max-w-4xl mx-auto text-gray-700 leading-relaxed">
              <p>
                Pashu Raksha Foundation is dedicated to protecting, rescuing, rehabilitating, and celebrating animals. We believe in a world where every animal—whether a street dog, wildlife creature, or farm animal—deserves love, dignity, and care.
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
export default PashuRaksha;
