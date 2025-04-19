import React from 'react'
import { BsBookmarkPlusFill } from 'react-icons/bs'
import { GoBookmarkSlashFill } from 'react-icons/go'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMovieList } from '../redux/actions/listActions'

const Button = ({movie}) => {
  const dispatch=useDispatch()
 
  const {list}=useSelector((store)=>store)
  const isAdded=list.find((item)=>item.id===movie.id)
  const handleClick=()=>{
    dispatch(toggleMovieList(movie,!isAdded))

  }
  return (
    <button onClick={handleClick} className='py-2 px-4 bg-blue-600 rounded transition duration-300 hover:bg-blue-700 min-w-[165px] flex items-center justify-center gap-2 '>
      {isAdded ? <><GoBookmarkSlashFill/> Listeden Kaldır</> : <><BsBookmarkPlusFill/> Listeye Ekle</>}
    </button>
  )
}

export default Button