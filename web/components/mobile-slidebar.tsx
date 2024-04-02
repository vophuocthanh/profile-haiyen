import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { AlignRight } from 'lucide-react';
import Link from 'next/link';

const SHEET_SIDES = ['left'] as const;

type MobilePage = (typeof SHEET_SIDES)[number];

interface Props {
  className?: string;
}

export function MobilePage({ className }: Props) {
  return (
    <div className='grid grid-cols-2 gap-2'>
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <AlignRight />
          </SheetTrigger>
          <SheetContent side={side} className='flex flex-col gap-10 pt-10 w-56'>
            <Link
              href='/blog'
              className='hover:text-green-400 hover:underline text-3xl font-bold'
            >
              Blogs
            </Link>
            {/* <Link
              href='/project'
              className='hover:text-green-400 hover:underline text-3xl font-bold'
            >
              Projects
            </Link> */}
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
