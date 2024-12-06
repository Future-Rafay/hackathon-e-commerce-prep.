'use client'

import React, { useState, useEffect } from 'react';

// Function to scroll back to top
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Handle scroll event to toggle button visibility
    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true); // Show the button when scrolled 200px
        } else {
            setIsVisible(false); // Hide the button when near the top
        }
    };

    // Add scroll event listener on mount and remove it on unmount
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        // Conditionally render the button only when it's visible
        isVisible && (
            <div
                aria-label="Back to top"
                className="w-[46px] h-[46px] fixed right-5 bottom-10     cursor-pointer z-50"
                onClick={scrollToTop} // Corrected to call scrollToTop function
            >
                {/* Outer circle (Ellipse 16) */}
                <div className="absolute inset-0 bg-[#F5F5F5] rounded-full" />

                {/* Inner Arrow Icon */}
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