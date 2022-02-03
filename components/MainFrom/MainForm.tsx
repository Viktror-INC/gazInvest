import classNames from 'classnames';
import React from 'react';
import InputWidget from '../InputWidget/InputWidget';
import SubmitButton from '../SubmitButton/SubmitButton';
import { TMainForm } from './@types';
import styles from './MainForm.module.scss';

export default function MainForm(props: TMainForm) {
  const { className } = props;
  return (
    <form id="form" className={classNames(styles.form, className)}>
      <h2>Начните зарабатывать на государственном газе!</h2>
      <InputWidget required={true} placeholder="Имя" />
      <InputWidget required={true} placeholder="Фамилия" />
      <InputWidget required={true} placeholder="Email" />
      <InputWidget required={true} placeholder="322-22-12" />
      <SubmitButton text={'Подать заявку'} />
    </form>
  );
}
