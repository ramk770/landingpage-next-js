import Image from 'next/image'
import img from  "./log.jpeg";
import img1 from  "./land.jpeg";
import img2 from  "./land1.jpeg";
import img3 from  "./land2.png";
import { AiOutlineArrowRight } from "react-icons/ai";
export default function Home() {
  return (
    <div className="bg-black max-sm:w-full max-md:w-full max-sm:h-full w-full h-full ">
 
  
   <h1 className="text-white text-6xl max-sm:text-3xl  max-sm:p-5  max-md:p-12 max-md:text-4xl  mt- p-20"> <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-500">Top Favori</span>te Place</h1>
 <div className=" grid grid-cols-4  max-md:grid-cols-2 max-lg:grid-cols-2 gap-5 m-4 p-4 space-x-2 max-sm:grid-col-1 max-sm:grid-cols-1 space-y-2 w-full h-full">
 
  
<div className="w-72 bg-white h-80 relative overflow-hidden rounded-xl shadow-xl transition duration-300 hover:scale-105">
      <Image src={img} layout="fill" objectFit="cover" className="absolute z-0" alt="hello" />
      <div className="flex h-full justify-between items-end z-10 relative p-2">
        <div className='flex justify-between  items-end  gap-2 '>
          <h1 className='text-white text-xl font-bold text-center flex-warp '>Nature refers to the natural environment </h1>
          <AiOutlineArrowRight style={{ color: 'white', fontSize: '30px' }} />
        </div>
      </div>
</div>
<div className="w-72 bg-white h-80 relative overflow-hidden rounded-xl shadow-xl transition duration-300 hover:scale-105">
      <Image src={img1} layout="fill" objectFit="cover" className="absolute z-0" alt="hello" />
      <div className="flex h-full justify-between items-end z-10 relative p-2">
        <div className='flex justify-between  items-end  gap-2 '>
          <h1 className='text-white text-xl font-bold text-center flex-warp '>Nature refers to the natural environment </h1>
          <AiOutlineArrowRight style={{ color: 'white', fontSize: '30px' }} />
        </div>
      </div>
</div>

<div className="w-72 bg-white h-80 relative overflow-hidden rounded-xl shadow-xl transition duration-300 hover:scale-105">
      <Image src={img2} layout="fill" objectFit="cover" className="absolute z-0" alt="hello" />
      <div className="flex h-full justify-between items-end z-10 relative p-2">
        <div className='flex justify-between  items-end  gap-2 '>
          <h1 className='text-white text-xl font-bold text-center flex-warp '>Nature refers to the natural environment </h1>
          <AiOutlineArrowRight style={{ color: 'white', fontSize: '30px' }} />
        </div>
      </div>
</div>
<div className="w-72 bg-white h-80 relative overflow-hidden rounded-xl shadow-xl transition duration-300 hover:scale-105">
      <Image src={img3} layout="fill" objectFit="cover" className="absolute z-0" alt="hello" />
      <div className="flex h-full justify-between items-end z-10 relative p-2">
        <div className='flex justify-between  items-end  gap-2 '>
          <h1 className='text-white text-xl font-bold text-center flex-warp '>Nature refers to the natural environment </h1>
          <AiOutlineArrowRight style={{ color: 'white', fontSize: '30px' }} />
        </div>
      </div>
</div>
</div>
</div>

  );
}