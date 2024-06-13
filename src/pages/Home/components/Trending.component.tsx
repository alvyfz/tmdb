import { Chip, Group } from '@mantine/core'
import { memo } from 'react'
import { SwiperComponent } from '../../../components/Swiper/Swiper'
import { TrendingEnum } from '../../../types/home'
import { CardMovie } from '../../../components/Card/CardMovie'
import { useTrending } from '../hooks/Trending.hook'

export const Trending = memo(() => {
  const {
    selectedTrending,
    setSelectedTranding,
    dataTrending,
    onReachEndSwiperTrending,
    setDataTrending,
    isLoadingTrending,
  } = useTrending()
  return (
    <div className="px-8">
      <div className="flex flex-row  gap-5 mt-8 mb-4 items-center">
        <h2 className="font-semibold text-3xl ">Trending</h2>
        <div className="flex flex-row gap-2 mt-3 items-center">
          <Chip.Group
            value={selectedTrending}
            onChange={(value) => {
              setDataTrending(undefined)
              setSelectedTranding(value as TrendingEnum)
            }}
          >
            <Chip color="black" value={TrendingEnum.TODAY}>
              Today
            </Chip>
            <Chip color="black" value={TrendingEnum.WEEK}>
              This Week
            </Chip>
          </Chip.Group>
        </div>
      </div>
      <div className="h-[330px]">
        <SwiperComponent
          data={dataTrending?.data}
          renderItem={CardMovie}
          onReachEnd={onReachEndSwiperTrending}
          isLoading={isLoadingTrending && !dataTrending}
        />
      </div>
    </div>
  )
})
