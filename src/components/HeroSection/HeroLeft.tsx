import React from 'react';

const HeroLeft = () => {
  return (
    <div className="absolute left-[135px] top-[170px] w-[217px] h-[344px] flex flex-col items-start gap-4">
      <div className="flex items-center gap-4 w-[217px] h-[24px]">
        <span className="text-black text-center text-base font-normal">Woman’s Fashion</span>
        <div className="w-[24px] h-[24px]">
          {/* SVG Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </div>
      </div>
      <div className="flex items-center gap-4 w-[217px] h-[24px]">
        <span className="text-black text-center text-base font-normal">Men’s Fashion</span>
        <div className="w-[24px] h-[24px] ">
          {/* SVG Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </div>
      </div>
      <div className="flex items-center gap-4 w-[217px] h-[24px]">
        <span className="text-black text-center text-base font-normal">Electronics</span>
      </div>
      <div className="flex items-center gap-4 w-[217px] h-[24px]">
        <span className="text-black text-center text-base font-normal">Home & Lifestyle</span>
      </div>
      <div className="flex items-center gap-4 w-[217px] h-[24px]">
        <span className="text-black text-center text-base font-normal">Medicine</span>
      </div>
      <div className="flex items-center gap-4 w-[217px] h-[24px]">
        <span className="text-black text-center text-base font-normal">Sports & Outdoor</span>
      </div>
      <div className="flex items-center gap-4 w-[217px] h-[24px]">
        <span className="text-black text-center text-base font-normal">Baby’s & Toys</span>
      </div>
      <div className="flex items-center gap-4 w-[217px] h-[24px]">
        <span className="text-black text-center text-base font-normal">Groceries & Pets</span>
      </div>
      <div className="flex items-center gap-4 w-[217px] h-[24px]">
        <span className="text-black text-center text-base font-normal">Health & Beauty</span>
      </div>
    </div>
  );
};

export default HeroLeft;

