import ImageCard from "../image-card/image-card.component";
import ImageCardProp from "./type/image-card-type";

interface Props{
    data:ImageCardProp[],
    className:string
    
}

const ImageContainer:React.FC<Props> = ({data,className})=>{
   
    return(
        <div className={className}>
        {data.map((cardData,index)=>{
            return(
                <ImageCard key={index} imageData={cardData.imageData} altLabel={cardData.altLabel} cardClass={cardData.cardClass} imageLabel={cardData.imageLabel}/>
            )
        })}    
    
    </div>
    )
}

export default ImageContainer;