import React from 'react';
import * as styles from './Discount.module.scss';
import AppForm from '../AppForm';

const Discount = ({ heading, text_1, text_2 }) => {
  const videoMakingText = text_2 ? <p className={styles.paragraph}>{text_2}</p> : '';

  return (
    <section className={styles.discount}>
      <article className={styles.content}>
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.paragraph}>{text_1}</p>
        {videoMakingText || (
          <p className={styles.paragraph}>
            Мы понимаем, что <strong>вопросы</strong> охраны труда и производственной
            безопасности носят неотлагательный характер и зачастую их решение{' '}
            <strong>необходимо прямо сейчас</strong> или нужно было вчера. Наши
            специалисты смогут решить даже самые сложные и критические вопросы. И прежде
            всего мы <strong>гарантируем качество</strong> предоставляемых услуг{' '}
            <strong>в срок и конфиденциальность</strong> если ее требует заказчик.
          </p>
        )}

        <AppForm />
      </article>
    </section>
  );
};

export default Discount;
