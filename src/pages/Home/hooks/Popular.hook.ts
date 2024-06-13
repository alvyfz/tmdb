import { useCallback, useEffect, useState } from 'react'
import { MovieTypeEnum } from '../../../types/home'
import { getPopular } from '../../../network/api'

export const usePopular = () => {
  const [selectedPopular, setSelectedPopular] = useState<MovieTypeEnum>(
    MovieTypeEnum.MOVIE
  )

  const [dataPopular, setDataPopular] = useState<any>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetchPopular = useCallback(
    ({ page }: { page?: number }) => {
      const pageNow = page ? page : dataPopular?.page || 1
      setIsLoading(true)
      getPopular({ page: pageNow, type: selectedPopular })
        .then((result) => {
          const tempData = dataPopular
            ? [...dataPopular?.data, ...result?.results]
            : result?.results

          setDataPopular({
            data: tempData,
            page: pageNow + 1,
            maxPage: result?.total_pages,
          })
        })
        .finally(() => setIsLoading(false))
    },

    [selectedPopular, dataPopular]
  )

  useEffect(() => {
    if (!dataPopular) {
      fetchPopular({ page: 1 })
    }
  }, [selectedPopular])

  const onReachEndSwiper = useCallback(() => {
    if (
      !isLoading &&
      !!dataPopular &&
      dataPopular?.page <= dataPopular?.maxPage
    ) {
      fetchPopular({})
    }
  }, [dataPopular, isLoading, fetchPopular])

  return {
    selectedPopular,
    setSelectedPopular,
    dataPopular,
    onReachEndSwiper,
    setDataPopular,
    isLoading,
  }
}
