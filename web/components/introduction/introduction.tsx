import Image from 'next/image';
import FrontendImg from '../../public/frontend.png';
import BackendImg from '../../public/backend.png';
import SectionInViewRight from '../SectionInVewRight';

export default function Introduction() {
  return (
    <SectionInViewRight className='max-w-6xl mx-auto space-y-4'>
      <h1 className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-pink-600'>
        Introduction
      </h1>
      <span className='sm:text-6xl text-2xl font-bold'>Overview...</span>
      <p className='sm:w-3/5 w-full'>
        Tôi hiện nay là 21 tuổi, đang học tập và làm việc tại thành phố Đà Nẵng.
        Tôi yêu sự yên tĩnh, thích đi chơi với bạn bè, tôi sống nội tâm và hay
        overthingking, tôi không muốn công khai trên mạng xã hội (lowkey).
      </p>
      {/* <div className='flex sm:flex-row sm:gap-10 gap-8 flex-col items-center'>
        <SectionInViewRight className='w-64 h-80 rounded border p-4 shadow-md space-y-8'>
          <Image
            src={FrontendImg}
            alt='banner'
            className='w-40 h-40 mx-auto mt-2'
          />
          <span className='flex justify-center text-xl font-bold text-center'>
            Frontend <br /> Developer
          </span>
        </SectionInViewRight>
        <SectionInViewRight className='w-64 h-80 rounded border shadow-md p-4 space-y-8'>
          <Image
            src={BackendImg}
            alt='banner'
            className='w-40 h-40 mx-auto mt-2'
          />
          <span className='flex justify-center text-xl font-bold text-center'>
            Backend <br /> Developer
          </span>
        </SectionInViewRight>
      </div> */}
    </SectionInViewRight>
  );
}
