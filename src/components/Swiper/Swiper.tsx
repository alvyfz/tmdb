import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

import './styles.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

// import required modules
import { Pagination, Navigation } from 'swiper/modules'
import { MovieTypeEnum } from '../../types/home'
import { CardMovie } from '../Card/CardMovie'

type TSwiperComponent = {
  data: any[]
  renderItem: React.Component
  onReachEnd?: () => void
  isLoading: boolean
  type: MovieTypeEnum
}
export const SwiperComponent = ({
  data,
  renderItem,
  isLoading,
  onReachEnd,
  type,
}: TSwiperComponent) => {
  const loadingData = Array.from(Array(10).keys())
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      navigation={{
        prevEl: '.swiper-previous-button',
        clickable: true,
        nextEl: '.swiper-next-button',
      }}
      breakpoints={{
        640: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 8,
          spaceBetween: 25,
        },
      }}
      modules={[Navigation]}
      className="mySwiper"
      onReachEnd={onReachEnd}
      onDragEnd={() => console.log('end')}
    >
      {isLoading
        ? loadingData.map(() => (
            <SwiperSlide>
              <CardMovie item={undefined} type={type} />
            </SwiperSlide>
          ))
        : data?.map((item) => (
            <SwiperSlide>
              <CardMovie item={item} type={type} />
            </SwiperSlide>
          ))}
    </Swiper>
  )
}
