"use client"

import Link from 'next/link'
import React from 'react';
import {useState} from 'react';
import {useRouter} from 'next/navigation'
import { signIn } from 'next-auth/react';


export default function SignIn() {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [error , setError] = useState('');
    const router = useRouter();


    const handleSubmit = async (e)=>{
           e.preventDefault();
           const result = await signIn('credentials',{
            redirect:false,
            email,
            password,
           });
           if (result.error){
            setError('!نام کاربری یا رمز عبور غلط است')
        } else {
            router.push('/');
        }
    };
    

  return (
    <div className='flex items-center justify-center mt-[80px] sm:mt-20'>
        <div className='max-w-xl w-full sm:w-[50%] rounded-xl shadow-md max-h-[800px] bg-gray-100 sm:p-10 p-6'>
            <div className='text-3xl font-semibold items-center text-center'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 drop-shadow-sm  '> ورود</span>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700 drop-shadow-sm mr-1'>به </span>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 drop-shadow-sm  '> مشاور</span>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700 drop-shadow-sm '>همراه </span>
            </div>

            <form onSubmit={handleSubmit}>
                <div className='block py-2 mt-10'>
                <input className='py-3 px-3 w-full rounded-lg shadow-b-lg border-none hover:border-none placeholder:text-right text-right' type='text' name='email' placeholder='نام کاربری/ایمیل' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='block'>
                <input className='py-2 px-3 w-full rounded-lg shadow-b-lg placeholder:text-right text-right' type='password' name='password' placeholder='رمز عبور' value={password} onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <div className='flex mt-10 justify-between text-gray-600'>
                    <div className='flex space-x-2 items-center'>
                        <input type='checkbox'  className='rounded border-gray-200 text-purple-300 h-4 w-4' id='remember'/>
                        <label className='ml-2' htmlFor='remember'>مرا به خاطر بسپار</label>
                    </div>

                    <div className='items-right'>
                        <Link href="#" className='text-right hover:text-gray-900'>فراموشی رمز</Link>
                    </div>
                </div>

                {error && <p className='text-red-500 font-bold text-right mt-4'>{error}</p>}

                <button type='submit' className='w-full px-2 py-3 text-lg font-semibold bg-blue-600 text-white rounded-lg hover:opacity-80 mt-10 shadow-sm'>ورود</button>
                <div className='text-right mt-6 flex space-x-2 items-center justify-end px-3'>
                <Link className='text-blue-800 hover:text-gray-600' href="/sign-up">ثبت نام</Link>
                    <p className='text-right text-gray-800'>تا حالا حساب کاربری نداشتی؟</p>  
                </div>
            </form>
        </div>
    </div>
  )
}
