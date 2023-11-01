import ImageCard from "../image-card/image-card.component";
import ImageCardProp from "./type/image-card-type";

interface Props{
    data:ImageCardProp[]
}

const ImageContainer:React.FC<Props> = ({data})=>{
    return(
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 lg:pb-[20px] mt-[20px] lg:-mt-4 mx-auto lg:mx-4 xl:mx-20 items-center'>
        {data.map((cardData,index)=>{
            return(
                <ImageCard key={index} imgSrc={cardData.imageData} altLabel={cardData.altLabel} label={cardData.imageLabel} />
            )
        })}    
    
    </div>
    )
}

export default ImageContainer;