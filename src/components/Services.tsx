import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'FREE AND FAST DELIVERY',
      description: 'Free delivery for all orders over $140',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="white"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17v-1.5a2.5 2.5 0 015 0V17m-2.5-6.5a3.25 3.25 0 01-3.25-3.25m6.5 0a3.25 3.25 0 013.25 3.25m0 0a8.96 8.96 0 01-.3 2.5M5.5 13a8.96 8.96 0 01-.3-2.5m15.3 0H21m-1.5 0H4.5m-1 2.5h18.1M6.5 19h11M9.5 22h5"
          />
        </svg>
      ),
    },
    {
      title: '24/7 CUSTOMER SERVICE',
      description: 'Friendly 24/7 customer support',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="white"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20 8.5c-1.5 2.5-4 4.5-8 4.5S4.5 11 3 8.5M8 21h8m-5-3h2m-1-4v3"
          />
        </svg>
      ),
    },
    {
      title: 'MONEY BACK GUARANTEE',
      description: 'We return money within 30 days',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="white"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6m-3-3v6m-5.5-3a7.5 7.5 0 1115 0 7.5 7.5 0 11-15 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex justify-center items-center gap-[88px] flex-wrap mt-16">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-[24px] w-[249px] h-[161px]"
        >
          <div className="relative w-[80px] h-[80px] flex items-center justify-center">
            {/* Outer circle */}
            <div className="absolute w-full h-full rounded-full bg-[#2F2E30] opacity-30" />
            {/* Inner circle */}
            <div className="absolute w-[70%] h-[70%] rounded-full bg-black flex items-center justify-center">
              {service.icon}
            </div>
          </div>
          {/* Text Section */}
          <div className="flex flex-col items-center gap-[8px]">
            <h3 className="text-[20px] font-semibold text-black">
              {service.title}
            </h3>
            <p className="text-[14px] text-center text-black">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
