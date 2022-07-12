import React from 'react';
import * as styles from './Carousel.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';

const Carousel = ({ data }) => {
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
      {data.map(({ node: { heading, text, imgSrc, linkName, linkRef } }) => {
        const image = getImage(imgSrc);

        // create scroll button to form or link to another page
        const scrollBtnOrLink =
          linkRef === '#request-form' ? (
            <button className={styles.btn} onClick={() => scrollTo('#request-form')}>
              {linkName}
            </button>
          ) : (
            <Link to={linkRef} className={styles.btn}>
              {linkName}
            </Link>
          );

        return (
          <SwiperSlide key={heading} className={styles.slide}>
            <GatsbyImage image={image} alt={heading} className={styles.image} />
            <div className={styles.container}>
              <div className={styles.content}>
                <div>
                  <h1 className={styles.heading}>{heading}</h1>
                  <p className={styles.paragraph}>{text}</p>
                </div>
                {linkName ? scrollBtnOrLink : null}
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
