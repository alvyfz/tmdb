import { useLocation, useParams } from 'react-router-dom'
import DefaultLayout from '../../layout/DefaultLayout'
import { useMemo } from 'react'
import { MovieTypeEnum } from '../../types/home'
import { useDetail } from './hooks/Detail.hook'
import './styles.css'
import moment from 'moment'
import { Divider } from '@mantine/core'
import Loader from '../../common/Loader'

export const Detail = () => {
  const { data, isLoading } = useDetail()

  return (
    <DefaultLayout>
      <div className="flex-1">
        {isLoading ? (
          <Loader />
        ) : (
          <div
            className="relative"
            //   className={`bg-[url('https://www.themoviedb.org/t/p/original/${data?.backdrop_path}')] bg-no-repeat h-[50vh] w-full`}
          >
            {data?.backdrop_path ? (
              <img
                src={`https://www.themoviedb.org/t/p/original/${data?.backdrop_path}`}
                alt="backdrop"
                className="img object-cover h-screen md:h-[40vh]"
              />
            ) : (
              <div className="img object-cover bg-slate-400"></div>
            )}
            <div className="absolute left-0 top-0 z-10 flex flex-row   w-full gap-10 ">
              <img
                src={`https://www.themoviedb.org/t/p/original/${data?.poster_path}`}
                alt={data?.title}
                className="  object-cover w-[25vw] mt-14 md:ml-10 ml-2 rounded-lg border-2 border-inherit"
              />
              <div className="flex flex-col justify-center md:mr-10 mr-2">
                <h1 className="text-white font-bold md:text-5xl tex-lg text-shadow ">
                  {data?.title}{' '}
                  <span className="font-normal text-shadow">
                    ({moment(data?.release_date).format('YYYY')})
                  </span>
                </h1>
                <div className="flex md:flex-row flex-col gap-1 text-white md:text-lg text-sm text-wrap outline-inherit text-shadow">
                  <h3>{data?.adult ? '18+' : '12+'}</h3>
                  <h3 className="hidden md:inline-flex">&#183;</h3>
                  <h3> {moment(data?.release_date).format('DD/MM/YYYY')}</h3>
                  <h3 className="hidden md:inline-flex">&#183;</h3>
                  <h3>
                    {data?.genres?.map((genre) => genre.name)?.join(', ')}
                  </h3>
                  <h3 className="hidden md:inline-flex">&#183;</h3>
                  <h3>{data?.runtime} minutes</h3>
                </div>
                <div className="flex flex-col   text-white md:text-lg text-sm  font-semibold text-shadow">
                  <h2>{data?.tagline}</h2>
                </div>
                <div className="flex flex-col  text-white md:text-lg text-sm  text-shadow">
                  <h2>Overview:</h2>
                  <p>{data?.overview}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DefaultLayout>
  )
}
