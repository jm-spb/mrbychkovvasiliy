import React from 'react';
import * as styles from './projects.module.scss';
import Layout from '../../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';

const Projects = () => {
  return (
    <Layout>
      <main>
        <section className={styles.header}>
          <article className={styles.headerContent}>
            <div className={styles.container}>
              <h1 className={styles.headerHeading}>
                Внедрение проектов по охране труда и производственной безопасности
              </h1>
              <p className={styles.headerParagraph}>Краткосрочные (до 3 месяцев) </p>
              <p className={styles.headerParagraph}>Долгосрочные (от 1 до 3 лет)</p>
            </div>
          </article>
        </section>
        <section className={styles.content}>
          <article className={styles.contentContainer}>
            <StaticImage
              src="../../assets/images/projects/data.webp"
              alt="Реализация проектов"
              placeholder="blurred"
              layout="constrained"
            />
            <div className={styles.projects}>
              <h2>Реализация проектов</h2>
              <p>Охраны труда</p>
              <p>Производственной безопасности</p>
              <p>Систем ОЗиБТ (ISO 45001-2018)</p>
              <p>Культуры безопасности</p>
              <span>Краткосрочные или долгосрочные:​​</span>
              <ol className={styles.list}>
                <li>
                  Проведение аудита процессов, внедрение недостающих процессов,
                  корректировка существующих.
                </li>
                <li>
                  Идентификация и оценка рисков. Разработка методик, обучение персонала.
                </li>
                <li>
                  Разработка и контроль реализации мероприятий по улучшению условий
                  производства.{' '}
                </li>
                <li>
                  Построение системы управления охраны труда, производственной
                  безопасности на новом проекте.
                </li>
                <li>
                  Оценка вовлеченности, лидерских качеств, компитенции специалистов по
                  охране труда.
                </li>
              </ol>
            </div>
          </article>
        </section>
      </main>
    </Layout>
  );
};

export default Projects;
