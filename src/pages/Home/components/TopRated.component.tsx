import { Chip, Pagination } from '@mantine/core'
import { memo } from 'react'
import { MovieTypeEnum } from '../../../types/home'
import { useTopRated } from '../hooks/TopRated.hook'
import { CardGrid } from '../../../components/Card/CardGrid'
import InfiniteScroll from 'react-infinite-scroll-component'

export const TopRated = memo(() => {
  const {
    selectedPopular,
    setSelectedPopular,
    dataTopRated,
    setDataTopRated,
    isLoading,
    onChangePagination,
    pages,
    maxPage,
  } = useTopRated()
  return (
    <div className="px-8">
      <div className="flex md:flex-row flex-col  md:gap-5  mt-8 mb-4 items-center">
        <h2 className="font-semibold text-3xl ">Top Rated</h2>
        <div className="flex flex-row gap-2 mt-3 items-center">
          <Chip.Group
            value={selectedPopular}
            onChange={(value) => {
              setDataTopRated(undefined)
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

      <div className="grid md:grid-cols-6 sm:grid-cols-4 xl:grid-cols-8 grid-cols-2  w-full xl:gap-6 md:gap-4 sm:gap-2 gap-2">
        {isLoading
          ? Array.from(Array(20).keys())?.map((item) => (
              <CardGrid
                item={undefined}
                isLoading={isLoading}
                type={selectedPopular}
              />
            ))
          : dataTopRated?.data?.map((item: any) => (
              <CardGrid
                item={item}
                isLoading={isLoading}
                type={selectedPopular}
              />
            ))}
      </div>
      <div className="flex flex-row justify-center  pb-5 pt-2">
        <Pagination
          total={maxPage}
          value={pages}
          onChange={onChangePagination}
          color="black"
          autoContrast
          boundaries={3}
        />
      </div>
    </div>
  )
})
