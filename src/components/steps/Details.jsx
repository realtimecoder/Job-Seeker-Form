import React, { useState } from 'react';
import Select from 'react-select';

export default function Details() {
  const [experience, setExperience] = useState(null);
  const [skills, setSkills] = useState('');
  const [motivation, setMotivation] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [uniqueQualities, setUniqueQualities] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const experienceOptions = [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
    { label: "5+", value: 6 },
  ];

  return (
  <div>
      {/* Years of Experience */}
      <div className="mb-6">
        <label className="font-bold text-gray-600 text-sm uppercase mb-2">
          Years of Experience
        </label>
        <Select
          options={experienceOptions}
          value={experience}
          onChange={(selectedOption) => setExperience(selectedOption)}
          placeholder="Select your experience level"
          className="react-select-container"
          classNamePrefix="react-select"
          styles={{
            control: (provided) => ({
              ...provided,
              border: 'solid 1px gray-200 ',
             
              boxShadow: 'none',
              '&:hover': {
                border: 'solid 1px',
                boxShadow: 'none',
              },
            }),
          }}
        />
      </div>

      {/* Skills */}
      <div className="mb-6">
        <label className="font-bold text-gray-600 text-sm uppercase mb-2">Skills</label>
        <input
          type="text"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          placeholder="Enter your skills"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Motivation */}
      <div className="mb-6">
        <label className="font-bold text-gray-600 text-sm uppercase mb-2">Why do you want to join?</label>
        <textarea
          value={motivation}
          onChange={(e) => setMotivation(e.target.value)}
          placeholder="Explain your motivation"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="3"
        />
      </div>

      {/* Hobbies */}
      <div className="mb-6">
        <label className="font-bold text-gray-600 text-sm uppercase mb-2">Hobbies</label>
        <textarea
          value={hobbies}
          onChange={(e) => setHobbies(e.target.value)}
          placeholder="List your hobbies"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="3"
        />
      </div>

      {/* Unique Qualities */}
      <div className="mb-6">
        <label className="font-bold text-gray-600 text-sm uppercase mb-2">What makes you unique?</label>
        <textarea
          value={uniqueQualities}
          onChange={(e) => setUniqueQualities(e.target.value)}
          placeholder="Describe your unique qualities"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="3"
        />
      </div>

      {/* Additional Information */}
      <div className="mb-6">
        <label className="font-bold text-gray-600 text-sm uppercase mb-2">Additional Information</label>
        <textarea
          value={additionalInfo}
          onChange={(e) => setAdditionalInfo(e.target.value)}
          placeholder="Any additional information"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="3"
        />
      </div>
    </div>
  );
}
