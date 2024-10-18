import React from 'react'
import post1 from "../../assets/posts/1.jpeg"
import user1 from "../../assets/posts/user1.jpeg"
import { CiCalendar } from "react-icons/ci";


function Posts() {
  return (
    <div className='pt-14 mt-36 bg-[rgb(231,236,240)] lg:mt-0 relative  lg:pb-12 lg:pr-9'>
        <div className='pl-4 lg:pl-32 '>
        <h6 className='text-[#0066FF] text-[13px] mb-2  '>PORTFOLIO</h6>
        <h2 className='text-[25px] tracking-wider mb-3'>
          <b>Latest Posts </b><br className='lg:hidde'></br>
          <span className='font-normal'>From Our Team</span>
        </h2>
      </div>


      <div className='flex flex-row justify-center'>
        <div className='relative'>
        <img src={post1} className='h-[350px] w-[300px]  rounded-lg  mix-blend-multiply border-2 bg-black  hover:transform transition rotate-6 ease-in-out'></img>
        <a href="#" className='text-[11px] absolute text-[#FFFFFF] left-6 top-6 px-4 py-2 ' style={{
            background: "linear-gradient(60deg, rgba(0,102,255,1) 9%, rgba(4,158,253,1) 69%, rgba(0,102,255,1) 100%)",
          }}>technology</a>
        <a href="#" className='text-[16px] text-[#FFFFF] lg:underline absolute bottom-12 left-6 text-[#FFFFFF] font-bold'>crypto Trends 2023</a>
        <div className='flex absolute bottom-4 left-6 justify-start gap-2 items-center'>
            <img src={user1} className='rounded-full w-4 h-4 '></img>
            <a href="#" className='text-[13px] text-[#FFFFFF]'>By Admin</a>
            <div className='flex gap-1 items-center pl-2 font-semibold'>
            <CiCalendar className='text-[#FFFFFF]' />
            <a className='text-[13px] text-[#FFFFFF]'>May 15, 2023</a>
        </div>
        </div>
      </div> 
      </div>
    </div>
  )
}

export default Posts