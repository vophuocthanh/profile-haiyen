import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import one from '../../../../public/project-1.jpg';
import two from '../../../../public/project-2.jpg';
import three from '../../../../public/project-3.jpg';
import Footer from '@/components/footer/footer';
import SectionInViewUp from '@/components/SectionInViewUp';

export default function BlogPage() {
  return (
    <SectionInViewUp className='max-w-6xl mx-auto mt-10'>
      <h1 className='text-3xl items-center font-bold flex justify-center'>
        Blog List
      </h1>
      <div className='w-full flex items-center mt-10 gap-8 border-b border-gray-800 pb-20 flex-wrap justify-center'>
        <Link
          href='/blog/1'
          className='w-[20rem] h-[24rem] rounded-bl-md rounded-br-md space-y-4 shadow-md hover:scale-105 border'
        >
          <Image src={one} alt='banner' className='w-full h-80 object-cover ' />
          <div className='flex flex-col items-center justify-items-start'>
            <h1 className='font-bold'>Blog 1</h1>
            {/* <p className='text-sm'>Dec 20, 2022 - Mar 18, 2023</p> */}
          </div>
          {/* <p className='p-2 flex items-center text-center font-medium'>
            This blog is used to share stories in <br /> life, connect people
            together with technology #ReactJs, #Firebase, #Tailwind css, #SCSS,
            #API, #Axios
          </p> */}
        </Link>
        <Link
          href='/blog/2'
          className='w-[20rem] h-[24rem] rounded-bl-md rounded-br-md space-y-4 shadow-md hover:scale-105 border'
        >
          <Image src={two} alt='banner' className='w-full h-80 object-cover ' />
          <div className='flex flex-col items-center justify-items-start'>
            <h1 className='font-bold'>Blog 2</h1>
            {/* <p className='text-sm'>Dec 20, 2022 - Mar 18, 2023</p> */}
          </div>
          {/* <p className='p-2 flex items-center text-center font-medium'>
            This blog is used to share stories in <br /> life, connect people
            together with technology #ReactJs, #Firebase, #Tailwind css, #SCSS,
            #API, #Axios
          </p> */}
        </Link>
        <Link
          href='/'
          className='w-[20rem] h-[24rem] rounded-bl-md rounded-br-md space-y-4 shadow-md hover:scale-105 border'
        >
          <Image
            src={three}
            alt='banner'
            className='w-full h-80 object-cover '
          />
          <div className='flex flex-col items-center justify-items-start'>
            <h1 className='font-bold'>Blog 3</h1>
            {/* <p className='text-sm'>Dec 20, 2022 - Mar 18, 2023</p> */}
          </div>
          {/* <p className='p-2 flex items-center text-center font-medium'>
            This blog is used to share stories in <br /> life, connect people
            together with technology #ReactJs, #Firebase, #Tailwind css, #SCSS,
            #API, #Axios
          </p> */}
        </Link>
      </div>
      <Footer />
    </SectionInViewUp>
  );
}
