import React from 'react';
import * as styles from './AppForm.module.scss';
import { useForm, Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';
import axios from 'axios';

const AppForm = () => {
  const {
    register,
    formState: { errors, isValid, isSubmitSuccessful },
    handleSubmit,
    reset,
    control,
  } = useForm({
    mode: 'onBlur',
  });

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = ({ Name, Phone }) => {
    axios.post('https://sheet.best/api/sheets/52b79214-9dc4-4c7f-bac7-8ef4c1d92c73', {
      Name,
      Phone,
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={styles.label} htmlFor="Name">
        Имя
        <input
          {...register('Name', {
            required: 'Укажите своё имя',
            minLength: {
              value: 3,
              message: 'Введите от 3 до 24 символов',
            },
            maxLength: {
              value: 24,
              message: 'Введите от 3 до 24 символов',
            },
            pattern: {
              value: /^[A-Za-zЁёА-я]+$/g,
              message: 'Имя должно содержать только латиницу или кириллицу',
            },
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
      <label className={styles.label} htmlFor="Phone">
        Телефон
      </label>
      <Controller
        name="Phone"
        control={control}
        defaultValue=""
        rules={{
          required: true,
        }}
        render={() => (
          <InputMask
            className={styles.input}
            mask="8 (999) 999-99-99"
            {...register('Phone', { required: 'Укажите номер телефона' })}
          >
            {(inputProps) => (
              <input
                {...inputProps}
                id="Phone"
                type="tel"
                placeholder="Ваш номер телефона"
              />
            )}
          </InputMask>
        )}
      />
      <div className={styles.errorBox}>
        {errors?.Phone && <span className={styles.error}>{errors?.Phone.message}</span>}
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
