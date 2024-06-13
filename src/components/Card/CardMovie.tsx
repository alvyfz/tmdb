import { memo } from 'react'
import { SwiperSlide } from 'swiper/react'
import './styles.css'
import moment from 'moment'
import { Skeleton } from '@mantine/core'

export const CardMovie = (item) => {
  const dummyImage = 'bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg'
  return (
    <SwiperSlide>
      <Skeleton visible={!item} className="skeleton-img">
        <img
          src={`https://www.themoviedb.org/t/p/original/${item?.poster_path || dummyImage}`}
          alt={item?.title}
        />
      </Skeleton>
      <div className="flex-col flex justify-start">
        <div className=" mt-1">
          <Skeleton visible={!item}>
            <span className="  font-semibold text-md  leading-none">
              {item?.title || item?.original_name}
            </span>
          </Skeleton>

          <Skeleton visible={!item}>
            <span className=" text-sm  ">
              {moment(item?.release_date).format('DD MMM YYYY')}
            </span>
          </Skeleton>
        </div>
      </div>
    </SwiperSlide>
  )
}
