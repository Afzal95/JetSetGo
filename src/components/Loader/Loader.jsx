import React from 'react'

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-10 h-10 border-t-2 border-green-500 rounded-full animate-spin"></div>
    </div>
  )
}

export default Loader