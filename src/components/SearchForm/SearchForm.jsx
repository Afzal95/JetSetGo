import React, { useState } from 'react'

const SearchForm = ({source,destination,setSource,setDestination,onhandleChange,handleSwap}) => {

  return (
    <form onSubmit={onhandleChange}>
        <div className="sticky top-16 bg-white z-40 px-4 py-2">
          <div className="mx-auto my-2 flex flex-col gap-4 sm:flex-row items-center justify-center relative">
            <input
              required
              type="text"
              placeholder="Enter source"
              value={source}
              onChange={(e) => setSource(e.target.value.trim())}
              className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <button type='button' onClick={(e)=>handleSwap(e)} className='hidden sm:block md:block max-w-12'>
              <img src='./swap.png' alt='swap-icon' width={96} height={96} />
            </button>
            <input
              type="text"
              required
              aria-required
              placeholder="Enter destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value.trim())}
              className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <input type='date' min={new Date().toISOString().split('T')[0]} className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            <button type='submit' className="w-full md:w-auto px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Search Flights
            </button>
          </div>
        </div>
      </form>
  )
}

export default SearchForm