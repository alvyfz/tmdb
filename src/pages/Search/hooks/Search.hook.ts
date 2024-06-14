import { useCallback, useEffect, useState } from 'react'
import { getSearchMulti } from '../../../network/api'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

export const useSearch = () => {
  let [searchParams, setSearchParams] = useSearchParams()
  const searchValue = searchParams.get('q')
  const [data, setData] = useState<any>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [pages, setPages] = useState<Number>(1)
  const maxPage = 500

  const fetchData = useCallback(
    ({ page }: { page?: number }) => {
      setIsLoading(true)
      getSearchMulti({ page: page, search: searchValue })
        .then((result) => {
          setData({
            data: result?.results,
            maxPage: result?.total_pages,
          })
        })
        .finally(() => setIsLoading(false))
    },

    [searchValue]
  )

  useEffect(() => {
    fetchData({ page: 1 })
  }, [searchValue])

  const onChangePagination = (value: number) => {
    setData(undefined)
    setPages(value)
    fetchData({ page: value })
  }

  return {
    data,
    setData,
    isLoading,
    onChangePagination,
    pages,
    maxPage,
  }
}
