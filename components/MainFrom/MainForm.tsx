import classNames from 'classnames';
import React from 'react';
import InputWidget from '../InputWidget/InputWidget';
import SubmitButton from '../SubmitButton/SubmitButton';
import { TMainForm } from './@types';
import styles from './MainForm.module.scss'

export default function MainForm(props:TMainForm) {
  const {className} = props
  return <form id="form" className={classNames(styles.form, className)}>
  <h2>Начните зарабатывать на государственном газе!</h2>
  <InputWidget required={true} placeholder="Имя" />
  <InputWidget required={true} placeholder="Фамилия" />
  <InputWidget required={true} placeholder="Email" />
  <div className={styles.selectWidget}>
    <select defaultValue={"DEFAULT"}>
      <option value="DEFAULT" disabled>
        Choose a salutation ...
      </option>
      <option value="1">Mr</option>
      <option value="2">Mrs</option>
      <option value="3">Ms</option>
      <option value="4">Miss</option>
      <option value="5">Dr</option>
    </select>
    <InputWidget required={true} placeholder="322-22-12" />
  </div>
  <SubmitButton text={'Подать заявку'}/>
</form>;
}
