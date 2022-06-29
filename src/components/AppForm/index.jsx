import React from 'react';
import * as styles from './AppForm.module.scss';
import { useForm } from 'react-hook-form';

const AppForm = () => {
  const {
    register,
    formState: { errors, isValid, isSubmitSuccessful },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  React.useEffect(() => {
    console.log('render');
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = ({ name, phone }) => {
    console.log(name, phone);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={styles.label} htmlFor="name">
        Имя
        <input
          {...register('name', {
            required: 'Укажите своё имя',
          })}
          className={styles.input}
          id="name"
          type="text"
          placeholder="Ваше Имя"
        />
      </label>
      <div className={styles.errorBox}>
        {errors?.name && <span className={styles.error}>{errors?.name.message}</span>}
      </div>
      <label className={styles.label} htmlFor="phone">
        Телефон
        <input
          {...register('phone', {
            required: 'Укажите номер телефона',
          })}
          className={styles.input}
          id="phone"
          type="tel"
          placeholder="Ваш номер телефона"
        />
      </label>
      <div className={styles.errorBox}>
        {errors?.phone && <span className={styles.error}>{errors?.phone.message}</span>}
      </div>
      <div className={styles.btn}>
        <button className={styles.submit} type="submit" disabled={!isValid}>
          Отправить
        </button>
      </div>
    </form>
  );
};

export default AppForm;
