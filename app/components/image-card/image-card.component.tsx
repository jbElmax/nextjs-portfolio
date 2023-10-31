import Image, { StaticImageData } from "next/image";
import { FunctionComponent } from "react";

interface ImageProp{
    imgSrc:StaticImageData,
    label:string,
    altLabel:string
}

const ImageCard:React.FC<ImageProp>=({imgSrc,label,altLabel})=>
{
    return(
        <div className="flex flex-col">
            <Image src={imgSrc} alt={altLabel} className=' w-[278px] h-[220px] object-cover rounded'/>
            <label className="text-gray-700 text-center">{label}</label>
        </div>
    )
}

export default ImageCard;