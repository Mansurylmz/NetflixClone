import React, { useEffect, useState } from 'react'
import api from '../../utils/api'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { baseImgUrl } from '../../utils/constants';
import { Link } from 'react-router-dom';

const Movie = ({genre}) => {
    const [movies,setMovies]=useState([])
    const params={
        with_genres:genre.id,
        language:"tr",
        region:"TUR"
    }
    useEffect(()=>{
        api.get("/discover/movie",{params})
        .then((res)=>setMovies(res.data.results))
    },[])
    
  return (
    <div className='my-10'>
        <h1 className='text-3xl font-semibold mb-3'>{genre.name}</h1>
        <Splide options={{autoWidth:true,gap:"20px",pagination:false,type:"loop"}}   >
            {movies?.map((movie)=>
            <SplideSlide key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                <img src={baseImgUrl+movie.poster_path} alt="Image 1" className='max-w-[300px] cursor-pointer rounded transition hover:scale-[1.01]'/>
                </Link>
            </SplideSlide>)}
            
        </Splide>
    </div>
  )
}

export default Movie