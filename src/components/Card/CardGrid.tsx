import { Skeleton } from '@mantine/core'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import { MovieTypeEnum } from '../../types/home'

export const CardGrid = ({
  item,
  isLoading,
  type,
}: {
  item: any
  isLoading: boolean
  type: MovieTypeEnum
}) => {
  const navigate = useNavigate()
  return (
    <div
      className="card cursor-pointer"
      onClick={() => {
        if (!['movie', 'tv'].includes(item?.media_type) || type) {
          navigate(`/${type}/${item?.id}`)
        }
      }}
    >
      <Skeleton
        animate
        visible={isLoading || !item?.poster_path}
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
          <Skeleton visible={isLoading || !item} animate>
            <span className="text  font-semibold text-md  leading-none">
              {item?.title || item?.original_name}
            </span>
          </Skeleton>
        </div>
        <div>
          <Skeleton visible={isLoading || !item} animate>
            {item?.release_date && (
              <span className="mt-1 text-sm  ">
                {moment(item?.release_date).format('DD MMM YYYY')}
              </span>
            )}
          </Skeleton>
        </div>
      </div>
    </div>
  )
}
