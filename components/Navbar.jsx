import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useRouter } from 'next/router';



const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)
  const [navBg, setNavBg] = useState('#ecf0f3')
  const [linkColor, setLinkColor] = useState('#1f2937')
  const router = useRouter()

  useEffect(()=>{
      if (
        router.asPath === '/popculture' ||
        router.asPath === '/presidents' ||
        router.asPath === '/bible'
      ) {
        setNavBg('transparent')
        setLinkColor('#ebe5d8')
      } else {
        setNavBg('#ebe5d8')
        setLinkColor('#1f2937')
      }
  },[router])

    const handleNav = () => {
      setNav(!nav)
    };

  useEffect(() => {
    const shadowHandler = () => {
      if (window.scrollY >= 90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    };
    window.addEventListener('scroll', shadowHandler)
  },[]);


  const [dropdownVisible, setDropdownVisible] = useState(false);

  function toggleDropdown() {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div
    style={{backgroundColor: `${navBg}`}}
     className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
        <div className='flex justify-between items-center w-full h-full px-6 2xl:px-16'>    
        <Link href='/'>
        <Image className='rounded'
            src="../assets/ainihongalogo.png" 
            alt="/" 
            width='80' 
            height='50' 
        />
        </Link>
        <div>
            <ul style={{color: `${linkColor}`}}className='hidden md:flex'>
                <li className='ml-1 md:ml-4 text-sm uppercase hover:border-b'>
                    <Link href='/#home'>Home</Link>
                </li>                
                <li className='ml-1 md:ml-4 text-sm uppercase hover:border-b relative'>
                    <Link href='/#gallery' onClick={toggleDropdown}>Galleries</Link>
                    <div className={`dropdown-menu ${dropdownVisible ? 'block' : 'hidden'}`}>
                        <ul>
                            <li><Link href='/gallery/popculture'>Pop Culture</Link></li>
                            <li><Link href='/gallery/presidents'>Presidential</Link></li>
                            <li><Link href='/gallery/bible'>Biblical</Link></li>
                            <li><Link href='/gallery/holidays'>Holidays</Link></li>
                            <li><Link href='/gallery/dailylife'>Slice of Life</Link></li>
                        </ul>
                    </div>
                </li>
                <li className='ml-1 md:ml-4 text-sm uppercase hover:border-b'>
                    <Link href='/#about'>About</Link>
                </li>
            </ul>
            <div onClick={handleNav} className='md:hidden'>
               <AiOutlineMenu size={25}/>
            </div>
      </div>
    </div>

    <div className={nav ? 'md:hidden fixed  left-0 top-0 w-full h-screen bg-black/70' : ''}>
      <div className={
            nav 
            ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ebe5d8] p-10 ease-in duration-500'
            : 'fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ebe5d8] p-10 ease-in duration-500'
              }
            >
        <div>
          <div className='flex w-full items-center justify-between'>
            <Image className='rounded' src='../assets/ainihongalogo.png' alt='/' width='87' height='35' />
            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
              <AiOutlineClose />
            </div>
          </div>
          <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>Go where your mind wanders</p>
          </div>
        </div>
        <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
                <Link href='/#home'>
                <li onClick={()=> setNav(false)} className='py-4 text-sm'>Home</li>
                </Link>
                <Link href='/#about'>
                <li onClick={()=> setNav(false)} className='py-4 text-sm'>About</li>
                </Link>
                <Link href='/#gallery'>
                <li onClick={()=> setNav(false)} className='py-4 text-sm' style={{ marginTop: '20px'}}><b>Galleries</b></li>
                </Link>
                <Link href='/gallery/popculture'>
                <li onClick={()=> setNav(false)} className='py-4 text-sm'>Pop Culture</li>
                </Link>
                <Link href='/gallery/presidents'>
                <li onClick={()=> setNav(false)} className='py-4 text-sm'>Presidential</li>
                </Link>
                <Link href='/gallery/bible'>
                <li onClick={()=> setNav(false)} className='py-4 text-sm'>Biblical</li>
                </Link>
                <Link href='/gallery/holidays'>
                <li onClick={()=> setNav(false)} className='py-4 text-sm'>Holidays</li>
                </Link>
                <Link href='/gallery/dailylife'>
                <li onClick={()=> setNav(false)} className='py-4 text-sm'>Slice of Life</li>
                </Link>
            </ul>
            <div className='pt-40 '>
               <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
              
              </div>
              </div>
            </div>
        </div>
      </div>
    </div>


  );
};

export default Navbar 