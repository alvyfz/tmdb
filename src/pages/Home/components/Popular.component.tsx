import { Chip } from '@mantine/core'
import { memo } from 'react'
import { SwiperComponent } from '../../../components/Swiper/Swiper'
import { MovieTypeEnum, TrendingEnum } from '../../../types/home'
import { CardMovie } from '../../../components/Card/CardMovie'
import { usePopular } from '../hooks/Popular.hook'

export const Popular = memo(() => {
  const {
    selectedPopular,
    setSelectedPopular,
    dataPopular,
    onReachEndSwiper,
    setDataPopular,
    isLoading,
  } = usePopular()
  return (
    <div className="px-8">
      <div className="flex flex-row  gap-5 mt-8 mb-4 items-center">
        <h2 className="font-semibold text-3xl ">What's Popular</h2>
        <div className="flex flex-row gap-2 mt-3 items-center">
          <Chip.Group
            value={selectedPopular}
            onChange={(value) => {
              setDataPopular(undefined)
              setSelectedPopular(value as MovieTypeEnum)
            }}
          >
            <Chip color="black" value={MovieTypeEnum.MOVIE}>
              Movie
            </Chip>
            <Chip color="black" value={MovieTypeEnum.TV}>
              TV Series
            </Chip>
          </Chip.Group>
        </div>
      </div>
      <div className="h-[330px]">
        <SwiperComponent
          data={dataPopular?.data}
          renderItem={CardMovie}
          onReachEnd={onReachEndSwiper}
          isLoading={isLoading && !dataPopular}
        />
      </div>
    </div>
  )
})
