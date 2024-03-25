import React from 'react'

const Card = ({firstValue,secondValue}) => {
  return (
    <div className="m-4 xs:m-1 h-fit rounded xs:p-1 p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/5">
        <h3 className="text-lg font-semibold xs:text-sm">{firstValue}</h3>
        {secondValue && <p>{secondValue}</p>}
    </div>
  )
}

export default Card