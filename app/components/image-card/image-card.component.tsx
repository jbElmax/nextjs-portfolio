import Image, { StaticImageData } from "next/image";
import ImageCardProp from "../image-container/type/image-card-type";
interface ImageProp{
    imageData:StaticImageData,
    altLabel:string,
    cardClass:string,
    imageLabel:string
}

const ImageCard:React.FC<ImageProp>=({imageData,altLabel,cardClass,imageLabel})=>
{
    return(
        <div className="flex flex-col">
            <Image src={imageData} alt={altLabel} className={cardClass}/>
            <label className="text-gray-700 text-center">{imageLabel}</label>
        </div>
    )
}

export default ImageCard;