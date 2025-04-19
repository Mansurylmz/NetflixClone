import React from 'react'
import { MdOutlineKeyboardArrowLeft as Arrow } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'

const Buttons = ({movie}) => {
  return (
    <div className='flex mb-5 justify-between min-w-0 '>
        <Link to={".."} className='bg-gray-600 hover:bg-gray-700 min-w-0 hero-btn'>
            <Arrow className='text-xl'/> Geri
        </Link>
        <Button movie={movie}/>
    </div>
  )
}

export default Buttons