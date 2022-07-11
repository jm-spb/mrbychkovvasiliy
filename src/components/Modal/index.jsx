import React from 'react';
import * as styles from './Modal.module.scss';
import { GrClose } from 'react-icons/gr';
import classNames from 'classnames';
import { StaticImage } from 'gatsby-plugin-image';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

const Modal = ({ isActive, closeModal }) => {
  const ref = React.useRef(null);
  useOnClickOutside(ref, () => closeModal());

  return (
    <div ref={ref} className={classNames(styles.modal, { [styles.isActive]: isActive })}>
      <div className={styles.card}>
        <GrClose className={styles.icon} onClick={() => closeModal()} />
        <StaticImage
          src="../../assets/images/index/modal.webp"
          alt="Посетитель стройплощадки"
          placeholder="blurred"
          layout="fullWidth"
        />
        <div>
          <h1 className={styles.heading}>СРОЧНО</h1>
          <p className={styles.paragraph}>
            Если у вас случился НС или проверка - звоните! Мы оперативно вам поможем!
          </p>
          <p className={styles.paragraph}>8-800-505-20-41</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
