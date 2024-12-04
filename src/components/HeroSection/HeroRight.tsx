import Image from 'next/image';
import React from 'react';

const HeroRight = () => {
    return (
        <div className="absolute w-[892px] h-[344px] left-[424px] top-[170px] bg-black overflow-hidden">
            {/* Hero Image */}
            <Image
                src="/images/IphoneImage.png"
                alt="Apple Logo"
                width={496}
                height={352}
                className="relative w-[496px] h-[352px] left-[396px] top-[16px] bg-cover bg-center"
                priority
            />

            {/* Content Section */}
            <div className="absolute w-[190px] h-[49px] left-[64px] top-[58px] flex items-center gap-6">
                <div className="w-[40px] h-[49px] bg-no-repeat bg-cover" style={{ backgroundImage: 'url(/images/appleLogo.png)' }}></div>
                <div className="flex-none text-center text-white font-poppins text-sm">iPhone 14 Series</div>
            </div>

            {/* Voucher Text */}
            <div className="absolute w-[294px] h-[120px] left-[64px] top-[127px] text-white text-[48px] font-Inter font-semibold leading-[60px] tracking-wide">
                Up to 10% off Voucher
            </div>

            {/* Button and Arrow */}
            <div className="absolute flex items-center gap-2 left-[67px] top-[269px]">
                <button className="w-[81px] h-[24px] text-center text-white text-[16px] font-medium underline underline-offset-8">Shop Now</button>
                <svg width="20" height="20" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 8H18M18 8L11 1M18 8L11 15" stroke="#FAFAFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            {/* Decorative Ellipses */}
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
    );
};

export default HeroRight;

