import classNames from 'classnames';
import React from 'react';
import InputWidget from '../InputWidget/InputWidget';
import SubmitButton from '../SubmitButton/SubmitButton';
import { TMainForm } from './@types';
import styles from './MainForm.module.scss';

export default function MainForm(props: TMainForm) {
  const {
    fullData,
    invalidFields,
    className,
    validateField,
    sendData,
    onBlur,
  } = props;

  const { name, lastName, email, fullPhone } = fullData;
  return (
    <form
      id="form"
      onSubmit={(event) => sendData(event)}
      className={classNames(styles.form, className)}
    >
      <h2>Начните зарабатывать на государственном газе!</h2>
      <InputWidget
        onChange={validateField}
        type="text"
        value={name}
        required={true}
        placeholder="Имя"
        name={'name'}
        onBlur={onBlur}
        invalid={invalidFields.includes('name')}
      />
      <InputWidget
        onChange={validateField}
        type="text"
        value={lastName}
        required={true}
        placeholder="Фамилия"
        name={'lastName'}
        onBlur={onBlur}
        invalid={invalidFields.includes('lastName')}
      />
      <InputWidget
        onChange={validateField}
        type="email"
        value={email}
        required={true}
        placeholder="Email"
        name={'email'}
        onBlur={onBlur}
        invalid={invalidFields.includes('email')}
      />
      <InputWidget
        onChange={validateField}
        type="text"
        value={fullPhone}
        required={true}
        placeholder="322-22-12"
        name={'fullPhone'}
        maxLength={12}
        onBlur={onBlur}
        invalid={invalidFields.includes('fullPhone')}
      />
      <SubmitButton text={'Подать заявку'} />
    </form>
  );
}
