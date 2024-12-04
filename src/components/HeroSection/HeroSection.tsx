import React from 'react'
import HeroLeft from './HeroLeft';
import { Separator } from '../ui/separator';
import HeroRight from './HeroRight';

const HeroSection = () => {
  return (
    <div className=''>
        <HeroLeft />
        <Separator orientation='vertical' />
        <HeroRight />
    </div>
  )
}

export default HeroSection;