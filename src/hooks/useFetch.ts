import { useEffect, useState } from 'react'

export const useFetch = (
  callback: (params?: any) => Promise<any>,
  setState: (data: any) => void,
  isManual?: boolean
) => {
  const [data, setData] = useState<any>(undefined)
  const [error, setError] = useState<any>(undefined)
  const [loading, setLoading] = useState<boolean>(false)

  const refreshData = (params?: any) => {
    setLoading(true)
    setError(undefined)
    callback(params)
      .then((result) => {
        setData(result)
        setState(result)
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    if (!data && !isManual) {
      refreshData()
    }
  }, [])

  return {
    refreshData,
    error,
    loading,
  }
}
