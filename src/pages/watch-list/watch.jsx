
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { baseImgUrl } from '../../utils/constants';
import Loader from '../../components/loader';
import { BsBookmarkDashFill } from 'react-icons/bs';
import { toggleMovieList } from '../../redux/actions/listActions';

const Watch = () => {
  const {isLoading,list}=useSelector((store)=>store);
  const dispatch=useDispatch()
  const handleClick=(movie)=>{
    dispatch(toggleMovieList(movie,false))
  }
  return (
    <div>
      <h1 className='text-2xl md:text-3xl font-semibold'>İzleme Listesi</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 my-10'>
        { isLoading ? <Loader/> : list.length>0 ? (list.map((movie)=><div className='relative'>
          <button onClick={()=>handleClick(movie)} className='absolute top-3 end-3 bg-blue-500 p-3 rounded hover:bg-blue-600 transition z-10 shadow'><BsBookmarkDashFill/></button>
          <Link to={`/movie/${movie.id}`}>
            <img src={baseImgUrl+movie.poster_path} className='rounded' alt="" />
          </Link>
          <h1 className='text-xl text-center font-semibold mt-3'>{movie.title}</h1>
        </div>)) : <div className='text-center my-10 text-zinc-400'>Henüz Listeye Film Eklenmedi</div>}
      </div>
    </div>
  )
}

export default Watch