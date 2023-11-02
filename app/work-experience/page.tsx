import React from 'react';
import VbNetImg from '../../public/work-experience-images/vb-net.png';
import JavaImg from '../../public/work-experience-images/java.png';
import NetCoreImg from '../../public/work-experience-images/netcore.png';
import ReactImg from '../../public/work-experience-images/react.png';
import Image from 'next/image';
import ImageCardProp from '../components/image-container/type/image-card-type';
import ImageContainer from '../components/image-container/image-container.component';
import WorkExperienceCard from '../components/work-experience-card/work-experience-card.component';

const workImages:ImageCardProp[] = [
  {
    imageData:VbNetImg,
    altLabel:'vbnet image',
    imageLabel:'',
    cardClass:'w-[150px] h-[100px] object-cover'
  },
  {
    imageData:JavaImg,
    altLabel:'android java image',
    imageLabel:'',
    cardClass:'w-[150px] h-[80px] object-cover'
  },
  {
    imageData:NetCoreImg,
    altLabel:'.net core image',
    imageLabel:'',
    cardClass:'w-[120px] h-[100px] object-fit'
  },
  {
    imageData:ReactImg,
    altLabel:'react image',
    imageLabel:'',
    cardClass:'w-[100px] h-[100px] object-cover'
  },
]
const WorkExperiencePage = () => {
  return (
    <div className='flex lg:flex-row flex-col lg:justify-between mt-[30px] pb-[60px] lg:pb-[10px]'>
      <div className='flex lg:flex-row flex-col place-items-center gap-x-24 xl:gap-x-40 xl:mx-auto'>

        <WorkExperienceCard />

        <ImageContainer data={workImages} className='flex flex-col gap-y-4'/>

      </div>
    </div>
  )
}

export default WorkExperiencePage;