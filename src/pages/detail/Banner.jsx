import React from 'react'
import { baseImgUrl } from '../../utils/constants'

const Banner = ({movie}) => {
  return (
    <div className='h-[20vh] bg-red-500 relative md:h[30vh] drop-shadow-[0_0_80px_rgba(255,2555,255,0.15f)]'>
        <img src={baseImgUrl + movie.backdrop_path} alt="" className='size-full rounded-sm object-cover' />
        <div className='bg-red absolute inset-0 grid place-items-center bg-opacity-30'>
            <h2 className='text-3xl md:text-4xl font-semibold font-mono text-center'>{movie.title}</h2>
        </div>
    </div>
  )
}

export default Banner