import React from 'react'
import { Ellipsis , Wave } from 'react-css-spinners'


export default function Loading() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <Wave
    color="rgba(115,106,211,1)"
    size={56}
    thickness={8}
  />
    </div>
  )
}
