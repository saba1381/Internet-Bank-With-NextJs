import Link from 'next/link'
import React from 'react'

export default function SignUp() {
  return (
    <div className='flex items-center justify-center mt-[80px] sm:mt-20'>
    <div className='max-w-xl w-full sm:w-[50%] rounded-xl shadow-md max-h-[800px] bg-gray-100 sm:p-10 p-6'>
        <div className='text-3xl font-semibold items-center text-center'>
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700 drop-shadow-sm  '> ثبت نام</span>

        </div>

        <form>

            <div className='mt-8 space-y-5'>
            <div className='block'>
            <input className='py-3 px-3 w-full rounded-lg shadow-b-lg placeholder:text-right text-right' type='text' placeholder=' نام کاربری'/>
            </div>
            <div className='block'>
            <input className='py-3 px-3 w-full rounded-lg shadow-b-lg placeholder:text-right text-right' type='email' placeholder=' ایمیل '/>
            </div>
            <div className='block'>
            <input className='py-3 px-3 w-full rounded-lg shadow-b-lg placeholder:text-right text-right' type='password' placeholder='رمز عبور'/>
            </div>
            <div className='block'>
            <input className='py-3 px-3 w-full rounded-lg shadow-b-lg placeholder:text-right text-right'  type='password' placeholder=' تکرار رمز عبور'/>
            </div>
            </div>

            <Link href="#"><button type='submit' className='w-full px-2 py-3 text-lg  bg-blue-600 text-white rounded-lg hover:opacity-80 mt-10 shadow-sm transition duration-200'> ثبت نام </button></Link>
            <Link href="/sign-in"><button type='submit' className='w-full px-2 py-3 text-lg  bg-white border border-blue-600 text-blue-600 rounded-lg hover:border-blue-300 transition duration-200 mt-3 shadow-sm'>  بازگشت</button> </Link>
            
        </form>
    </div>
</div>
  )
}
