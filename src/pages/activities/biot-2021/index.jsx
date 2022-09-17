import React from 'react';
import * as styles from './biot-2021.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
import { GrDocumentWord } from 'react-icons/gr';
import Layout from '../../../components/Layout';
import { biotDocs } from '../../../content/biotDocs';

const Biot_2021 = () => {
  return (
    <Layout>
      <main className={styles.biot}>
        <header>
          <h1 className={styles.mainHeading}>"Безопасность и охрана труда" (БИОТ)</h1>
          <h2 className={styles.subHeading}>
            Дата и место проведения: 7-10 сентября 2021г., Москва
          </h2>
        </header>
        <article className={styles.content}>
          <p className={styles.paragraph}>
            БИОТ — значимое в России мероприятие в области охраны труда и средств
            индивидуальной защиты. Которое год от года становится все масштабнее и
            интереснее. Именно здесь задаются тренды развития, создаются партнёрства,
            проходят интересные выступления спикеров, встречи специалистов со всей страны,
            конкурсы для студентов и много другое. Это огромная площадка для специалистов
            и поставщиков в области охраны труда, средств индивидуальной защиты,
            экологической и промышленной безопасности, направления ESG.
          </p>
          <StaticImage
            className={styles.img}
            src="../../../assets/images/activities/BIOT_3.webp"
            alt="Мероприятие БИОТ"
            placeholder="blurred"
            layout="constrained"
          />
          <p className={styles.paragraph}>
            На конференции наши сотрудники принимали участие в качестве модератора
            направления «Безопасность труда в строительстве» и спикера в направлении
            «Безопасность в нефтегазовой отрасли»
          </p>
          <StaticImage
            className={styles.img}
            src="../../../assets/images/activities/BIOT_2.webp"
            alt="Мероприятие БИОТ"
            placeholder="blurred"
            layout="constrained"
          />
        </article>
        <article className={styles.docs}>
          <h1 className={styles.docsHeading}>Полезные ресурсы:</h1>
          {biotDocs.map(({ name, link }, idx) => (
            <span key={`${name}-${idx}`} className={styles.doc}>
              <GrDocumentWord className={styles.icon} />
              <a className={styles.link} href={link} download>
                {name}
              </a>
            </span>
          ))}
        </article>
      </main>
    </Layout>
  );
};

export default Biot_2021;
