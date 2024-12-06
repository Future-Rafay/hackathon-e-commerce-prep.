import React from 'react'

const LoginPage = () => {
    return (
        <div className='w-[1305px] h-[781px] mb-[140px] mt-[60px] flex gap-32'>
            <img src="/images/LoginPageImage.png" alt="LoginPageImage" className='w-[805px] h-full' />
            <div className='flex flex-col my-auto w-[371px] h-[326px] gap-12'>
                <div className='flex flex-col gap-6'>
                    <h1 className='font-Inter text-[36px] font-medium'>Log in to Exclusive</h1>
                    <p className=''>Enter your details below</p>
                </div>
                <div className='flex flex-col gap-10'>
                    <form className='relative flex flex-col gap-10'>
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
                        <div className='flex items-center justify-between'>
                            <button className='h-[56px] w-[143px] bg-[#DB4444] text-white rounded text-[16px] font-medium flex items-center justify-center'>Log In</button>
                            <p className='text-[16px] text-[#DB4444]'>Forget Password?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage