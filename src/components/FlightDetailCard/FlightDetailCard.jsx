import React from 'react'
import Card from './Card';

const FlightDetailCard = ({detail}) => {
  const time = (date)=>{
    let hr = new Date(date).getHours();
    let min = new Date(date).getMinutes();
    hr= hr<10?'0'+hr:hr;
    min= min<10?'0'+min:min;
    return `${hr}:${min}`;
  }

  return (
        <div key={detail.id} className="flex justify-center bg-slate-200">
        <Card firstValue={detail.airline} secondValue={detail.flightNumber}  />
        <Card firstValue={time(detail.departureTime)} secondValue={detail.origin}  />
        <Card firstValue={detail.duration} />
        <Card firstValue={time(detail.arrivalTime)} secondValue={detail.destination}  />
        <Card firstValue={'Rs '+detail.price} />
        </div>
  )
}

export default FlightDetailCard