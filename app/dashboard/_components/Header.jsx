import React from 'react'

function Header() {
  return (
    <div className='h-20
      border-b
      border-black
      flex 
      justify-between
      bg-white
      text-center
      text-black
      bold
      '>
      <div className='flex-1'></div>
      <div className='flex items-center justify-center'>
        <h1 className='bold text-center text-3xl font-extrabold'>ATTENDANCE APP</h1>
      </div>
      <div className='flex-1'></div>
    </div>
  )
}

export default Header