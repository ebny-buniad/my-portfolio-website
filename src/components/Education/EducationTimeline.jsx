import React from 'react';

const educationData = [
  {
    title: 'B.Sc. in CSE',
    institution: 'Northern University Bangladesh',
    time: '2021 – Present',
    description: 'Currently studying Computer Science and Engineering with a focus on full-stack web development and software engineering principles.',
  },
  {
    title: 'Higher Secondary Certificate (HSC)',
    institution: 'Your College Name',
    time: '2018 – 2020',
    description: 'Completed HSC with a strong foundation in science and mathematics, preparing for engineering studies.',
  },
  {
    title: 'Secondary School Certificate (SSC)',
    institution: 'Your School Name',
    time: '2016 – 2018',
    description: 'Passed SSC with distinction in science group, building a solid academic base.',
  },
];

const EducationTimeline = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-center font-rajdhani">Education</h2>
      <div className="relative border-l-2 border-rose-500 pl-6 space-y-10">
        {educationData.map((edu, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-6 top-1 w-4 h-4 bg-rose-500 rounded-full border-4 border-white"></div>
            <h3 className="text-xl font-semibold">{edu.title}</h3>
            <p className="text-sm text-gray-500">{edu.institution}</p>
            <p className="text-sm text-gray-400">{edu.time}</p>
            <p className="mt-2 text-gray-600">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationTimeline;
