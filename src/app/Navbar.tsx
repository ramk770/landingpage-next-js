import Link from 'next/link';


const Navbar = () => {
  return (
  <nav className=''> 
<div className='grid grid-flow-col justify-around p-3'   >
  <Link href="/home" className='text-white capitalize hover:text-orange-500  no-underline text-2xl p-4 max-sm:text-xl max-sm:p-2'> Home</Link>
  
  <Link href="/about" className='text-white capitalize  no-underline text-2xl p-4 max-sm:text-xl max-sm:p-2 hover:text-orange-500'> About</Link>
  <Link href="/service" className='text-white capitalize  no-underline text-2xl p-4 max-sm:text-xl max-sm:p-2 hover:text-orange-500'> Servics</Link>
  <Link href="/contact" className='text-white capitalize  no-underline text-2xl p-4 max-sm:text-xl max-sm:p-2 hover:text-orange-500 '>Contact</Link>
  {/* <Link href="#" className='text-white capitalize  no-underline text-2xl w-full h-full bg-amber-300 '> <span className='text-orange-500 hover:text-pink-400 '>login</span><span className='text-pink-400 hover:text-orange-400'>/sing</span></Link> */}
  <Link href="/feature" title="Get quote now"
            className="relative inline-flex items-center justify-center px-8 py-4  max-sm:px-4 max-sm:py-2 text-lg font-bold text-white transition-all duration-200 bg-black font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 mx-3 h-7/12 max-sm:h-3/12"
            role="button">Features
        </Link>

</div>
  </nav>

  );
};

export default Navbar;
