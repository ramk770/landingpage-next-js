import Image from 'next/image'
import img from  "../home/land1.jpeg";
import img1 from "../home/land2.png"

export default function page() {
  return (
    <div className="flex justify-center items-center m-32 h-screen">
      <div className="bg-white w-full h-5/6 flex rounded-xl overflow-hidden shadow-lg">
        {/* Left side with background image and contact details */}
        <div className="w-1/2 h-full relative">
          <Image src={img1} layout="fill" objectFit="cover" className="absolute" alt="Background Image" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-8">
            <h1 className="text-3xl font-bold mb-4 text-white">Contact Details</h1>
            <p className="text-lg mb-4 text-white">
              <strong>Name:</strong> Ramanranayanan K
            </p>
            <p className="text-lg text-white">
              <strong>Email:</strong> <a href="#" className="text-blue-300 hover:underline">ramanarayanan@gmail.com</a>
            </p>
          </div>
        </div>
        {/* Right side with image */}
        <div className="w-1/2 h-full relative">
          <Image src={img} layout="fill" objectFit="cover" className="absolute" alt="Profile Image" />
        </div>
      </div>
    </div>

  );
}