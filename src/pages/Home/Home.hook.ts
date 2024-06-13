import { useCallback, useEffect, useState } from 'react'
import { TrendingEnum } from '../../types/home'
import { getTrendingDay, getTrendingWeek } from '../../network/api'

export const useHome = () => {
  const [selectedTrending, setSelectedTranding] = useState<TrendingEnum>(
    TrendingEnum.TODAY
  )

  const [dataTrending, setDataTrending] = useState<any>(undefined)
  const [isLoadingTrending, setIsLoadingTrending] = useState<boolean>(false)

  const fetchTrendingMovie = useCallback(
    ({ page }: { page?: number }) => {
      const pageNow = page ? page : dataTrending?.page || 1
      setIsLoadingTrending(true)
      if (selectedTrending === TrendingEnum.TODAY) {
        getTrendingDay({ page: pageNow })
          .then((result) => {
            const tempData = dataTrending
              ? [...dataTrending?.data, ...result?.results]
              : result?.results

            setDataTrending({
              data: tempData,
              page: pageNow + 1,
              maxPage: result?.total_pages,
            })
          })
          .finally(() => setIsLoadingTrending(false))
      } else {
        getTrendingWeek({ page: pageNow })
          .then((result) => {
            const tempData = dataTrending
              ? [...dataTrending?.data, ...result?.results]
              : result?.results

            setDataTrending({
              data: tempData,
              page: pageNow + 1,
              maxPage: result?.total_pages,
            })
          })
          .finally(() => setIsLoadingTrending(false))
      }
    },
    [selectedTrending, dataTrending]
  )

  useEffect(() => {
    if (!dataTrending) {
      fetchTrendingMovie({ page: 1 })
    }
  }, [selectedTrending])

  const onReachEndSwiperTrending = useCallback(() => {
    if (
      !isLoadingTrending &&
      !!dataTrending &&
      dataTrending?.page <= dataTrending?.maxPage
    ) {
      fetchTrendingMovie({})
    }
  }, [dataTrending, isLoadingTrending, fetchTrendingMovie])

  return {
    selectedTrending,
    setSelectedTranding,
    dataTrending,
    onReachEndSwiperTrending,
    setDataTrending,
  }
}
