import React, { useEffect, useState } from 'react'
import api from '../../utils/api'
import Loader from '../../components/loader'
import { Link } from 'react-router-dom'
import { FaPlay } from 'react-icons/fa'
import { BsBookmarkCheckFill, BsBookmarkPlusFill } from 'react-icons/bs'
import { baseImgUrl } from '../../utils/constants'


const Hero = () => {
    const [movie,setMovie]=useState([])
    const [error,setError]=useState([])
    const sayi=Math.round(Math.random()*20)
    
    useEffect(()=>{
        api.get("/movie/popular?language=tr?region:TUR")
        .then((res)=>setMovie(res.data.results[sayi]))
        .catch((err)=>setError(err.message))
        
       
    },[])
    

    if(!movie){
        return <Loader/>
    }
    
    
  return (
    <div className='grid md:grid-cols-2 md:max-h-[400px] gap-5 mb-10'>
       <div className='flex flex-col gap-6 items-center justify-center'>
            <h1 className='text-3xl font-bold'>{movie?.title}</h1>
            <p className='text-gray-300 text-start'>{movie?.overview}</p>
            <p>
                <span>IMDB</span>
                <span className='text-yellow-400 ms-2 font-semibold'>{movie?.vote_average?.toFixed(2)}</span>
            </p>
            <div className='flex gap-5'>
                <Link className='py-2 px-4 bg-red-600 rounded transition duration-300 hover:bg-red-700 min-w-[165px] flex items-center justify-center gap-2 ' to={`/movie/${movie.id}`}><FaPlay/>  Filmi İzle</Link>
                <Link className='py-2 px-4 bg-blue-600 rounded transition duration-300 hover:bg-blue-700 min-w-[165px] flex items-center justify-center gap-2 '><BsBookmarkPlusFill/> Listeye Kaydet</Link>
            </div>
       </div>
       <div className='grid place-items-center'>
        <img src={baseImgUrl + movie.backdrop_path} alt=""  className='drop-shadow-[0_0_80px_rgba(255,255,255,0.4)] my-4 rounded object-contain max-h-[300px]'/>
       </div>
    </div>
  )
}

export default Hero