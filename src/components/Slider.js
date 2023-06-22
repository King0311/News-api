import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

function Slider() {
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://media.istockphoto.com/photos/generic-modern-suv-car-in-concrete-garage-picture-id1307086567" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://media.istockphoto.com/photos/generic-modern-suv-car-in-concrete-garage-picture-id1307086567" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://media.istockphoto.com/photos/generic-modern-suv-car-in-concrete-garage-picture-id1307086567" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://media.istockphoto.com/photos/generic-modern-suv-car-in-concrete-garage-picture-id1307086567" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://media.istockphoto.com/photos/generic-modern-suv-car-in-concrete-garage-picture-id1307086567" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://media.istockphoto.com/photos/generic-modern-suv-car-in-concrete-garage-picture-id1307086567" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://media.istockphoto.com/photos/generic-modern-suv-car-in-concrete-garage-picture-id1307086567" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://media.istockphoto.com/photos/generic-modern-suv-car-in-concrete-garage-picture-id1307086567" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://media.istockphoto.com/photos/generic-modern-suv-car-in-concrete-garage-picture-id1307086567" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
