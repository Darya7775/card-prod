import React from "react";
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { StyledSider } from "./style";

import "swiper/css";
import "swiper/css/navigation";

function Gallery({ images, name }) {
  return (
    <StyledSider navigation={true} modules={[Navigation]} loop={true}>
      {images.length &&
        images.map((item) => {
          return (
            <SwiperSlide>
              <img width="200" height="257" src={item} alt={name} />
            </SwiperSlide>
          );
        })}
    </StyledSider>
  );
}

export default Gallery;
