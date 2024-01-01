// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { EffectFade } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/css/effect-fade";
import "swiper/css/free-mode";

// Import Swiper styles
import "swiper/css";

export default function SwiperHeroCarousel({ data }) {
  return (
    <Swiper
      // install Swiper modules
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y, EffectFade]}
      effect='fade'
      spaceBetween={50}
      slidesPerView={1}
      navigation
      allowTouchMove={false}
      // onTouchMove={true}
      freeMode={false}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}

      // scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>{data[0]}</SwiperSlide>
      <SwiperSlide>{data[1]}</SwiperSlide>
      <SwiperSlide>{data[2]}</SwiperSlide>
      <SwiperSlide>{data[3]}</SwiperSlide>
      <SwiperSlide>{data[4]}</SwiperSlide>
      <SwiperSlide>{data[5]}</SwiperSlide>
    </Swiper>
  );
}
