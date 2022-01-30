import React from 'react';
import { TInputWidget } from './@types';
import styles from './InputWidget.module.scss'

export default function InputWidget(props:TInputWidget) {
    const {placeholder, required = false} = props
  return <div className={styles.inputWrap}>
    <input className={styles.input} required={required} placeholder={placeholder}/>
  </div>;
}
