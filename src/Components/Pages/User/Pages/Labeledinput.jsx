import React from 'react';

const LabeledInput = ({ label, placeholder, type }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 text-theblue font-[Gilroy] " htmlFor="input">
        {label}
      </label>
      <input
        type={type}
        id="input"
        placeholder={placeholder}
        className="mt-1 p-2 border border-gray-300 rounded-[11px] w-full font-[Gilroy]"
      />
    </div>
  );
};

export default LabeledInput;