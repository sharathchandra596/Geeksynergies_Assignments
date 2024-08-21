/* eslint-disable react/prop-types */

import { FaAngleDown, FaAngleUp } from "react-icons/fa";

function Card({movie}) {
  return (
    <div className='m-3 p-3 rounded-lg shadow bg-stone-200'>
        <div className="topsection flex justify-center items-center gap-5">
            <div className="vote">
            <FaAngleUp size={50} />
            <p className='text-3xl text-center'>1</p>
            <FaAngleDown size={50} />
            </div>
            <div className="main flex ">
                <img className='w-[150px]  object-fill' src={movie.poster}  alt="" />
                <div className='details  flex flex-col gap-3 px-1 flex-wrap'>
                <h1 className=' text-stone-600 font-light'>name: <span className='text-black font-medium'>{movie.title}</span> </h1>
                <h1 className=' text-stone-600 font-light'>genre: <span className='text-black font-medium'> {movie.genre}</span> </h1>
                <h1 className=' text-stone-600 font-light'>director:<span className='text-black font-medium'> {movie.director}</span>  </h1>
                <h1 className=' text-stone-600 font-light'>staring: <span className='text-black font-medium'>{movie.stars} </span> </h1>
                    
                </div>
            </div>
        </div>
        <button className='w-full p-2 mt-2 bg-blue-500 rounded '>watch trailer</button>
      
    </div>
  )
}

export default Card
