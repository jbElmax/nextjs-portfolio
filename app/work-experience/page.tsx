import React from 'react';
import VbNetImg from '../../public/work-experience-images/vb-net.png';
import JavaImg from '../../public/work-experience-images/java.png';
import NetCoreImg from '../../public/work-experience-images/netcore.png';
import ReactImg from '../../public/work-experience-images/react.png';
import Image from 'next/image';

const WorkExperiencePage = () => {
  return (
    <div className='flex lg:flex-row flex-col lg:justify-between mt-[30px] pb-[60px] lg:pb-[10px]'>
      <div className='flex lg:flex-row flex-col place-items-center gap-x-24 xl:gap-x-40'>
        <div className='flex flex-col border-l-2 pl-[10px]'>
          <h1 className='text-gray-700 text-lg'>Work Experience</h1>
          <div className='flex place-items-center mt-[15px] gap-x-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
            </svg>
            <h2 className='text-gray-700'>VB.NET Developer</h2>
          </div>
          <p className='text-sm text-gray-700 mt-[5px] ml-[30px]'>CoDev (Zylun Philippines Inc.)</p>
          <p className='text-sm text-gray-700 mt-[5px] ml-[30px]'>July 2022 - Sept. 8, 2023</p>
          <ul className='list-disc ml-[45px] mt-[5px]'>
            <li className='text-sm text-gray-700'>under CoDev I worked as a contractor for Snap! Mobile for their legacy systems (WebForms)</li>
          </ul>

          <div className='flex place-items-center mt-[20px] gap-x-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
            </svg>
            <h2 className='text-gray-700'>Sorfware Engineer</h2>
          </div>
          <p className='text-sm text-gray-700 mt-[5px] ml-[30px]'>Nexen Innovation Technologies Inc.</p>
          <p className='text-sm text-gray-700 mt-[5px] ml-[30px]'>October 28, 2014 - July 15, 2022</p>

          <div className='flex place-items-center mt-[20px] gap-x-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>

            <h2 className='text-gray-700'>Projects</h2>
          </div>
          <ul className='list-disc ml-[45px] mt-[5px]'>
            <li className='text-sm text-gray-700'>Members Profiling System with Open Street Map integration</li>
            <li className='text-sm text-gray-700 mt-[5px]'>Members GPS Locator App</li>
            <li className='text-sm text-gray-700 mt-[5px]'>Open Street Map Local Server</li>
            <li className='text-sm text-gray-700 mt-[5px]'>xNotify SMS Notification App</li>
          </ul>
          <div className='flex place-items-center mt-[20px] gap-x-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>

            <h2 className='text-gray-700'>Personal Projects</h2>        
          </div>
          <ul className='list-disc ml-[45px] mt-[5px]'>
            <li className='text-sm text-gray-700'>Lendr (Money Lending App)</li>
            <li className='text-sm text-gray-700 mt-[5px]'>ToDoList App</li>
            <li className='text-sm text-gray-700 mt-[5px]'>Portfolio Site</li>
          </ul>
        </div>
        {/* ------images container-------- */}
        <div className='flex flex-col gap-y-4'>
          <Image src={VbNetImg} className='w-[150px] h-[100px] object-cover' alt='vb.net image'/>
          <Image src={JavaImg} className='w-[150px] h-[80px] object-cover' alt='vb.net image'/>
          <Image src={NetCoreImg} className='w-[120px] h-[100px] object-fit' alt='vb.net image'/>
          <Image src={ReactImg} className='w-[100px] h-[100px] object-cover' alt='vb.net image'/>
        </div>
      </div>
    </div>
  )
}

export default WorkExperiencePage;