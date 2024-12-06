import React from 'react'

const SignINPage = () => {
    return (
        <div className='w-[1305px] h-[781px] mb-[140px] mt-[60px] flex gap-32'>
            <img src="/images/LoginPageImage.png" alt="LoginPageImage" className='w-[805px] h-full' />
            <div className='flex flex-col my-auto w-[371px] h-[530px] gap-12'>
                <div className='flex flex-col gap-6'>
                    <h1 className='font-Inter text-[36px] font-medium'>Create an account</h1>
                    <p className=''>Enter your details below</p>
                </div>
                <div className='flex flex-col gap-10'>
                    <form className='relative flex flex-col gap-10'>
                        <div>
                            <input type="text" className='h-8 outline-none border-none border-b-2 ' placeholder='Name' />
                            <div className='absolute border border-solid border-[#a2a6b1] w-full h-0' />
                        </div>
                        <div>
                            <input type="text" className='h-8 outline-none border-none border-b-2' placeholder='Email or Phone Number' />
                            <div className='absolute border border-solid border-[#a2a6b1] w-full h-0' />
                        </div>
                        <div>
                            <input type="text" className='h-8 outline-none border-none border-b-2' placeholder='Password' />
                            <div className='absolute border border-solid border-[#a2a6b1] w-full h-0' />
                        </div>
                    </form>
                    <div>

                        <button className='h-[56px] w-full bg-[#DB4444] text-white rounded text-[16px] font-medium flex items-center justify-center mb-4'>Create Account</button>
                        <div className='flex flex-col justify-between h-[116px] w-full'>
                            <button className='h-[56px] rounded bg-transparent border border-[#CCCCCC] text-[16px] flex items-center justify-center'>
                                <div className='flex gap-4'>
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_35803_3336)">
                                            <path d="M23.766 12.7764C23.766 11.9607 23.6999 11.1406 23.5588 10.3381H12.24V14.9591H18.7217C18.4528 16.4494 17.5885 17.7678 16.323 18.6056V21.6039H20.19C22.4608 19.5139 23.766 16.4274 23.766 12.7764Z" fill="#4285F4" />
                                            <path d="M12.2401 24.5008C15.4766 24.5008 18.2059 23.4382 20.1945 21.6039L16.3276 18.6055C15.2517 19.3375 13.8627 19.752 12.2445 19.752C9.11388 19.752 6.45946 17.6399 5.50705 14.8003H1.5166V17.8912C3.55371 21.9434 7.7029 24.5008 12.2401 24.5008Z" fill="#34A853" />
                                            <path d="M5.50253 14.8003C4.99987 13.3099 4.99987 11.6961 5.50253 10.2057V7.11481H1.51649C-0.18551 10.5056 -0.18551 14.5004 1.51649 17.8912L5.50253 14.8003Z" fill="#FBBC04" />
                                            <path d="M12.2401 5.24966C13.9509 5.2232 15.6044 5.86697 16.8434 7.04867L20.2695 3.62262C18.1001 1.5855 15.2208 0.465534 12.2401 0.500809C7.7029 0.500809 3.55371 3.05822 1.5166 7.11481L5.50264 10.2058C6.45064 7.36173 9.10947 5.24966 12.2401 5.24966Z" fill="#EA4335" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_35803_3336">
                                                <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Sign up with Google
                                </div>
                            </button>
                            <div className='flex gap-4 self-center'>
                                <p className='text-[16px]'>Already have account?</p>
                                <p className='underline underline-offset-[6px]'>Log in</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignINPage