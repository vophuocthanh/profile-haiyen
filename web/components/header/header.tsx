import Link from 'next/link';
import { ModeToggle } from '../mode-toggle';
import { MobilePage } from '../mobile-slidebar';

export default function Header() {
  const isProPlan = false;
  return (
    <div className='w-full border-b'>
      <div className='py-6 max-w-6xl mx-auto flex justify-between items-center '>
        <Link
          href='/'
          className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-pink-600'
        >
          Hải Yến
        </Link>
        <div className='flex gap-4 items-center'>
          <div className='text-2xl sm:flex hidden gap-4 font-medium'>
            <Link href='/blog' className='hover:text-green-400 hover:underline'>
              Blogs của bạn Hải Yến
            </Link>
            {/* <Link
              href='/project'
              className='hover:text-green-400 hover:underline'
            >
              Projects
            </Link>
            <Link
              href='https://drive.google.com/file/d/1-Ux8VpgPaRae_smxnRu0eMjgemret16N/view?usp=sharing'
              target='_blank'
              className='hover:text-green-400 hover:underline'
            >
              MyCV
            </Link> */}
          </div>
          <div className='sm:hidden'>
            <MobilePage />
          </div>
          <hr className='w-px h-8 bg-gray-300' />
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
