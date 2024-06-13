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

type TSwiperComponent = {
  data: any[]
  renderItem: React.Component
  onReachEnd?: () => void
  isLoading: boolean
}
export const SwiperComponent = ({
  data,
  renderItem,
  isLoading,
  onReachEnd,
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
        ? loadingData.map(() => renderItem(undefined))
        : data?.map((item) => renderItem(item))}
    </Swiper>
  )
}
