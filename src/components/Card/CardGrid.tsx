import { Skeleton } from '@mantine/core'
import moment from 'moment'

export const CardGrid = ({ item }) => {
  const dummyImage = 'bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg'

  return (
    <div>
      <Skeleton visible={!item} className="skeleton-img">
        <img
          src={`https://www.themoviedb.org/t/p/original/${item?.poster_path || dummyImage}`}
          alt={item?.title}
          className="skeleton-img "
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
    </div>
  )
}
