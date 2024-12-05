import React from 'react'

const ThisMonth = () => {
    return (
        <div className='mx-auto relative h-[313px] w-[1170px] mb-[70px]'>
            <div className='flex justify-between mb-[60px]'>
                <div className='absolute left-0 top-0 bg-[#DB4444] rounded w-5 h-10'></div>
                {/* Main Content */}
                <div className='flex flex-row items-end justify-between gap-[87px] h-[108px] '>
                    <div className='flex flex-col items-start gap-[30px] '>
                        <div className='text-[#DB4444] font-poppins font-semibold text-[16px] leading-[20px] ml-9'>
                            Categories
                        </div>
                        <div className='text-[#000000] font-Inter font-semibold text-[34px] leading-[48px] tracking-wider'>
                            Browse By Category
                        </div>
                    </div>
                </div>

                <div className='flex items-end justify-end gap-2'>
                    {/* Left Arrow Button */}
                    <div className="relative w-[46px] h-[46px]">
                        <div className="absolute inset-0 bg-[#F5F5F5] rounded-full" />
                        <div className="absolute left-[23.91%] right-[23.91%] top-[23.91%] bottom-[23.91%] flex items-center justify-center">
                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 1L1 8L8 15M1 8H17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                    {/* Right Arrow Button */}
                    <div className="relative w-[46px] h-[46px] flex-none">
                        <div className="absolute inset-0 bg-[#F5F5F5] rounded-full" />
                        <div className="absolute left-[23.91%] right-[23.91%] top-[23.91%] bottom-[23.91%] flex items-center justify-center transform rotate-180">
                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 1L1 8L8 15M1 8H17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThisMonth