import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  color?: 'gold' | 'white';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, center = false, color = 'gold' }) => {
  return (
    <div className={`mb-10 ${center ? 'text-center' : 'text-right'}`}>
      <h2 className={`text-3xl md:text-4xl font-bold font-heading mb-3 ${color === 'gold' ? 'text-gold' : 'text-white'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg font-body max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 bg-gold mt-4 rounded-full ${center ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;