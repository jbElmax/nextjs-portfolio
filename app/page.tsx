import Image from 'next/image'
import Link from 'next/link'
import DesignImg from '../public/design.png';
import FrontendImg from '../public/frontend.png';
import BackEndImg from '../public/backend.png';
import DevelopImg from '../public/develop.png';

export default function Home() {
  return (
    <div className='flex lg:flex-row flex-col lg:justify-between mt-[30px]'>
     
        <div className='w-[350px] lg:w-[560px] xl:w-[600px] px-2 items-center flex flex-col lg:mr-[10px] mx-auto lg:mx-8 xl:mx-20'>
          <p className='leading-loose text-justify'>
            <span className='text-xl'>I am an accomplished software developer with over 8 years of experience in a diverse range of technologies.</span> My skills encompass WinForms, ASP.NET (both Web Forms and Core), jQuery, Android Java, and the modern web development stack, including React, Next.js, and Tailwind CSS.

            Throughout my career, I have taken pride in crafting software solutions that are not only highly functional but also intuitively designed for a seamless user experience. 

            If you are looking for a software developer who can turn your vision into reality while ensuring exceptional performance and user satisfaction, I am here to make it happen.

            Let us team up and bring your software projects to life!
          </p>
          <button className='rounded border border-gray-700 px-2 py-2 mt-[15px]'>{"Let's Talk"}</button>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2  gap-4 lg:gap-6 lg:mb-[15px] mt-[20px] lg:mt-0 mx-auto lg:mx-8 xl:mx-20 items-center'>
         
            <Image src={DesignImg} alt='design image' className=' w-[278px] h-[261px] object-cover rounded'/>
        
          
            <Image src={FrontendImg} alt='frontend image' className=' w-[278px] h-[261px] object-cover rounded'/>
          
         
            <Image src={FrontendImg} alt='backend image' className=' w-[278px] h-[261px] object-cover rounded'/>
         
         
            <Image src={FrontendImg} alt='frontend image' className=' w-[278px] h-[261px] object-cover rounded'/>
         
        </div>


      </div>
  
    
  )
}
