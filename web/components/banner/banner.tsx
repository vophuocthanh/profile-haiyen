'use client';

import { useState, useEffect } from 'react';
import headerImg from '../../public/anh-6.jpg';
import Image from 'next/image';
import SectionInViewUp from '../SectionInViewUp';
import { FaTiktok } from 'react-icons/fa';
import { Facebook, Github, Instagram, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ['siuu cute', 'Marketing'];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className='max-w-6xl mx-auto'>
      <SectionInViewUp className='sm:flex flex-col sm:flex-row justify-center items-center my-10 sm:my-24'>
        <div className='sm:w-3/5 space-y-4'>
          <span className='font-bold  tracking-wider px-4 py-2 bg-gradient-to-b from-blue-400 to-pink-600 text-white sm:text-2xl text-xl rounded inline-block'>
            Portfolio của bạn Hải Yến 😊
          </span>
          <h1 className='my-4 sm:text-5xl text-3xl font-bold'>
            {`Hi! I'm Hải Yến`}{' '}
            <span
              className='txt-rotate'
              data-period='1000'
              data-rotate='[ "siuu cute", "Marketing"]'
            >
              <span className='text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-pink-600'>
                {text}
              </span>
            </span>
          </h1>
          <p className='sm:w-[67%] text-2xl font-medium'>
            Cuộc sống hàng ngày của <span className='font-bold'>Hải Yến</span>{' '}
            là một hành trình đầy màu sắc và ý nghĩa =)))). Bắt đầu mỗi buổi
            sáng bằng việc dậy thật sớm nếu có lịch học, và dậy thật muộn nếu
            không có lịch học sáng. Đến tối thì cô ấy học bài hoặc xem review
            phim 🤣. Cô ấy rất lười uống sữa và hơi ốm chút xíu 😢.
          </p>
          <div className='flex gap-4 items-center'>
            <Link
              href='https://www.facebook.com/profile.php?id=100074879646576'
              target='_blank'
              className=' bg-blue-500 p-2 rounded-full hover:scale-110'
            >
              <Facebook className='text-white'></Facebook>
            </Link>
            <Link
              href='https://www.tiktok.com/@eyniah_'
              target='_blank'
              className=' bg-black p-2 rounded-full hover:scale-110'
            >
              <FaTiktok className='text-white text-2xl'></FaTiktok>
            </Link>
            <Link
              href='https://www.instagram.com/eyniah_/'
              target='_blank'
              className='bg-gradient-to-r from-purple-700 via-red-500 to-yellow-300 p-2 rounded-full hover:scale-110'
            >
              <Instagram className='text-white'></Instagram>
            </Link>
            {/* <Link
              href='https://www.linkedin.com/in/v%C3%B5-ph%C6%B0%E1%BB%9Bc-th%E1%BA%A1nh-747813233/'
              target='_blank'
              className=' bg-blue-800 p-2 rounded-full hover:scale-110'
            >
              <Linkedin className='text-white'></Linkedin>
            </Link> */}
          </div>
        </div>
        <div className='sm:w-[30rem] mt-16 sm:mt-0'>
          <Image
            src={headerImg}
            alt='Header Img'
            className='border rounded-full w-full h-full object-cover'
          />
        </div>
      </SectionInViewUp>
    </section>
  );
};
