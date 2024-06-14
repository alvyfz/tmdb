import { memo } from 'react'
import { SwiperSlide } from 'swiper/react'
import './styles.css'
import moment from 'moment'
import { Skeleton } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { MovieTypeEnum } from '../../types/home'

export const CardMovie = ({
  item,
  type,
}: {
  item: any
  type: MovieTypeEnum
}) => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => {
        if (item?.id) {
          navigate(`/${type}/${item?.id}`)
        }
      }}
      className="cursor-pointer"
    >
      <Skeleton
        animate
        visible={!item?.poster_path}
        height={'80%'}
        width={'100%'}
      >
        <img
          src={`https://www.themoviedb.org/t/p/original/${item?.poster_path || item?.backdrop_path}`}
          alt={item?.title}
          className="skeleton-img"
        />
      </Skeleton>
      <div className="flex-col flex justify-start h-[20%]">
        <div className=" mt-1 ">
          <Skeleton visible={!item} animate>
            <span className="text  font-semibold text-md  leading-none">
              {item?.title || item?.original_name}
            </span>
          </Skeleton>
        </div>
        <div>
          <Skeleton visible={!item} animate>
            <span className="mt-1 text-sm  ">
              {moment(item?.release_date).format('DD MMM YYYY')}
            </span>
          </Skeleton>
        </div>
      </div>
    </div>
  )
}
