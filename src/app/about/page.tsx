import Services from '@/components/Services';
import React from 'react'
import { RxTwitterLogo } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa6";
import { RiLinkedinLine } from "react-icons/ri";

const page = () => {
  return (
    <div className='w-[1170px] h-auto mx-auto relative'>
      <div className='h-[564px] flex gap-[30px]'>
        {/* Card  */}
        <div className='w-[370px] flex flex-col gap-8'>
          <img src="/images/TeamMember.png" alt="TeamMember" className='h-[430px] w-full' />
          <div>
            <h3 className='font-Inter font-medium text-[32px] leading-[30px] tracking-[0.04em]'>Tom Cruise</h3>
            <p className='mt-2 text-[16px]'>Founder & Chairmen</p>
            <div className='flex gap-4 mt-4'>
              <RxTwitterLogo className='w-6 h-6' />
              <FaInstagram className='w-6 h-6' />
              <RiLinkedinLine className='w-6 h-6'/>
            </div> 
          </div>
        </div>
        <div className='w-[370px] flex flex-col gap-8'>
          <img src="/images/TeamMember2.png" alt="TeamMember" className='h-[430px] w-full' />
          <div>
            <h3 className='font-Inter font-medium text-[32px] leading-[30px] tracking-[0.04em]'>Emma Watson</h3>
            <p className='mt-2 text-[16px]'>Managing Director</p>
            <div className='flex gap-4 mt-4'>
              <RxTwitterLogo className='w-6 h-6' />
              <FaInstagram className='w-6 h-6' />
              <RiLinkedinLine className='w-6 h-6'/>
            </div> 
          </div>
        </div>
        <div className='w-[370px] flex flex-col gap-8'>
          <img src="/images/TeamMember3.png" alt="TeamMember" className='h-[430px] w-full' />
          <div>
            <h3 className='font-Inter font-medium text-[32px] leading-[30px] tracking-[0.04em]'>Will Smith</h3>
            <p className='mt-2 text-[16px]'>Product Designer</p>
            <div className='flex gap-4 mt-4'>
              <RxTwitterLogo className='w-6 h-6' />
              <FaInstagram className='w-6 h-6' />
              <RiLinkedinLine className='w-6 h-6'/>
            </div> 
          </div>
        </div>
      </div>
      <div className='relative'>
      <div className="absolute flex items-center gap-3 left-[353px] top-[319px]">
          <div className="w-[12px] h-[12px] bg-white opacity-50  rounded-full"></div>
          <div className="w-[12px] h-[12px] bg-white opacity-50  rounded-full"></div>
          <div className="w-[14px] h-[14px]  rounded-full"></div>
          <div className="absolute w-[10px] h-[10px] left-[50px] top-[2px] bg-[#DB4444]"></div>
          <div className="absolute w-[14px] h-[14px] left-[48px] top-[0px] border-2 border-white  rounded-full"></div>
          <div className="w-[12px] h-[12px] bg-white opacity-50  rounded-full"></div>
          <div className="w-[12px] h-[12px] bg-white opacity-50  rounded-full"></div>
        </div>
      </div>
      
      <Services />
    </div>
  )
}

export default page;/* Tom Cruise */