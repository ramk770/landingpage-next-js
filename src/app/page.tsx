import Navbar from "./Navbar";
import Image from "next/image";
import log from "./log3.jpeg";
import log1 from "./log1.jpeg";
import log2 from "./log2.jpeg";
import log3 from "./log5.jpeg";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      
      <div className="flex flex-col items-center justify-between">
        <div className="relative w-full max-sm:w-full">
          <div className="absolute -z-10 w-full max-sm:w-full ">
            <Image
              src={log}
              className="w-full"
              width={500}
              
              alt="not image render"
            />
          </div>
        </div>
        <Navbar />
        <h1 className="text-white text-6xl max-sm:text-3xl max-sm:mt-12 max-sm:p-5 max-md:mt-10 max-md:p-12 max-md:text-4xl  mt-32 p-20"> <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-100 from-sky-500">WELC</span>OME..</h1>
        <p className="text-white text-xl text-center max-sm:text-sm max-md:text-sm max-sm:mx-14 max-sm:mb-1  mx-28  max-md:mx-4 md:mb-4 mb-2 ">We offer innovative solutions in Your Product/Service, emphasizing quality, customer support, and satisfaction. Explore our top products designed to elevate your lifestyle. Join our community for updates, exclusive offers, and special events..</p>
        <Link href="#" title="Get quote now"
            className="relative inline-flex items-center justify-center px-8 py-4 max-sm:px-4 max-sm:py-2 max-md:px-4 max-md:py-2 text-lg font-bold text-white transition-all duration-200 bg-orange-400 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 mx-3 h-7/12 max-md:h-2/12 max-sm:h-3/12"
            role="button">Get Starteds
        </Link>
      </div>
      <div className="flex gap-8 flex-wrap justify-center  h-screen py-10 mt-20 max-sm:mt-5 max-sm:py-5 max-md:mt-10 max-md:py-7">
    <div
        className="transform  rounded-xl h-64 w-64  max-sm:h-24 max-sm:w-24 max-md:h-44 max-md:w-44 bg-white shadow-xl transition duration-300 hover:scale-105">
        <div className="flex h-full justify-center items-center">
          <Image  src={log3} className="w-auto h-auto  absolute -z-10 w-full "/>
          <h1></h1>
           
        </div>
    </div>

    <div
        className="transform  rounded-xl h-64 w-64 max-sm:h-24 max-sm:w-24 max-md:h-44 max-md:w-44 bg-white shadow-xl transition duration-300 hover:rotate-180">
        <div className="flex h-full justify-center items-center">
        <Image  src={log1} className="w-auto h-auto  absolute -z-10 w-full "/>
        <h1></h1>
        </div>
    </div>

    <div
        className="transform rounded-xl h-64 w-64 max-sm:h-24 max-sm:w-24 max-md:h-44 max-md:w-44 bg-white shadow-xl transition duration-300 hover:translate-x-4">
        <div className="flex h-full justify-center items-center">
        <Image  src={log2} className="w-auto h-auto  absolute -z-10 w-full "/>
        <h1></h1>
        </div>
    </div>
</div>

    </div>
  );
}
