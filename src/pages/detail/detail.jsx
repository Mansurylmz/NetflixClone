import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../utils/api'
import Buttons from './Buttons'
import Banner from './Banner'
import Content from './Content'
import Actors from './Actors'
import Trailers from './Trailers'

const Detail = () => {
  const [movie,setMovie]=useState([])
  const {id} =useParams()
  useEffect(()=>{
    const params={
      append_to_response:"credits,videos",
      language:"tr"
    }
    api.get(`/movie/${id}`,{params})
    .then((res)=>setMovie(res.data))
  },[])
  return (
    <div>
      <Buttons movie={movie}/>
      <Banner movie={movie}/>
      <Content movie={movie}/>
      <Actors cast={movie?.credits?.cast}/>
      <Trailers videos={movie?.videos?.results}/>
    </div>
  )
}

export default Detail