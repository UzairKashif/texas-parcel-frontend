import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

type PropertyCarouselProps = {
  images: string[];
};

export const PropertyCarousel = ({ images }: PropertyCarouselProps) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, EffectCoverflow]}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      navigation
      pagination={{ clickable: true }}
      className="h-full w-full"
    >
      {images && images.length > 0 ? (
        images.map((img, index) => (
          <SwiperSlide key={index} className="!w-full h-full">
            <img 
              src={img} 
              alt={`Property image ${index + 1}`} 
              className="w-full h-full object-cover" 
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null; // prevent infinite loop
                target.src = "[https://placehold.co/600x400/002f45/FFF?text=Image+Not+Found](https://placehold.co/600x400/002f45/FFF?text=Image+Not+Found)";
              }}
            />
          </SwiperSlide>
        ))
      ) : (
        <SwiperSlide className="!w-full h-full">
          <div className="w-full h-full bg-gray-200 dark:bg-slate-700 flex items-center justify-center">
            <span className="text-gray-500">No Images Available</span>
          </div>
        </SwiperSlide>
      )}
    </Swiper>
  );
};