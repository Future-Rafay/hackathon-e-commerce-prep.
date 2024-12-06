'use client'
import React, { useState, useEffect } from 'react';

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true); 
        } else {
            setIsVisible(false); 
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        isVisible && (
            <div
                aria-label="Back to top"
                className="w-[46px] h-[46px] fixed right-5 bottom-10     cursor-pointer z-50"
                onClick={scrollToTop}
            >
                <div className="absolute inset-0 bg-[#F5F5F5] rounded-full" />
                <div className="absolute left-[23.91%] right-[23.91%] top-[23.91%] bottom-[23.91%]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="black"
                        className="w-full h-full"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 15l-7-7-7 7"
                        />
                    </svg>
                </div>
            </div>
        )
    );
};

export default BackToTop;