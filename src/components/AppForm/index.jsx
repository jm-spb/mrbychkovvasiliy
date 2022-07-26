import React from 'react';
import * as styles from './AppForm.module.scss';
import { useForm } from 'react-hook-form';
import axios from 'axios';

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
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = ({ Name, rawPhoneNumber }) => {
    axios
      .post('https://sheet.best/api/sheets/52b79214-9dc4-4c7f-bac7-8ef4c1d92c73', {
        Name,
        rawPhoneNumber,
      })
      .then((res) => console.log(res));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={styles.label} htmlFor="Name">
        Имя
        <input
          {...register('Name', {
            required: 'Укажите своё имя',
          })}
          className={styles.input}
          id="Name"
          type="text"
          placeholder="Ваше Имя"
        />
      </label>
      <div className={styles.errorBox}>
        {errors?.Name && <span className={styles.error}>{errors?.Name.message}</span>}
      </div>
      <label className={styles.label} htmlFor="rawPhoneNumber">
        Телефон
        <input
          {...register('rawPhoneNumber', {
            required: 'Укажите номер телефона',
          })}
          className={styles.input}
          id="rawPhoneNumber"
          type="tel"
          placeholder="Ваш номер телефона"
        />
      </label>
      <div className={styles.errorBox}>
        {errors?.rawPhoneNumber && (
          <span className={styles.error}>{errors?.rawPhoneNumber.message}</span>
        )}
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
