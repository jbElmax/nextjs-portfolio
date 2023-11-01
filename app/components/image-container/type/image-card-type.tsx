import { StaticImageData } from "next/image";

interface ImageCardProp{
    imageData:StaticImageData,
    altLabel:string,
    imageLabel:string
}

export default ImageCardProp;