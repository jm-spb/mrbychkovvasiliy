import React from 'react';
import * as styles from './fire-safety.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../../components/Layout';
import Discount from '../../components/Discount';
import { discountContent } from '../../content/discount';

const FireSafety = () => {
  const { heading, text_1, text_2 } = discountContent;

  return (
    <Layout>
      <main>
        <section className={styles.content}>
          <h1 className={styles.pageHeading} data-sal="zoom-out" data-sal-duration="500">
            Пожарная безопасность
          </h1>
          <section className={styles.cards}>
            <article>
              <StaticImage
                src="../../assets/images/fire-safety/fire-safety-1.webp"
                alt="Пожарный аудит"
                className={styles.img}
                placeholder="blurred"
                layout="fullWidth"
              />
              <div className={styles.info}>
                <h2 className={styles.infoHeading}>Пожарный аудит</h2>
                <p className={styles.text}>Рекомендательная процедура</p>
                <ol className={styles.list}>
                  Что дает:
                  <li>
                    Проверить правильность оформления документов и проводимой работы по
                    пожарной безопасности
                  </li>
                  <li>
                    Проверка офисных помещений и производственных площадок где работают
                    сотрудники
                  </li>
                  <li>Избежать наказания в случае возникших аварийных ситуаций</li>
                </ol>
                <div className={styles.price}>
                  <p>Срок проведения: от 2 дней</p>
                  <p>Стоимость от 12 000 руб.</p>
                </div>
              </div>
            </article>

            <article>
              <StaticImage
                src="../../assets/images/fire-safety/fire-safety-2.webp"
                alt="Проведение эвакуации с оформлением документов"
                className={styles.img}
                placeholder="blurred"
                layout="fullWidth"
              />
              <div className={styles.info}>
                <h2 className={styles.infoHeading}>
                  Проведение эвакуации с оформлением документов
                </h2>
                <p className={styles.text}>Обязательная процедура </p>
                <ol className={styles.list}>
                  Что дает:
                  <li>
                    Проведение практических эвакуационных тренировок из зданий в котором
                    работают сотрудники
                  </li>
                  <li>
                    Оформление заключительной документации по результатам проведенных
                    тренировок
                  </li>
                </ol>
                <div className={styles.price}>
                  <p>Срок проведения: от 1 дня (в зависимости от сложности объекта)</p>
                  <p>Стоимость от 7 000 руб.</p>
                </div>
              </div>
            </article>

            <article>
              <StaticImage
                src="../../assets/images/fire-safety/fire-safety-3.webp"
                alt="Разработка обязательных документов"
                className={styles.img}
                placeholder="blurred"
                layout="fullWidth"
              />
              <div className={styles.info}>
                <h2 className={styles.infoHeading}>Разработка обязательных документов</h2>
                <p className={styles.text}>Обязательная процедура</p>
                <ol className={styles.list}>
                  Что дает:
                  <li>
                    Разработка документов по пожарной безопасности, правильное оформление
                    всех нормативных требований законодательства по пожарной безопасности
                  </li>
                  <li>
                    Защиту от штрафов при проверках госорганов, помощь при проверка
                    пожнадзора, МЧС
                  </li>
                </ol>
                <div className={styles.price}>
                  <p>Срок проведения: от 2 дней</p>
                  <p>Стоимость от 8 000 руб.</p>
                </div>
              </div>
            </article>

            <article>
              <StaticImage
                src="../../assets/images/fire-safety/fire-safety-4.webp"
                alt="Изготовление и установка планов и знаков эвакуации"
                className={styles.img}
                placeholder="blurred"
                layout="fullWidth"
              />
              <div className={styles.info}>
                <h2 className={styles.infoHeading}>
                  Изготовление и установка планов и знаков эвакуации
                </h2>
                <p className={styles.text}>Обязательная процедура</p>
                <ol className={styles.list}>
                  Что дает:
                  <li>Определить где и какие требуются планы и знаки эвакуации</li>
                  <li>Подготовка недостающих планов эвакуации и знаков безопасности</li>
                  <li>
                    Установка планов и знаков эвакуации в соответствии с требованиями
                    стандартов
                  </li>
                </ol>
                <div className={styles.price}>
                  <p>Срок проведения: от 7 дней</p>
                  <p>Стоимость от 4 000 руб.</p>
                </div>
              </div>
            </article>

            <article>
              <StaticImage
                src="../../assets/images/fire-safety/fire-safety-5.webp"
                alt="Перезарядка огнетушителей и перекатка рукавов"
                className={styles.img}
                placeholder="blurred"
                layout="fullWidth"
              />
              <div className={styles.info}>
                <h2 className={styles.infoHeading}>
                  Перезарядка огнетушителей и перекатка рукавов
                </h2>
                <p className={styles.text}>Обязательная процедура</p>
                <ol className={styles.list}>
                  Что дает:
                  <li>
                    Проведение периодической проверки исправного состояния средств
                    пожарной защиты
                  </li>
                  <li>Защита в случае аварийной ситуации</li>
                  <li>
                    Защита от последующих штрафных санкций со стороны надзорных органов
                  </li>
                </ol>
                <div className={styles.price}>
                  <p>Срок проведения: от 5 дней</p>
                  <p>Стоимость от 2 000 руб.</p>
                </div>
              </div>
            </article>
          </section>
        </section>
        <Discount heading={heading} text_1={text_1} text_2={text_2} />
      </main>
    </Layout>
  );
};

export default FireSafety;
