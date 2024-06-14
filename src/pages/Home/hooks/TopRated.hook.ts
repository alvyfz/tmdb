import { useCallback, useEffect, useState } from 'react'
import { MovieTypeEnum } from '../../../types/home'
import { getTopRated } from '../../../network/api'

export const useTopRated = () => {
  const [selectedPopular, setSelectedPopular] = useState<MovieTypeEnum>(
    MovieTypeEnum.MOVIE
  )

  const [dataTopRated, setDataTopRated] = useState<any>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [pages, setPages] = useState<Number>(1)
  const maxPage = dataTopRated?.maxPage || 1

  const fetchTopRated = useCallback(
    ({ page }: { page?: number }) => {
      setIsLoading(true)
      getTopRated({ page: page, type: selectedPopular })
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

  const onChangePagination = (value: number) => {
    setDataTopRated(undefined)
    setPages(value)
    fetchTopRated({ page: value })
  }

  return {
    selectedPopular,
    setSelectedPopular,
    dataTopRated,
    setDataTopRated,
    isLoading,
    onChangePagination,
    pages,
    maxPage,
  }
}
