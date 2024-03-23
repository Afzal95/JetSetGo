import React from 'react';

const FlightSearch = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <input
        type="text"
        placeholder="Enter source"
        className="w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        placeholder="Enter destination"
        className="w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
      <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
        Search Flights
      </button>
    </div>
  );
};

export default FlightSearch;
