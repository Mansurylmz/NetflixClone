import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { baseImgUrl } from '../../utils/constants';

const Actors = ({cast}) => {
  const getImgage=(actor)=>{
    return actor.profile_path ? baseImgUrl + actor.profile_path : actor.gender ===1 ? "/woman.jpg" : actor.gender ===2 ? "/man.jpg" : "/default.w febp"
  }
 
  const isRender=cast && cast.length >0
  return (  isRender ? <div className='mb-10'><h2 className='font-semibold text-lg md:text-xl my-5'>Oyuncular</h2>
  <Splide options={{autoWidth:true,gap:"20px",pagination:false,type:"loop"}} >
    {cast?.map((actor)=><SplideSlide>
      <div title={actor.name} className='w-[160px] h-full  flex flex-col'>
      <img src={ getImgage(actor)} alt=""  className='h-full object-cover rounded'/>
      <h2 className='text-center mt-2 font-semibold line-clamp-1'>{actor.name}</h2>
      </div>
    </SplideSlide>)}
  </Splide>
  </div> : <div className='mb-10 text-center text-zinc-500'>Oyuncu Bilgisi Bulunamadı</div> 
  )
}

export default Actors