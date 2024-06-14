import { useCallback, useEffect, useMemo, useState } from 'react'
import { MovieTypeEnum } from '../../../types/home'
import { useLocation, useParams } from 'react-router-dom'
import { getDetail, getTopRated } from '../../../network/api'

export const useDetail = () => {
  const { id } = useParams()
  const location = useLocation()
  const [data, setData] = useState<any>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const type = useMemo(() => {
    if (location?.pathname?.includes(MovieTypeEnum.MOVIE)) {
      return MovieTypeEnum.MOVIE
    }
    return MovieTypeEnum.TV
  }, [location.pathname])

  const fetchDetail = useCallback(() => {
    setIsLoading(true)
    getDetail({ type, id })
      .then((result) => {
        setData(result)
      })
      .finally(() => setIsLoading(false))
  }, [type, id])

  useEffect(() => {
    if (!data) {
      fetchDetail()
    }
  }, [type, id, data])

  return { type, id, data, isLoading }
}
