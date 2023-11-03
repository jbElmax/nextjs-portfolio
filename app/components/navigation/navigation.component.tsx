'use client'
import Link from "next/link";
import ProfileImage from "../../../public/profile.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navigation = ()=>{
    const pathname = usePathname();
    return(
        <div className="flex lg:flex-row flex-col lg:justify-between lg:px-[163px] px-[20px] lg:mt-0">
            <div className="flex place-items-center gap-x-5">
                <Image src={ProfileImage} alt="profile photo" className="w-[60px] h-[60px] rounded-full"/>
                <h1 className="text-gray-700 text-xl">Jan Elnas</h1>
            </div>
            <div className="flex lg:flex-row flex-col lg:gap-x-6 gap-y-2 place-items-center mt-[10px] lg:mt-0">
                <Link href="/" className={` hover:text-teal-500  ${pathname ==='/'?'border-b-2 text-teal-500':'text-gray-700'}`}>Home</Link>
                <Link href="/work-experience" className={` hover:text-teal-500  ${pathname ==='/work-experience'?'border-b-2 text-teal-500':'text-gray-700'}`}>Work Experience & Projects</Link>
                <Link href="/skills" className={` hover:text-teal-500  ${pathname ==='/skills'?'border-b-2 text-teal-500':'text-gray-700'}`}>Skills</Link>
                <Link href="" className=" hover:text-black text-gray-700">Education</Link>
                <Link href="" className=" hover:text-black text-gray-700">Contacts</Link>
            </div>
        </div>
    )
}

export default Navigation;