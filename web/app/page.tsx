import { Banner } from '@/components/banner/banner';
import Blog from '@/components/blog/Blog';
import { CarouselPlugin } from '@/components/CarouselAnimations';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import Introduction from '@/components/introduction/introduction';

export default function Home() {
  return (
    <main className='w-full h-full sm:px-0 px-4'>
      <Header />
      <Banner />
      <div className='max-w-6xl mx-auto mb-10'>
        <CarouselPlugin />
      </div>
      <Introduction />
      <Blog />
      <Footer />
    </main>
  );
}
