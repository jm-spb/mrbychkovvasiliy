import React from 'react';
import * as styles from './industrial-safety.module.scss';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../../components/Layout';
import Discount from '../../components/Discount';

const IndustrialSafety = ({ data }) => {
  const { heading, mainText } = data.allDiscountContentJson.edges[0].node;

  return (
    <Layout>
      <main>
        <section className={styles.safety}>
          <h1 className={styles.heading}>Промышленная безопасность</h1>
          <section className={styles.cards}>
            <article>
              <StaticImage
                src="../../assets/images/industrial-safety/industrial-1.webp"
                alt="Регистрация ОПО и постановка на учёт ОПО"
                placeholder="blurred"
                layout="fullWidth"
              />
              <div className={styles.info}>
                <h2 className={styles.infoHeading}>
                  Регистрация ОПО и постановка на учёт ОПО
                </h2>
                <p className={styles.text}>Обязательная процедура</p>
                <ol className={styles.list}>
                  Что дает:
                  <li>
                    Оформление в соответствие с требованиями законодательства опасных
                    производственных объектов
                  </li>
                  <li>Подготовка пакета документов для подачи в Ростехнадзор</li>
                  <li>Сопровождение на всех этапах процедуры</li>
                  <li>
                    100% гарантия постановки на учет и получении разрешения на
                    эксплуатацию опасного производственного объекта
                  </li>
                </ol>
                <div className={styles.price}>
                  <p>Срок проведения: от 3 дней</p>
                  <p>(в зависимости от сложности объекта)</p>
                  <p>Стоимость от 15 000 руб.</p>
                </div>
              </div>
            </article>

            <article>
              <StaticImage
                src="../../assets/images/industrial-safety/industrial-2.webp"
                alt="Подача ежегодной отчётности о системе ПК в Ростехнадзор"
                placeholder="blurred"
                layout="fullWidth"
              />
              <div className={styles.info}>
                <h2 className={styles.infoHeading}>
                  Подача ежегодной отчётности о системе ПК в Ростехнадзор
                </h2>
                <p className={styles.text}>Обязательная процедура </p>
                <ol className={styles.list}>
                  Что дает:
                  <li>
                    Подготовка всех форм отчетности, полного комплекта документов о
                    системе производственного контроля
                  </li>
                  <li>Подача отчетности в срок</li>
                  <li>Отсутствие ошибок и штрафов</li>
                </ol>
                <div className={styles.price}>
                  <p>Срок проведения: от 1 дня</p>
                  <p>Стоимость от 12 000 руб.</p>
                </div>
              </div>
            </article>

            <article>
              <StaticImage
                src="../../assets/images/industrial-safety/industrial-3.webp"
                alt="Оформление лицензий"
                placeholder="blurred"
                layout="fullWidth"
              />
              <div className={styles.info}>
                <h2 className={styles.infoHeading}>Оформление лицензий</h2>
                <p className={styles.text}>Обязательная процедура</p>
                <ol className={styles.list}>
                  Что дает:
                  <li>
                    100% Получение в сжатые сроки Лицензии:
                    <ul>
                      <li>МЧС,</li>
                      <li>МинКультуры,</li>
                      <li>МинЗдрава и др.</li>
                    </ul>
                  </li>
                  <li>
                    Подготовка всех необходимых документов и оборудования, включая сложные
                    вопросы: трудоустройства в штат специалистов соответствующего уровня
                    подготовки плюс опыта, а так же подбор помещений.
                  </li>
                </ol>
                <div className={styles.price}>
                  <p>Срок проведения:</p>
                  <p>зависит от вида лицензии и подготовки организации</p>
                  <p>Стоимость от 65 000 руб.</p>
                </div>
              </div>
            </article>

            <article>
              <StaticImage
                src="../../assets/images/industrial-safety/industrial-4.webp"
                alt="Аттестация персонала"
                placeholder="blurred"
                layout="fullWidth"
              />
              <div className={styles.info}>
                <h2 className={styles.infoHeading}>Аттестация персонала</h2>
                <p className={styles.text}>Обязательная процедура</p>
                <ol className={styles.list}>
                  Что дает:
                  <li>Подготовка персонала в удобном для вас формате</li>
                  <li>Правильное оформление всех документов об аттестации</li>
                  <li>Аттестация большого числа сотрудников в сжатые сроки</li>
                </ol>
                <div className={styles.price}>
                  <p>Срок проведения: от 2 дней</p>
                  <p>(зависит от кол-ва сотрудников и групп аттестации)</p>
                  <p>Стоимость от 35 000 руб.</p>
                </div>
              </div>
            </article>
          </section>
        </section>
        <Discount heading={heading} mainText={mainText} />
      </main>
    </Layout>
  );
};

export default IndustrialSafety;

export const query = graphql`
  {
    allDiscountContentJson {
      edges {
        node {
          heading
          mainText
          additionalText
        }
      }
    }
  }
`;
