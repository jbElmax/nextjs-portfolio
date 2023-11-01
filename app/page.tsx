import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import DesignImg from '../public/design.png';
import FrontendImg from '../public/frontend.png';
import BackEndImg from '../public/backend.png';
import DevelopImg from '../public/develop.png';
import ImageCard from './components/image-card/image-card.component';
import IntroCard from './components/intro-card/intro-card.component';
import ImageCardProp from './components/image-container/type/image-card-type';
import ImageContainer from './components/image-container/image-container.component';


const imageCardArray:ImageCardProp[] = [
  {
    imageData:DesignImg,
    altLabel:'design image',
    imageLabel:'Design'
  },
  {
    imageData:FrontendImg,
    altLabel:'frontend image',
    imageLabel:'Front-end'
  },
  {
    imageData:BackEndImg,
    altLabel:'back-end image',
    imageLabel:'Back-end'
  },
  {
    imageData:DevelopImg,
    altLabel:'develop image',
    imageLabel:'Develop'
  }

]

export default function Home() {
  return (
    <div className='flex lg:flex-row flex-col lg:justify-between mt-[30px] pb-[60px] lg:pb-[10px]'>
     
        <IntroCard/>

        <ImageContainer data={imageCardArray}/>

      </div>
  
    
  )
}
