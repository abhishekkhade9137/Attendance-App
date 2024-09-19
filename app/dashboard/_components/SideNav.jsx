import React from 'react'
import Image from 'next/image'
import {Hand,LayoutIcon, PersonStandingIcon, Settings } from 'lucide-react'
import Link from 'next/link'
function SideNav() {
  const menulist=[
    {
    id:1,
    name:'Dashboard',
    icon:LayoutIcon,
    path:'/dashboard'
    },
  {
    id:2,
    name:'Cadets',
    icon:PersonStandingIcon,
    path:'/dashboard/Cadets',

  },
  {
    id:3,
    name:'Attendance',
    icon:Hand,
    path:'/dashboard/Attendance',
  },
  {
    id:4,
    name:'Settings',
    icon:Settings,
    path:'/dashboard/Settings',
  }
]
  return (
    <div className='border border-black shadow-md h-screen w-40 bg-red-700 '>
      <Image src ={'./logo.svg'}
      width={180}
      height={50}
      alt="ncc logo"/>
      <hr className="my-5"></hr>
      {menulist.map((menu,index)=>(
        <Link href={menu.path}>
        <h2 className='display:flex
        align-items:items-center
        gap-3
        text-md
        bold
        p-4
        text-black
        border- 
        hover:bg-yellow-500 
        hover:text-white 
        cursor-pointer 
        rounded-lg
        select-none'>
        <menu.icon/>
        {menu.name}
        </h2></Link>
      ))}
      <div className='flex
      align-items
      bottom-2
      left-5
      fixed
      bold 
      text-xs 
      font-extrabold'>
        <h3 className=' select-none'>MADE WITH LOVE 💕</h3>
      </div>
      </div>
      
        
        
  )
}

export default SideNav
