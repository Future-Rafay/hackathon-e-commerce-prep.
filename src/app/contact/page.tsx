import React from 'react'

const page = () => {
  return (
    <div className='w-[1170px] h-auto mx-auto mt-[181px] mb-[140px]'>
      <div className='flex items-center gap-3 absolute left-[135px] top-[222px] h-[21px]'>
        <span className='text-[14px] opacity-50'>Home /</span>
        <span>Contact</span>
      </div>
      <div className='flex gap-[30px]'>
        {/* Parent 1 */}
        <div className='w-[340px] h-[457px] flex items-center justify-center' style={{ boxShadow: '0px 1px 13px rgba(0, 0, 0, 0.05)'}}>
          <div className="w-[270px] h-[366px] flex flex-col gap-8">
            {/* Child 1 */}
            <div>
              <div className='flex flex-col gap-6'>
                <div className='flex items-center gap-4'>
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="20" fill="#DB4444" />
                    <path d="M18.5542 14.24L15.1712 10.335C14.7812 9.885 14.0662 9.887 13.6132 10.341L10.8312 13.128C10.0032 13.957 9.76623 15.188 10.2452 16.175C13.1069 22.1 17.8853 26.8851 23.8062 29.755C24.7922 30.234 26.0222 29.997 26.8502 29.168L29.6582 26.355C30.1132 25.9 30.1142 25.181 29.6602 24.791L25.7402 21.426C25.3302 21.074 24.6932 21.12 24.2822 21.532L22.9182 22.898C22.8484 22.9712 22.7565 23.0194 22.6566 23.0353C22.5567 23.0512 22.4543 23.0339 22.3652 22.986C20.1357 21.7021 18.2862 19.8502 17.0052 17.619C16.9573 17.5298 16.9399 17.4272 16.9558 17.3272C16.9717 17.2271 17.02 17.135 17.0932 17.065L18.4532 15.704C18.8652 15.29 18.9102 14.65 18.5542 14.239V14.24Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                  <p className='font-medium'>Call To Us</p>
                </div>
                <div className='flex flex-col gap-4 text-[14px]'>
                  <p>
                    We are available 24/7, 7 days a week.
                  </p>
                  <p>
                    Phone: +8801611112222
                  </p>
                </div>
              </div>
            </div>
            {/* Child 2 */}
            <div className='w-full h-0 border-b-[1px] border-[#828282] border-solid' />

            {/* Child 3 */}
            <div className='flex flex-col gap-6'>
              <div className='flex gap-4 items-center'>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="20" fill="#DB4444" />
                  <path d="M10 13L20 20L30 13M10 27H30V13H10V27Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className='font-medium'>Write To Us</p>
              </div>
              <div className='flex flex-col gap-4 text-sm'>
                <p>Fill out our form and we will contact you within 24 hours.</p>
                <p>Emails: customer@exclusive.com</p>
                <p>Emails: support@exclusive.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Parent 2 */}
        <div className='w-[800px] h-[457px] flex items-center justify-center' style={{ boxShadow: '0px 1px 13px rgba(0, 0, 0, 0.05)'}}>
          <div className='flex flex-col gap-8'>
            <div className='flex gap-4'>
              <input type="text" className='w-[235px] h-[50px] rounded ps-4 outline-none bg-[#F5F5F5]' placeholder='Name *'/>
              <input type="text" className='w-[235px] h-[50px] rounded ps-4 outline-none bg-[#F5F5F5]' placeholder='Your Email *'/>
              <input type="text" className='w-[235px] h-[50px] rounded ps-4 outline-none bg-[#F5F5F5]' placeholder='Your Phone *'/>
             
            </div>
            <div>
              <textarea className='w-[737px] h-[207px] rounded ps-4 pt-4 outline-none bg-[#F5F5F5]' placeholder='Your Massage'/>
            </div>
            <div className='flex justify-end'>
              <button className='flex items-center justify-center py-4 px-12 gap-[10px] bg-[#DB4444] rounded w-[215px] h-14 text-[16px] text-[#FAFAFA]'>Send Massage</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page;  