import { useSearchParams } from 'react-router-dom'
import DefaultLayout from '../../layout/DefaultLayout'
import { useSearch } from './hooks/Search.hook'
import { CardGrid } from '../../components/Card/CardGrid'
import { Pagination } from '@mantine/core'

export const Search = () => {
  let [searchParams, setSearchParams] = useSearchParams()
  const searchValue = searchParams.get('q')
  const { data, setData, isLoading, onChangePagination, pages, maxPage } =
    useSearch()
  return (
    <DefaultLayout>
      <div className="px-8">
        <div className="flex flex-row  gap-5 mt-8 mb-4 items-center">
          <h2 className="font-semibold text-3xl ">Search Result</h2>
        </div>
        {!isLoading && !data?.data?.length ? (
          <h2 className="font-semibold text-3xl text-center pt-32 underline ">
            Data not found with keyword {searchValue}
          </h2>
        ) : (
          <>
            <div className="grid md:grid-cols-6 sm:grid-cols-4 xl:grid-cols-8 grid-cols-2  w-full xl:gap-6 md:gap-4 sm:gap-2 gap-2">
              {isLoading
                ? Array.from(Array(20).keys())?.map((item) => (
                    <CardGrid item={undefined} isLoading={isLoading} type="" />
                  ))
                : data?.data?.map((item) => (
                    <CardGrid
                      item={item}
                      isLoading={isLoading}
                      type={item?.media_type}
                    />
                  ))}
            </div>
            <div className="flex flex-row justify-center  pb-5 pt-2">
              <Pagination
                total={data?.maxPage || 1}
                value={pages}
                onChange={onChangePagination}
                color="black"
                autoContrast
                boundaries={3}
              />
            </div>
          </>
        )}
      </div>
    </DefaultLayout>
  )
}
