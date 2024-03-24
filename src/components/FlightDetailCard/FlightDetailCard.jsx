import React from 'react'
import Card from './Card';

const FlightDetailCard = ({detail}) => {

  return (
        <div key={detail.id} className="flex justify-center bg-slate-200">
        <Card firstValue={detail.airline} secondValue={detail.flightNumber}  />
        <Card firstValue={detail.departureTime} secondValue={detail.origin}  />
        <Card firstValue={detail.duration} />
        <Card firstValue={detail.arrivalTime} secondValue={detail.destination}  />
        <Card firstValue={detail.price} />
        </div>
  )
}

export default FlightDetailCard