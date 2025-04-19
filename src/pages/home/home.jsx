import React, { useEffect, useState } from 'react'
import Hero from './hero'
import api from '../../utils/api'
import Loader from '../../components/loader'
import Movie from './movie'

const Home = () => {
  const [genres,setGenres]=useState(null)
  useEffect(()=>{
    api.get("/genre/movie/list?language=tr")
    .then((res)=>setGenres(res.data.genres))
  },[])
  return (
    <div>
      <Hero/>
      {!genres ? <Loader/> : <div>{genres.map((genre)=><Movie key={genre.id} genre={genre} />)}</div>}
    </div>
  )
}

export default Home