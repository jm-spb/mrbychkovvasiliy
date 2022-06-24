import React from 'react';
import * as styles from './index.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <main>
        <article className={styles.occupational}>
          <StaticImage
            src="../assets/images/index/index-1.webp"
            alt="Центр развития охраны труда"
            placeholder="blurred"
            layout="fullWidth"
          />
          <div className={styles.container}>
            <section className={styles.section}>
              <h1 className={styles.heading}>ОХРАНА ТРУДА</h1>
              <h2 className={styles.subHeading}>для КОМПАНИЙ, СПЕЦИАЛИСТОВ, СТУДЕНТОВ</h2>
              <div className={styles.text}>
                <p className={styles.paragraph}>
                  Помогаем компаниям решать нестандартные вопросы по охране труда
                </p>
                <p className={styles.paragraph}>
                  Участвуем в проверках, расследуем НС по всей территории РФ
                </p>
                <p className={styles.paragraph}>
                  Реализуем нестандартные задачи в области охраны труда и безопасности
                </p>
                <p className={styles.paragraph}>
                  Развиваем студентов и специалистов в области охраны труда
                </p>
                <p className={styles.paragraph}>
                  Помогаем компаниям создавать эффективные системы безопасности
                  производства
                </p>
              </div>
              <div className={styles.buttons}>
                <button className={styles.servicesBtn}>Услуги для бизнеса</button>
                <button className={styles.questionBtn}>Срочный вопрос</button>
              </div>
            </section>
          </div>
        </article>
        <article className={styles.mission}>
          <section className={styles.missionSection}>
            <div className={styles.missionContent}>
              <h2 className={styles.missionHeading}>НАША МИССИЯ:</h2>
              <p className={styles.missionParagraph}>
                "Проводить мероприятия, которые будут развивать охрану труда. Создавать
                условия для развития студентов и специалистов в области Техносферной
                безопасности. Предоставлять качественные услуги по охране труда"
              </p>
              <button className={styles.missionBtn}>Присоединиться к нам</button>
            </div>
            <StaticImage
              src="../assets/images/index/logo-large.webp"
              alt="Центр развития охраны труда"
              className={styles.missionLogo}
              placeholder="blurred"
              layout="constrained"
            />
          </section>
        </article>
        <article className={styles.areas}>
          <section className={styles.areasContainer}>
            <h2 className={styles.areasHeading}>Основные направления деятельности</h2>
            <p className={styles.areasParagraph}>
              Тут представлены стандартные перечни услуг для бизнеса, которые мы оказываем
              компаниям и корпорациям из разный сфер деятельности
            </p>
          </section>
        </article>
      </main>
    </Layout>
  );
};

export default Home;
