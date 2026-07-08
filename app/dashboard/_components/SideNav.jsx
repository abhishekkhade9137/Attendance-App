import React from 'react'
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
    name:'Members',
    icon:PersonStandingIcon,
    path:'/dashboard/Members',

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
    <div className='border-r border-black shadow-md h-screen w-40 bg-white text-black '>
      <div className='p-4 font-extrabold text-xl text-center border-b border-black'>
        <a href="/dashboard">ATTENDANCE</a>
      </div>
      <div className="my-5"></div>
      {menulist.map((menu,index)=>(
        <Link href={menu.path} key={index}>
        <h2 className='flex
        items-center
        gap-3
        text-md
        font-bold
        p-4
        text-black
        hover:bg-black 
        hover:text-white 
        cursor-pointer 
        rounded-lg
        mx-2
        select-none
        transition ease-in-out delay-125'>
        <menu.icon/>
        {menu.name}
        </h2></Link>
      ))}
      <div className='flex
      items-center
      bottom-2
      left-5
      fixed
      font-bold 
      text-xs'>
        <h3 className='select-none'>MADE WITH LOVE 💕</h3>
      </div>
      </div>
      
        
        
  )
}

export default SideNav
