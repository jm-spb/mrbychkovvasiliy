import React from 'react';
import * as styles from './Carousel.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Carousel = ({ data }) => {
  console.log(data);
  return (
    <Swiper
      navigation
      pagination
      loop
      autoplay={{
        delay: 4000,
        disableOnInteraction: true,
      }}
      modules={[Pagination, Navigation, Autoplay]}
      className={styles.swiper}
    >
      {data.map(({ heading, text, imgSrc, button }) => {
        const image = getImage(imgSrc);
        return (
          <SwiperSlide key={heading} className={styles.slide}>
            <GatsbyImage image={image} alt={heading} className={styles.image} />
            <div className={styles.container}>
              <div className={styles.content}>
                <div>
                  <h1 className={styles.heading}>{heading}</h1>
                  <p className={styles.paragraph}>{text}</p>
                </div>
                <button className={styles.btn}>{button}</button>
              </div>
            </div>
            <div className={styles.background} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Carousel;
