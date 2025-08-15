import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../index.css';
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='bg-white'>Slide 1</SwiperSlide>
        <SwiperSlide className='bg-white'>Slide 2</SwiperSlide>
        <SwiperSlide className='bg-white'>Slide 3</SwiperSlide>
        <SwiperSlide className='bg-white'>Slide 4</SwiperSlide>
        <SwiperSlide className='bg-white'>Slide 5</SwiperSlide>
        <SwiperSlide className='bg-white'>Slide 6</SwiperSlide>
        <SwiperSlide className='bg-white'>Slide 7</SwiperSlide>
        <SwiperSlide className='bg-white'>Slide 8</SwiperSlide>
        <SwiperSlide className='bg-white'>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}