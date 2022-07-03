import React from 'react';
import * as styles from './oc-safety.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../../components/Layout';
import Discount from '../../components/Discount';
import { discountContent } from '../../content/discount';

const OccupationalSafety = () => {
  const { heading, text_1, text_2 } = discountContent;

  return (
    <Layout>
      <main>
        <section className={styles.content}>
          <h1 className={styles.pageHeading}>Охрана труда</h1>
          <section className={styles.cards}>
            <article>
              <StaticImage
                src="../../assets/images/occupational-safety/oc-safety-1.webp"
                alt="Аудит и подготовка документов"
                placeholder="blurred"
                layout="constrained"
              />
              <div className={styles.info}>
                <h2 className={styles.infoHeading}>Аудит и подготовка документов</h2>
                <p className={styles.text}>Рекомендательная процедура</p>
                <ol className={styles.list}>
                  Что дает:
                  <li>
                    Проверить правильность оформления всех документов по охране труда и
                    обязательных процедур по Российскому законодательству
                  </li>
                  <li>
                    Проверить офисные помещений и производственные площадки, где работают
                    сотрудники
                  </li>
                  <li>
                    Избежать штрафов со стороны проверяющих гос.органов, решение
                    возникающих вопросов по охране труда в ходе аудитов
                  </li>
                </ol>
                <div className={styles.price}>
                  <p>Срок проведения: от 2 дней</p>
                  <p>Стоимость от 12 000 руб.</p>
                </div>
              </div>
            </article>

            <article>
              <StaticImage
                src="../../assets/images/occupational-safety/oc-safety-2.webp"
                alt="Аутсорсинг по охране труда"
                placeholder="blurred"
                layout="constrained"
              />
              <div className={styles.info}>
                <h2 className={styles.infoHeading}>Аутсорсинг по охране труда</h2>
                <p className={styles.text}>
                  Обязательная процедура <br /> (в компаниях до 50 чел)
                </p>

                <ol className={styles.list}>
                  Что дает:
                  <li>
                    Выполнение функций и услуг специалиста по охране труда в соответствии
                    с требованиями Трудового Кодекса РФ, что бы избежать штрафов от
                    государственной инспекции по труду
                  </li>
                  <li>
                    Выполнение услуг специалиста по охране труда, проведение всех
                    обязательных мероприятий по охране труда:
                    <ul>
                      <li>
                        проведение обучения по охране труда и проверка знаний по охране
                        труда,
                      </li>
                      <li>
                        оформление док-тов по охране труда и производственной безопасности
                        (пожарной безопасности, промышленной безопасности,
                        электробезопасности),
                      </li>
                      <li>организация специальной оценки условий труда,</li>
                      <li>
                        проведение первичных и периодических медицинских осмотров и др.
                      </li>
                    </ul>
                  </li>
                </ol>
                <div className={styles.price}>
                  <p>Форма проведения: от 1 раза в месяц</p>
                  <p>Стоимость от 7 000 руб.</p>
                </div>
              </div>
            </article>

            <article>
              <StaticImage
                src="../../assets/images/occupational-safety/oc-safety-3.webp"
                alt="Проведение ежегодных мероприятий"
                placeholder="blurred"
                layout="constrained"
              />
              <div className={styles.info}>
                <h2 className={styles.infoHeading}>Проведение ежегодных мероприятий</h2>
                <p className={styles.text}>Обязательная процедура</p>
                <ol className={styles.list}>
                  Что дает:
                  <li>
                    Проведение всех направлений обязательного обучения сотрудников по:
                    охране труда, пожарной безопасности, электробезопасности, первой
                    помощи, ГОиЧС
                  </li>
                  <li>
                    Проведение специальной оценки условий труда на рабочих местах и
                    определение установленных компенсаций
                  </li>
                  <li>
                    Получение финансирования из федерального бюджета на мероприятия по
                    охране труда и средства защиты (до 20% от уплаченных взносов в ФСС)
                  </li>
                </ol>
                <div className={styles.price}>
                  <p>Срок проведения: от 7 дней</p>
                  <p>Стоимость от 15 000 руб.</p>
                </div>
              </div>
            </article>

            <article>
              <StaticImage
                src="../../assets/images/occupational-safety/oc-safety-4.webp"
                alt="Расследование несчастных случаев"
                placeholder="blurred"
                layout="constrained"
              />
              <div className={styles.info}>
                <h2 className={styles.infoHeading}>Расследование несчастных случаев</h2>
                <p className={styles.text}>Обязательная процедура</p>
                <ol className={styles.list}>
                  Что дает:
                  <li>
                    Проведение расследование НС в полном соответствии с требованиями
                    законодательства
                  </li>
                  <li>Подача извещений в гос органы</li>
                  <li>
                    Оформление всех обязательных документов в соответствии с установленным
                    Порядком расследования НС
                  </li>
                  <li>
                    Взаимодействие с гос.органами при последующих проверках и с
                    потерпевшими
                  </li>
                </ol>
                <div className={styles.price}>
                  <p>Срок проведения: от 3 дней</p>
                  <p>Стоимость от 20 000 руб.</p>
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

export default OccupationalSafety;
