import React from 'react';
import * as styles from './index.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Carousel from '../components/Carousel';
import AppForm from '../components/AppForm';
import Modal from '../components/Modal';
import { activityAreas } from '../content/Home';

const Home = ({ data }) => {
  const [modalActive, setModalActive] = React.useState(false);
  const { edges: homePageSwiperData } = data.allHomePageCarouselJson;

  const handleModalOn = () => {
    setModalActive(true);
    document.body.style.overflow = 'hidden';
  };

  const handleModalOff = () => {
    setModalActive(false);
    document.body.style.overflow = '';
  };

  return (
    <Layout>
      <main>
        {/* СЛАЙД 1 - ОХРАНА ТРУДА */}
        <article className={styles.occupational}>
          <StaticImage
            src="../assets/images/index/index-1.webp"
            alt="Центр развития охраны труда"
            className={styles.occupImg}
            placeholder="blurred"
            layout="fullWidth"
          />
          <div className={styles.container}>
            <section className={styles.section}>
              <h1 className={styles.heading}>ОХРАНА ТРУДА</h1>
              <h2 className={styles.subHeading}>для КОМПАНИЙ, СПЕЦИАЛИСТОВ, СТУДЕНТОВ</h2>
              <div>
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
                <button
                  className={styles.servicesBtn}
                  onClick={() => scrollTo('#business-services')}
                >
                  Услуги для бизнеса
                </button>
                <button className={styles.questionBtn} onClick={handleModalOn}>
                  Срочный вопрос
                </button>
              </div>
            </section>
          </div>
        </article>
        {/* СЛАЙД 2 - НАША МИССИЯ */}
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
              alt="Логотип"
              placeholder="blurred"
              layout="constrained"
            />
          </section>
        </article>
        {/* СЛАЙД 3 - ОСНОВНЫЕ НАПРАВЛЕНИЯ ДЕЯТЕЛЬНОСТИ */}
        <article>
          <section className={styles.areasHeader}>
            <div className={styles.containerContent}>
              <h2 className={styles.areasHeading}>Основные направления деятельности</h2>
              <p className={styles.areasParagraph}>
                Тут представлены стандартные перечни услуг для бизнеса, которые мы
                оказываем компаниям и корпорациям из разный сфер деятельности
              </p>
            </div>
          </section>
          <section id="business-services" className={styles.areasContent}>
            <div className={styles.areasCard}>
              <div className={styles.areasText}>
                <h2>{activityAreas[0].heading}</h2>
                {activityAreas[0].content.map(({ link, text }) => (
                  <a key={text} href={link} target="_blanc">
                    {text}
                  </a>
                ))}
              </div>
              <StaticImage
                src="../assets/images/index/index-2.webp"
                alt={activityAreas[0].heading}
                className={styles.areasImg}
                placeholder="blurred"
                layout="constrained"
              />
              <div className={styles.areasBackground} />
            </div>

            <div className={styles.areasCard}>
              <div className={styles.areasText}>
                <h2>{activityAreas[1].heading}</h2>
                {activityAreas[1].content.map(({ link, text }) => (
                  <a key={text} href={link} target="_blanc">
                    {text}
                  </a>
                ))}
              </div>
              <StaticImage
                src="../assets/images/index/index-3.webp"
                alt={activityAreas[1].heading}
                className={styles.areasImg}
                placeholder="blurred"
                layout="constrained"
              />
              <div className={styles.areasBackground} />
            </div>

            <div className={styles.areasCard}>
              <div className={styles.areasText}>
                <h2>{activityAreas[2].heading}</h2>
                {activityAreas[2].content.map(({ link, text }) => (
                  <a key={text} href={link} target="_blanc">
                    {text}
                  </a>
                ))}
              </div>
              <StaticImage
                src="../assets/images/index/index-4.webp"
                alt={activityAreas[2].heading}
                className={styles.areasImg}
                placeholder="blurred"
                layout="constrained"
              />
              <div className={styles.areasBackground} />
            </div>

            <div className={styles.areasCard}>
              <div className={styles.areasText}>
                <h2>{activityAreas[3].heading}</h2>
                {activityAreas[3].content.map(({ link, text }) => (
                  <a key={text} href={link} target="_blanc">
                    {text}
                  </a>
                ))}
              </div>
              <StaticImage
                src="../assets/images/index/index-5.webp"
                alt={activityAreas[3].heading}
                className={styles.areasImg}
                placeholder="blurred"
                layout="constrained"
              />
              <div className={styles.areasBackground} />
            </div>
          </section>
        </article>
        {/* СЛАЙД 4 - НАПРАВЛЕНИЯ РАЗВИТИЯ ОХРАНЫ ТРУДА */}
        <article className={styles.growth}>
          <section className={styles.growthHeader}>
            <h2>Направления развития охраны труда</h2>
            <p>
              Для нас одинаково важна работа в каждом из этих направлений, все услуги для
              студентов и специалистов оказываются абсолютно бесплатно, мы хотим, что бы
              вы развивались и создавали безопасные условия на своих рабочих местах.
            </p>
          </section>
          <section className={styles.growthContent}>
            <div className={styles.growthCard}>
              <div>
                <div className={styles.growthTopImg}>
                  <h3>Работодателям</h3>
                  <StaticImage
                    src="../assets/images/human-resources/hr-1.webp"
                    alt="Работодателям"
                    placeholder="blurred"
                    layout="fullWidth"
                  />
                </div>
                <div className={styles.growthText}>
                  <h4>Для работодателей</h4>
                  <p>Аудит компаний HSE ISO</p>
                  <p>Разработка и проведение тренингов</p>
                  <p>Реализация проектов HSE ISO</p>
                  <p>Оценка профессиональных рисков</p>
                  <p>Подбор спец-тов в короткие сроки</p>
                  <p>Подбор сформированной команды</p>
                  <p>Проведение оценки знаний спец-тов</p>
                  <p>Подготовка новых специалистов</p>
                  <p>Анализ вовлеченности сотрудников</p>
                </div>
              </div>
              <div className={styles.growthBottom}>
                {/* <button className={styles.growthBtn}>Задать свой вопрос</button> */}
              </div>
            </div>

            <div className={styles.growthCard}>
              <div>
                <div className={styles.growthTopImg}>
                  <h3>Специалистам</h3>
                  <StaticImage
                    src="../assets/images/human-resources/hr-2.webp"
                    alt="Специалистам"
                    placeholder="blurred"
                    layout="fullWidth"
                  />
                </div>
                <div className={styles.growthText}>
                  <h4>Для специалистов</h4>
                  <p>Проведение семинаров</p>
                  <p>Карьерный консалтинг </p>
                  <p>Подбор нового места работы</p>
                  <p>Поиск коллег с предыдущего проекта</p>
                  <p>Консультации по поиску работы</p>
                  <p>Обмен мнениями, контактами</p>
                  <p>Поиск дополнительного заработка</p>
                </div>
              </div>
              <div className={styles.growthBottom}>
                {/* <button className={styles.growthBtn}>Написать нам</button> */}
              </div>
            </div>

            <div className={styles.growthCard}>
              <div>
                <div className={styles.growthTopImg}>
                  <h3>Студентам</h3>
                  <StaticImage
                    src="../assets/images/human-resources/hr-3.webp"
                    alt="Студентам"
                    placeholder="blurred"
                    layout="fullWidth"
                  />
                </div>
                <div className={styles.growthText}>
                  <h4>Для студентов</h4>
                  <p>Проведение открытых лекций</p>
                  <p>Подбор места для практики</p>
                  <p>Поиск наставника или консультанта</p>
                  <p>Подбор рецензентов для диплома</p>
                  <p>Поиск первого работодателя</p>
                  <p>Работа для совмещения с учебой</p>
                </div>
              </div>
              <div className={styles.growthBottom}>
                {/* <button className={styles.growthBtn}>Заполнить анкету</button> */}
              </div>
            </div>
          </section>
        </article>
        {/* СЛАЙД 5 - СКИДКА ДЛЯ НОВЫХ КЛИЕНТОВ */}
        <article className={styles.discount}>
          <section className={styles.discountContainer}>
            <StaticImage
              src="../assets/images/index/index-6.webp"
              alt="Скидка новым клиентам"
              placeholder="blurred"
              layout="constrained"
            />
            <div className={styles.discountBox}>
              <div>
                <span className={styles.discountText}>
                  Для новых клиентов первая услуга за:
                </span>
                <span className={styles.discountPercent}>50%</span>
              </div>
              <button
                className={styles.discountBtn}
                onClick={() => scrollTo('#request-form')}
              >
                Заказать!
              </button>
            </div>
          </section>
        </article>
        {/* СЛАЙД 6 - О НАС */}
        <article>
          <section className={styles.about}>
            <div className={styles.aboutImg}>
              <StaticImage
                src="../assets/images/index/index-7.webp"
                alt="О нас"
                placeholder="blurred"
                layout="constrained"
              />
            </div>

            <div className={styles.aboutContent}>
              <h1 className={styles.aboutHeading}>О нас</h1>
              <p className={styles.aboutParagraph}>
                Включены в реестр Мин.Труда РФ{' '}
                <a
                  href="https://83360706-4eb9-40e0-b671-ab81fa291e44.filesusr.com/ugd/598d9b_e11f65770d004ee5a97bf21f519d8399.pdf"
                  className={styles.aboutLink}
                  target="__blanc"
                  rel="noopener noreferrer"
                >
                  №7888
                </a>
              </p>
              <p className={styles.aboutParagraph}>
                7 лет помогаем проходить проверки ГИТ в разных регионах страны
              </p>
              <p className={styles.aboutParagraph}>
                Собственная база специалистов по ОТ, ПБ и ООС готовых к работе
              </p>
              <p className={styles.aboutParagraph}>
                Большой объем готовых и проверенных решений для компаний разных сфер
                деятельности
              </p>
              <p className={styles.aboutParagraph}>
                Собственное оборудование для проведения испытаний, практических занятий,
                съемок видео
              </p>
              <p className={styles.aboutParagraph}>
                Можем быстро и дистанционно подготовить необходимые вам документы
              </p>
            </div>
          </section>
        </article>
        {/* СЛАЙД 7 - SWIPER */}
        <article>
          <Carousel data={homePageSwiperData} />
        </article>
        {/* СЛАЙД 8 - ЗАЯВКА */}
        <article id="request-form">
          <section className={styles.request}>
            <p className={styles.requestText}>
              Звоните 8-800-505-20-41 или оставляйте заявку
            </p>
            <p className={styles.requestText}>
              Мы понимаем, что вопросы охраны труда и производственной безопасности носят
              неотлагательный характер и зачастую их решение необходимо прямо сейчас или
              нужно было вчера. Специалисты Первый Трудовой.РФ смогут решить даже самые
              сложные и критические вопросы. И прежде всего мы гарантируем качество
              предоставляемых услуг в срок и конфиденциальность если ее требует заказчик.
            </p>
            <p className={styles.requestText}>
              Уже сегодня наши специалисты будут решать ваши задачи.
            </p>
            <AppForm />
          </section>
        </article>
        {/* СЛАЙД 9 - КОНТАКТЫ */}
        <article className={styles.contacts}>
          <section className={styles.contactsContainer}>
            <div className={styles.contactsMap}>
              <iframe
                title="Office geolocation"
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A3db3f299483c9230391b96559fa752d218dd6bdfaf9aaba69cd7b7ed5e0b3b8b&amp;source=constructor"
                width="100%"
                height="100%"
                frameBorder="0"
              ></iframe>
            </div>
            <div>
              <h1 className={styles.contactsHeading}>Контакты</h1>
              <p className={styles.contactsParagraph}>
                Санкт-Петербург, ул. Липовая Аллея, дом 9, литера А, этаж 9, помещение 25Н
              </p>
              <p className={styles.contactsParagraph}>ohranatryda@inbox.ru</p>
              <p className={styles.contactsParagraph}>8-800-505-20-41</p>
              <p className={styles.contactsParagraph}>8-812-987-12-77</p>
            </div>
          </section>
        </article>
      </main>
      <Modal isActive={modalActive} closeModal={handleModalOff} />
    </Layout>
  );
};

export default Home;

export const query = graphql`
  {
    allHomePageCarouselJson {
      edges {
        node {
          heading
          text
          linkName
          linkRef
          imgSrc {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`;
