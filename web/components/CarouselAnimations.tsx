'use client';
import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Anh1 from '@/public/anh-1.jpg';
import Anh2 from '@/public/anh-2.jpg';
import Anh3 from '@/public/anh-3.jpg';
import Anh4 from '@/public/anh-4.jpg';
import Anh5 from '@/public/anh-5.jpg';
import Anh6 from '@/public/anh-6.jpg';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Image from 'next/image';

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, Animation: 'slide' })
  );
  const images = [Anh1, Anh2, Anh3, Anh4, Anh5, Anh6];
  return (
    <Carousel
      plugins={[plugin.current]}
      className='w-full'
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((_, index) => (
          <CarouselItem key={index}>
            <div className='relative top-0'>
              <Card>
                <CardContent className='flex items-center justify-center'>
                  <Image
                    src={images[index]}
                    alt=''
                    className='object-cover sm:w-full sm:h-[36rem] w-full h-full'
                    width={500}
                    height={500}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
