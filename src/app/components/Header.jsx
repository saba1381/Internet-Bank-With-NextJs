"use client"

import Link from 'next/link'
import React, { useState } from 'react';
import {FiX , FiMenu , FiSearch} from 'react-icons/fi';

export default function Header() {
  const [openMenu , setOpenMenu] = useState(false);
  const [searchOpen , setsearchOpen] =useState(false);

  return (
    <header className='bg-gradient-to-r from-purple-500 to-blue-200 shadow-lg' >
        {/* logo */}

        <div className='max-w-6xl mx-auto flex p-3 justify-between items-center'>

        <nav className=' text-white text-lg flex' style={{ direction: "rtl" }}>
            <ul className='gap-5 hidden sm:flex'>
                <Link className='hover:opacity-60 transition duration-200' href="/">خانه</Link>
                <Link className='hover:opacity-60 transition duration-200' href="/learn-courses">دوره های آموزشی</Link>
                <Link className='hover:opacity-60 transition duration-200' href="/about">درباره ما</Link>
                <Link className='hover:opacity-60 transition duration-200' href="/contact-us">ارتباط با ما</Link>
                <Link className='hover:opacity-60 transition duration-200' href="/sign-in">ورود</Link>
            </ul>

            <button className='sm:hidden' onClick={()=>setOpenMenu(!openMenu)}>              
              {
                openMenu ?(
                  <FiX className="ml-2 w-6 h-6 hover:text-gray-500 transition duration-200" />
                ):(
                  <FiMenu className="ml-2 w-6 h-6 hover:text-gray-500 transition duration-200" />
                )
              }
            </button>
          </nav>

          <div className='hidden sm:block ml-0'>
            <input type='text' placeholder='جست و جو' className='bg-transparent text-white placeholder:text-white focus:border-none py-2 px-3 border text-right rounded-lg shadow-sm text-sm transition-max-width  duration-500 ease-in-out'/>
          </div>

          <div className='mx-auto sm:hidden flex  items-center space-x-4 mb-2 ml-4'>

           {
            searchOpen ?(
                   <input type='text' placeholder='جست و جو' className='bg-transparent py-2 px-3 border text-right placeholder:text-white rounded-md shadow-sm text-sm transition-max-width  duration-500 ease-in-out' />
            ): null
           }

           <button onClick={()=>setsearchOpen(!searchOpen)}>
            <FiSearch className='w-5 h-5 text-white mt-3'/>
           </button>
          </div>

          <Link href='/' className=' text-3xl sm:text-5xl font-semibold group cursor-pointer'>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 drop-shadow-sm group-hover:from-blue-400 group-hover:to-blue-600 '> مشاور</span>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700 drop-shadow-sm group-hover:from-purple-400 group-hover:to-purple-800'>همراه </span>
          </Link>
        
        </div>
        {
          <div className={`text-white text-md sm:hidden overflow-hidden transition-max-height duration-500 ease-in-out ${openMenu? 'max-h-[700px]' : 'max-h-0'} mt-1 pb-1 opacity-80 pl-10`} >
               <Link className='block hover:opacity-60 transition duration-200 p-1' href="/">خانه</Link>
                <Link className='block hover:opacity-60 transition duration-200 p-1' href="/learn-courses">دوره های آموزشی</Link>
                <Link className='block hover:opacity-60 transition duration-200 p-1' href="/about">درباره ما</Link>
                <Link className='block hover:opacity-60 transition duration-200 p-1' href="/contact-us">ارتباط با ما</Link>
                <Link className='block hover:opacity-60 transition duration-200 p-1' href="sign-in">ورود</Link>
          </div>
          }
    </header>
  )
}
