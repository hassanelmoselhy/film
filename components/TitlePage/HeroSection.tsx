import Image from 'next/image';
import { Button } from '@/components/ui/button';
import ReadyTooltip from '@/components/ui/ready-tooltip';
import { FaPlay, FaPlus } from "react-icons/fa6";
import { SlVolume2 } from "react-icons/sl";
import { GoCheckCircle } from "react-icons/go";
import { PiFilmSlateDuotone } from "react-icons/pi";
import { Series } from '@/types/title';

interface HeroProps {
  series: Series;
  t: (key: string) => string;
  imageLoading: boolean;
}

export const Hero = ({ series, t, imageLoading }: HeroProps) => {
  return (
    <section className='w-full h-[835px] mt-5 rounded-lg overflow-hidden flex justify-center items-center relative'>
      <div className='flex flex-col justify-end items-center text-white text-center pb-10 inset-0 bg-gradient-to-t dark:from-black-8 from-white via-transparent to-transparent w-full h-full absolute z-10'>
        <div>
          <h1 className='text-4xl font-bold dark:text-white text-black-6'>{series.name}</h1>
          <p className='text-lg dark:text-gray-60 text-black-12'>{series.tagline ? series.tagline : series.overview}</p>
        </div>
        <div className='flex justify-center items-center gap-2 w-full h-16 bg-transparent flex-wrap'>
          <ReadyTooltip title={t('play')}>
            <Button className='text-white text-2xl font-bold bg-red-45 hover:bg-red-50 transition-colors duration-400' size="lg">
              <FaPlay /> {t('title')}
            </Button>
          </ReadyTooltip>

          <div className='flex justify-center items-center gap-2'>
            <ReadyTooltip title={t('watchlist')}>
              <Button size='lgIcon'><FaPlus /></Button>
            </ReadyTooltip>
            <ReadyTooltip title={t('trailer')}>
              <Button size='lgIcon'><PiFilmSlateDuotone /></Button>
            </ReadyTooltip>
            <ReadyTooltip title={t('themeSong')}>
              <Button size='lgIcon'><SlVolume2 /></Button>
            </ReadyTooltip>
            <ReadyTooltip title={t('watched')}>
              <Button size='lgIcon'><GoCheckCircle /></Button>
            </ReadyTooltip>
          </div>
        </div>
      </div>
      {!imageLoading && (
        <Image
          src={`https://image.tmdb.org/t/p/original${series.backdrop_path}`}
          alt={series.original_title}
          className='w-full h-full object-cover'
          height={835}
          width={1800}
        />
      )}
    </section>
  );
};
