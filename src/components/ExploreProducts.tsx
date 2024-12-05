import React from 'react'

const ExploreProducts = () => {
    return (
        <div className='mx-auto relative h-[900px] w-[1170px] mb-[140px]'>
            <div className='flex justify-between mb-[60px]'>
                <div className='absolute left-0 top-0 bg-[#DB4444] rounded w-5 h-10'></div>
                {/* Main Content */}
                <div className='flex flex-row items-end justify-between gap-[87px] h-[108px] '>
                    <div className='flex flex-col items-start gap-[30px] '>
                        <div className='text-[#DB4444] font-poppins font-semibold text-[16px] leading-[20px] ml-9'>
                            Featured
                        </div>
                        <div className='text-[#000000] font-Inter font-semibold text-[34px] leading-[48px] tracking-wider'>
                            New Arrival
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
            <div className='w-full h-[600px] grid grid-cols-4 grid-rows-2 gap-x-[30px] gap-y-[32px]'>
                <div className='bg-black col-span-2 row-span-2 rounded flex items-end justify-center'>
                    <img src="/images/Products/PS5.png" alt="PS5 Image" className='w-[511px] h-[511px]' />
                    <div className="absolute flex flex-col items-start gap-4 p-0 w-[242px] h-[122px] left-[32px] top-[446px]">
                        {/* PlayStation 5 Title */}
                        <div className="flex flex-col items-start gap-4 w-[242px] h-[82px]">
                            <span className="text-white text-[24px] font-semibold leading-[24px] tracking-wider">
                                PlayStation 5
                            </span>
                            <span className="text-white text-[14px] font-normal leading-[21px]">
                                Black and White version of the PS5 coming out on sale.
                            </span>
                        </div>
                        <span className="text-white text-[16px] font-medium leading-[24px] underline underline-offset-4">
                            Shop Now
                        </span>
                    </div>
                </div>
                <div className='bg-[#0D0D0D] col-span-2 row-span-1 rounded'></div>
                <div className='bg-slate-500 col-span-1 row-span-1 rounded'></div>
                <div className='bg-slate-500 col-span-1 row-span-1 rounded'></div>
            </div>
        </div>
    )
}

export default ExploreProducts