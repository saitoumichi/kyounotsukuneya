'use client';

import React from 'react'
import {useRouter} from 'next/navigation'


const Header:React.FC=()=>{
  const handleClick = () => {
    console.log('マップへ案内します');
  }
  const router = useRouter();
  return(
    <header className='bg-red-400 h-[100px] md:bg-yellow-200 relative'>
      <h1 className='text-3xl font-bold text-orange-600 tracking-wide'>京のつくね家</h1>
      <h5 className='absolute right-0 bottom-2 p-[7px] text-[#80080]'>
        <button onClick={handleClick} className='bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors duration-300'>
          <a href='https://www.google.com/maps/place/%E4%BA%AC%E3%81%AE%E3%81%A4%E3%81%8F%E3%81%AD%E5%AE%B6/@35.0178497,135.7727094,17z/data=!3m1!4b1!4m6!3m5!1s0x600108f49cf3c3c1:0x3a57b203b2b4e953!8m2!3d35.0178497!4d135.7727094!16s%2Fg%2F1wj_t50g?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D'
          target='_blank'
          rel='noopener noreferrer'>
            マップはこちら
          </a>
          </button>
      </h5>
      <h5 className='absolute right-2 top-2 text-[#808000] font-bold'>
        <nav className='space-x-4 text-xs md:text-base'>
          <button onClick={()=>router.push('/')}>ホーム</button>
          <button onClick={()=>router.push('/menu')}>メニューはこちら</button>
        </nav>
      </h5>
    </header>
  )
}

export default Header;