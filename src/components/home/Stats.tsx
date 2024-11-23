import React, { useEffect, useState } from 'react';

const stats = [
  { label: 'Active Members', value: 10000, suffix: '+' },
  { label: 'Impact Projects', value: 500, suffix: '+' },
  { label: 'Trees Planted', value: 100000, suffix: '+' },
  { label: 'Distributed Rewards', value: 50, prefix: '₿' },
];

const Stats = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000; // Animation duration in milliseconds
    const steps = 50; // Number of steps in the animation
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      for (let i = 1; i <= steps; i++) {
        setTimeout(() => {
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = Math.round((stat.value * i) / steps);
            return newCounters;
          });
        }, stepDuration * i);
      }
    });
  }, []);

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.prefix}
                {counters[index].toLocaleString()}
                {stat.suffix}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;