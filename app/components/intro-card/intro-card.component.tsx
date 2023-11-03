import Link from "next/link";

const IntroCard = ()=>{
    return(
        <div className='w-[350px] lg:w-[600px] xl:w-[600px] px-2 items-center flex flex-col mx-auto lg:mx-4 xl:mx-20'>
        <p className='leading-loose text-justify text-gray-700'>
          <span className='text-xl'>I am an accomplished software developer with over 8 years of experience in a diverse range of technologies.</span> My skills encompass WinForms, ASP.NET (both Web Forms and Core), jQuery, Android Java, and the modern web development stack, including React, Next.js, and Tailwind CSS.

          Throughout my career, I have taken pride in crafting software solutions that are not only highly functional but also intuitively designed for a seamless user experience. 

          If you are looking for a software developer who can turn your vision into reality while ensuring exceptional performance and user satisfaction, I am here to make it happen.

          Let us team up and bring your software projects to life!
        </p>
        <button className='rounded border border-gray-700 px-2 py-2 mt-[15px] hover:bg-teal-100'><Link href="mailto:jan.elnas@gmail.com">{"Let's Talk"}</Link></button>
      </div>
    )
}

export default IntroCard;