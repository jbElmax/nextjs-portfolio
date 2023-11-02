import DesignImg from '../public/design.png';
import FrontendImg from '../public/frontend.png';
import BackEndImg from '../public/backend.png';
import DevelopImg from '../public/develop.png';

import IntroCard from './components/intro-card/intro-card.component';
import ImageCardProp from './components/image-container/type/image-card-type';
import ImageContainer from './components/image-container/image-container.component';


const imageCardArray:ImageCardProp[] = [
  {
    imageData:DesignImg,
    altLabel:'design image',
    imageLabel:'Design',
    cardClass:'w-[250px] h-[200px] object-cover'
  },
  {
    imageData:FrontendImg,
    altLabel:'frontend image',
    imageLabel:'Front-end',
    cardClass:'w-[250px] h-[200px] object-cover'
  },
  {
    imageData:BackEndImg,
    altLabel:'back-end image',
    imageLabel:'Back-end',
    cardClass:'w-[250px] h-[200px] object-cover'
  },
  {
    imageData:DevelopImg,
    altLabel:'develop image',
    imageLabel:'Develop',
    cardClass:'w-[250px] h-[200px] object-cover'
  }

]

export default function Home() {
  return (
    <div className='flex lg:flex-row flex-col lg:justify-between mt-[30px] pb-[60px] lg:pb-[10px]'>
     
        <IntroCard/>

        <ImageContainer data={imageCardArray} className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 lg:pb-[20px] mt-[20px] lg:-mt-4 mx-auto lg:mx-4 xl:mx-20 items-center'/>

      </div>
   
  )
}
