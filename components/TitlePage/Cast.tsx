import OpenTitleInfoCard from '@/components/OpenTitleInfoCard';
import { Series, Cast as CastType, SliderSettings } from '@/types/title';
import dynamic from 'next/dynamic';

const HorizontalCarousel = dynamic(() => import('@/components/carousel'), {
  loading: () => <div className="animate-pulse bg-black-20 h-32 rounded-lg" />
});

const ActorCard = dynamic(() => import('@/components/ActorCard'), {
  loading: () => <div className="animate-pulse bg-black-20 h-24 w-full rounded-lg" />
});

interface CastProps {
  series: Series;
  cast: CastType;
  t: (key: string) => string;
  sliderSettings: { cast: SliderSettings };
}

export const Cast = ({ series, cast, t, sliderSettings }: CastProps) => {
  return (
    <OpenTitleInfoCard className='mb-8' title={series.genres && series.genres.some(genre => genre.id === 16) ? t('voiceActors') : t('cast')}>
      <div className='overflow-x-clip h-[8rem]'>
      <HorizontalCarousel
  navStyle='style1'
  data={cast}
  settings={sliderSettings.cast}
  ItemComponent={({ item }) => {
    const castItem = item as typeof cast[number]; // نخبر تايب سكريبت أن نوع العنصر هو عنصر من المصفوفة `cast`

    return (
      <ActorCard
        actorName={castItem.name}
        credit_id={castItem.credit_id}
        profile_path={castItem.profile_path}

        gender={castItem.gender}
      />
    );
  }}
/>

      </div>
    </OpenTitleInfoCard>
  );
};