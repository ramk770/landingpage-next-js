import Image from 'next/image'
import img from  "./ram1.jpg";
export default function page() {
  return (
<div className="flex justify-center items-center m-32 h-screen">
      <div className="bg-white w-full h-5/6 flex rounded-xl overflow-hidden shadow-lg">
        {/* Left side with image */}
        <div className="w-1/2 h-full relative">
          <Image src={img} layout="fill" objectFit="cover" className="absolute" alt="Left side image" />
        </div>
        {/* Right side with content */}
        <div className="w-1/2 h-full flex flex-col justify-center p-8">
        <h1 className="text-3xl font-bold mb-4">Hello, I'm a Full-Stack Developer</h1>
          <p className="text-lg mb-4">
            I am a full-stack developer, an Android developer, and a freelance mobile app developer. 
            I specialize in creating dynamic and responsive web and mobile applications.
          </p>
          <p className="text-lg">
            With a passion for coding and problem-solving, I deliver high-quality software solutions 
            tailored to meet client needs.
          </p>
          <p className='ml-10 text-white text-2xl'>Ramanrayanan k</p>
        </div>
      </div>
    </div>

  );
}