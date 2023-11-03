import Link from "next/link";

const ContactsCard = ()=>{
    return(
        <div className="justify-center place-items-center lg:w-[500px] bg-white shadow-lg rounded-md h-[400px] mx-auto mt-[40px] px-6 py-6">
        <h1 className="text-gray-700 text-lg">Contacts</h1>
        <div className="flex flex-col gap-y-3 mt-[10px]">
            <p className="text-gray-700 text-base">Email:</p>
            <p className="text-gray-700 text-sm underline"><Link href="mailto:jan.elnas@gmail.com" className="hover:text-teal-500 text-gray-700">jan.elnas@gmail.com</Link></p>
            <p className="text-gray-700 text-base">LinkedIn:</p>
            <p className="text-gray-700 text-sm underline"><Link href="https://linkedin.com/in/jan-elnas-796b27b3/" className="hover:text-teal-500 text-gray-700">https://linkedin.com/in/jan-elnas-796b27b3/</Link></p>
            <p className="text-gray-700 text-base">Github:</p>
            <p className="text-gray-700 text-sm underline"><Link href="https://github.com/jbElmax" className="hover:text-teal-500 text-gray-700">https://github.com/jbElmax</Link></p>
        </div>

        </div>
    )
}
export default ContactsCard;