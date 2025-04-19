import { Splide, SplideSlide } from '@splidejs/react-splide'
import React from 'react'
import ReactPlayer from 'react-player'

const Trailers = ({videos}) => {
  const isRender=videos && videos.length>0
  return (
    isRender ? (
      <div className='mb-10'>
        <h2 className='font-semibold text-l md:text-xl my-5'>Fragmanlar</h2>
        <Splide options={{pagination:false,type:"loop"}}>
          {videos.map((video)=><SplideSlide>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${video.key}`} width={"100%"} height="400px" controls/>
          </SplideSlide>)}
        </Splide>
      </div>
    ) : <div className='text-center mb-10 text-zinc-400'>Fragman Bulunamadı</div>
  )
}

export default Trailers