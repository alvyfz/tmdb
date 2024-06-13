import { useCallback, useEffect, useState } from 'react'
import { MovieTypeEnum } from '../../../types/home'
import { getPopular } from '../../../network/api'

export const useTopRated = () => {
  const [selectedPopular, setSelectedPopular] = useState<MovieTypeEnum>(
    MovieTypeEnum.MOVIE
  )

  const [dataTopRated, setDataTopRated] = useState<any>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [pages, setPages] = useState<Number>(1)

  const fetchTopRated = useCallback(
    ({ page }: { page?: number }) => {
      setIsLoading(true)
      getPopular({ page: page, type: selectedPopular })
        .then((result) => {
          setDataTopRated({
            data: result?.results,
            maxPage: result?.total_pages,
          })
        })
        .finally(() => setIsLoading(false))
    },

    [selectedPopular, dataTopRated]
  )

  useEffect(() => {
    if (!dataTopRated) {
      fetchTopRated({ page: 1 })
    }
  }, [selectedPopular])

  const onReachEnd = useCallback(() => {
    console.log('fetch more')
    if (
      !isLoading &&
      !!dataTopRated &&
      dataTopRated?.page <= dataTopRated?.maxPage
    ) {
      fetchTopRated({})
    }
  }, [dataTopRated, isLoading, fetchTopRated])

  const onChangePagination = (value: number) => {
    setDataTopRated(undefined)
    setPages(value)
    fetchTopRated({ page: value })
  }

  return {
    selectedPopular,
    setSelectedPopular,
    dataTopRated,
    onReachEnd,
    setDataTopRated,
    isLoading,
    onChangePagination,
    pages,
  }
}
