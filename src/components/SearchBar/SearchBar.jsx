import React, { useEffect, useMemo, useRef, useState } from 'react';
import FlightDetailCard from '../FlightDetailCard/FlightDetailCard';
import { FLIGHT_API } from '../../constants';
import Loader from '../Loader/Loader';
import SearchForm from '../SearchForm/SearchForm';

const SearchBar = () => {
  const [source,setSource] = useState('');
  const [destination,setDestination] = useState('');
  const [details, setDetails] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedAirlines, setSelectedAirlines] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setFilterDropdownOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const uniqueAirlines = useMemo(()=>{
    if(details){
      let airlineNames = details.map(detail=>detail.airline);
      let set = new Set(airlineNames);
      return Array.from(set);
    }
  },[details])

  const handleSwap = (e) => {
    e.preventDefault();
    const temp = source;
    setSource(destination);
    setDestination(temp);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    await getFlights();
  };

  const getFlights = async () => {
    setDataLoading(true);
    let result = await fetch(FLIGHT_API);
    let data = await result.json();
    setDetails(data);
    setDataLoading(false)
  };

  const sortByPrice = () => {
    if (details) {
      if (sortOrder === 'asc') {
        const sortedDetails = [...details].sort((a, b) => a.price - b.price);
        setDetails(sortedDetails);
        setSortOrder('des');
      } else {
        const sortedDetails = [...details].sort((a, b) => b.price - a.price);
        setDetails(sortedDetails);
        setSortOrder('asc');
      }
    }
  };

  const toggleFilterDropdown = () => {
    setFilterDropdownOpen(!filterDropdownOpen);
  };

  const handleAirlineSelection = (e) => {
    const airline = e.target.value;
    if (selectedAirlines.includes(airline)) {
      setSelectedAirlines(selectedAirlines.filter(selected => selected !== airline));
    } else {
      setSelectedAirlines([...selectedAirlines, airline]);
    }
  };

  const filteredDetails = details?.filter(detail => selectedAirlines.length === 0 || selectedAirlines.includes(detail.airline));


  return (
    <>
      <SearchForm 
      onhandleChange={handleSearch}
      source={source}
      destination={destination}
      setDestination={setDestination}
      setSource={setSource}
      handleSwap={handleSwap}
      />
      <div>
      {dataLoading && <Loader />}
      <div className="flex flex-col p-3 justify-center gap-4 px-8 xs:px-1">
      {details && <div className='w-1/2 xs:w-full flex justify-evenly items-center mx-auto py-2'>
              <button type='button' onClick={sortByPrice} className="bg-blue-500 text-white px-4 py-2 rounded-md" >Sort by price {sortOrder === 'asc' ? '↓' : '↑'}</button>
              <div ref={dropdownRef} className='relative'>
              <button type='button' onClick={toggleFilterDropdown} className="bg-blue-500 px-4 text-white py-2 rounded-md relative">
            Filter by airline
            {filterDropdownOpen && (
              <div className="absolute top-full right-0 mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <div className="p-4" onClick={(e) => e.stopPropagation()}>
                    <p className="text-lg text-red-950 font-semibold">Select Airlines</p>

                    {details && details.length > 0 && uniqueAirlines.map(detail => (
                      <label key={detail} className="flex items-center mb-2 hover:cursor-pointer">
                        <input
                          type="checkbox"
                          value={detail}
                          onChange={handleAirlineSelection}
                          checked={selectedAirlines.includes(detail)}
                          className="mr-2"
                        />
                       <span className='text-black'>{detail}</span>
                      </label>
                    ))}
                  </div>
              </div>
            )}
          </button>
          </div>
      </div>}
      {filteredDetails?.map((detail,index) => (
          <FlightDetailCard key={index} detail={detail} />
        ))}
      </div>
      </div>
    </>
  );
};

export default SearchBar;