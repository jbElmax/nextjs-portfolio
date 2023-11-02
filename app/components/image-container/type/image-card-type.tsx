import { StaticImageData } from "next/image";

interface ImageCardProp{
    imageData:StaticImageData,
    altLabel:string,
    imageLabel:string,
    cardClass:string
}

export default ImageCardProp;