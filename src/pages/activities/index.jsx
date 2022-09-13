import React from 'react';
import * as styles from './activities.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import Layout from '../../components/Layout';

const Activities = () => {
  return (
    <Layout>
      <main className={styles.activities}>
        <header className={styles.header}>
          <h1 className={styles.mainHeading}>МЕРОПРИЯТИЯ</h1>
          <p className={styles.paragraph}>
            В этом разделе вы можете найти информацию о мероприятиях в области охраны
            труда и производственной безопасности. Зарегистрироваться на предстоящие
            мероприятия, проводимые нами, или найти полезную информацию с уже прошедшего
            мероприятия: контакты спикеров, презентации докладов, представленные образцы
            документов, информационные материалы и фотографии с мероприятия.{' '}
          </p>
        </header>
        <section>
          <h1 className={styles.sectionHeading}>Прошедшие мероприятия:</h1>
          <Link to="/activities/biot-2021/">
            <article className={styles.card}>
              <h2 className={styles.cardHeading}>
                <strong>БИОТ 2021</strong> (г. Москва) 7-10 сентября 2021 года
              </h2>
              <div className={styles.cardContent}>
                <StaticImage
                  className={styles.cardImg}
                  src="../../assets/images/activities/BIOT_1.webp"
                  alt="Мероприятие БИОТ"
                  placeholder="blurred"
                  layout="constrained"
                />
                <div className={styles.cardDescription}>
                  <p className={styles.cardParagraph}>
                    25-я Международная специализированная выставка «Безопасность и охрана
                    труда» (БИОТ) является крупнейшим мероприятием в области охраны труда
                    и промышленной безопасности.
                  </p>
                  <p className={styles.cardParagraph}>
                    Участники БИОТ — российские и иностранные производители, поставщики и
                    потребители современного технологического оборудования, материалов и
                    СИЗ для обеспечения безопасности работающего человека, руководители
                    законодательных органов власти, специалисты, эксперты рынка Охраны
                    труда, Промышленной и Экологической безопасности.
                  </p>
                </div>
              </div>
            </article>
          </Link>
        </section>
      </main>
    </Layout>
  );
};

export default Activities;
