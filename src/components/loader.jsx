import React from 'react'

const Loader = () => {
  const array=new Array(20).fill("selam")
  return (
    <div>
      <div className='grid grid-cols-5 sm:grid-cols-3 md:grid-cols-4 '>
        {array.map((arr)=><div>
          <div className='size-75 bg-gray-700 mt-5 animate-pulse' ></div>
        </div>)}
      </div>
    </div>
  )
}

export default Loader