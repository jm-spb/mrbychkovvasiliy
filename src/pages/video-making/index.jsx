import React from 'react';
import * as styles from './video-making.module.scss';
import Layout from '../../components/Layout';
import video_1 from '../../assets/video/video-1.mp4';
import video_2 from '../../assets/video/video-2.mp4';
import { StaticImage } from 'gatsby-plugin-image';
import { discountVideoContent } from '../../content/discount';
import Discount from '../../components/Discount';

const VideoMaking = () => {
  const { heading, text_1, text_2 } = discountVideoContent;

  return (
    <Layout>
      <main>
        <section className={styles.header}>
          <div className={styles.headerWrap}>
            <div className={styles.container}>
              <h1 className={styles.heading}>Съемка и монтаж производственных видео,</h1>
              <p className={styles.headerText}>
                вводного инструктажа, производственной инструкции, правил, презентации
              </p>
            </div>
          </div>
        </section>
        <section className={styles.videoWrap}>
          <video
            className={styles.video}
            src={video_1}
            type="video/mp4"
            width="100%"
            height="100%"
            controls
            loop
            muted
          />
        </section>
        <section className={styles.discription}>
          <div className={styles.container}>
            <h2 className={styles.discHeading}>Видео по охране труда</h2>
            <ol className={styles.list}>
              <li>Позволяют лучше донести необходимую информацию</li>
              <li>Сократить время предоставления информации</li>
              <li>Избежать ошибок в изложении информации человеком</li>
              <li>Привлечь внимание слушателей</li>
              <li>Удобный формат просмотра с любого устройства, в удобном месте</li>
            </ol>
          </div>
        </section>
        <section className={styles.videoWrap}>
          <video
            className={styles.video}
            src={video_2}
            type="video/mp4"
            width="100%"
            height="100%"
            controls
            loop
            muted
          />
        </section>

        <section className={styles.advantages}>
          <div className={styles.container}>
            <h2 className={styles.advHeading}>Преимущества</h2>
            <p className={styles.headingParagraph}>мы гарантируем вам:</p>
            <section className={styles.advBox}>
              <article className={styles.advBlock}>
                <StaticImage
                  src="../../assets/images/video/advantages-1.webp"
                  alt="Съёмка и монтаж качественного видео"
                  className={styles.blockImg}
                  placeholder="blurred"
                  layout="fullWidth"
                />
                <div className={styles.text}>
                  <h3 className={styles.blockHeading}>
                    Съёмка и монтаж качественного видео
                  </h3>
                  <p className={styles.blockParagraph}>
                    Монтаж видео на русском и английском языке
                  </p>
                  <p className={styles.blockParagraph}>
                    Озвучка профессиональным диктором
                  </p>
                  <p className={styles.blockParagraph}>
                    Оператор с опытом работы более 10 лет
                  </p>
                </div>
              </article>
              <article className={styles.advBlock}>
                <StaticImage
                  src="../../assets/images/video/advantages-2.webp"
                  alt="Использование современного оборудования"
                  className={styles.blockImg}
                  placeholder="blurred"
                  layout="fullWidth"
                />
                <div className={styles.text}>
                  <h3 className={styles.blockHeading}>
                    Использование современного оборудования
                  </h3>
                  <p className={styles.blockParagraph}>
                    Съемка видео с любой высоты или ракурса
                  </p>
                  <p className={styles.blockParagraph}>
                    Добавление в видео элементы инфографики и анамации
                  </p>
                </div>
              </article>
              <article className={styles.advBlock}>
                <StaticImage
                  src="../../assets/images/video/advantages-3.webp"
                  alt="Съёмка видео любой сложности на любой бюджет"
                  className={styles.blockImg}
                  placeholder="blurred"
                  layout="fullWidth"
                />
                <div className={styles.text}>
                  <h3 className={styles.blockHeading}>
                    Съёмка видео любой сложности на любой бюджет
                  </h3>
                  <p className={styles.blockParagraph}>
                    Любая длительность видео или ролика даже от 1 минуты
                  </p>
                  <p className={styles.blockParagraph}>Советы режиссера бесплатно</p>
                  <p className={styles.blockParagraph}>
                    Возможна съемка промо ролика бесплатно
                  </p>
                </div>
              </article>
            </section>
          </div>
        </section>
        <section className={styles.clients}>
          <article className={styles.container}>
            <div className={styles.top}>
              <h1 className={styles.topHeading}>Клиенты</h1>
              <p className={styles.topParagraph}>
                Мы снимаем видео для таких крупных компаний как
              </p>
            </div>
            <div className={styles.bottom}>
              <StaticImage
                src="../../assets/images/video/OMK.webp"
                alt="Объединенная металлургическая компания"
                placeholder="blurred"
                layout="fixed"
              />
              <StaticImage
                src="../../assets/images/video/Lukoil.webp"
                alt="Лукойл"
                placeholder="blurred"
                layout="fixed"
              />
              <StaticImage
                src="../../assets/images/video/ZPGS.webp"
                alt="ЗПГС"
                placeholder="blurred"
                layout="fixed"
              />
              <StaticImage
                src="../../assets/images/video/Transneft.webp"
                alt="Транснефть"
                placeholder="blurred"
                layout="fixed"
              />
            </div>
          </article>
        </section>
        <Discount heading={heading} text_1={text_1} text_2={text_2} />
      </main>
    </Layout>
  );
};

export default VideoMaking;
