
import React from 'react';

export const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl font-bold font-heading text-primary mt-12 mb-6 text-center border-b-2 border-primary/20 pb-4">{children}</h2>
);

export const SubSectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-xl font-bold font-heading text-secondary mt-6 mb-4">{children}</h3>
);

export const DetailCard: React.FC<{ title: string, icon?: string, children: React.ReactNode }> = ({ title, icon, children }) => (
  <div className="bg-light-bg p-6 rounded-lg border-l-4 border-accent-teal shadow-md h-full">
    <h4 className="text-lg font-bold text-secondary font-heading flex items-start">
      {icon && <span className="mr-3 text-2xl leading-none">{icon}</span>}
      <span>{title}</span>
    </h4>
    <div className="mt-3 text-gray-700 space-y-2">{children}</div>
  </div>
);

export const BulletList: React.FC<{ items: string[] }> = ({ items }) => (
    <ul className="space-y-2">
        {items.map((item, index) => (
            <li key={index} className="flex items-start">
                <span className="text-accent-teal mr-2 mt-1">✔</span>
                <span>{item}</span>
            </li>
        ))}
    </ul>
);
