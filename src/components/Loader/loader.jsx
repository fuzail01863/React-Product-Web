import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <label>Loading...</label>
      <div className="w-10 h-10 border-4 border-gray-200 border-t-red-600 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;