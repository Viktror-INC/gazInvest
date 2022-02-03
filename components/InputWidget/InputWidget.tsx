import React from 'react';
import { TInputWidget } from './@types';
import styles from './InputWidget.module.scss';

export default function InputWidget(props: TInputWidget) {
  const {
    value,
    placeholder,
    name,
    maxLength,
    type,
    required = false,
    onChange,
  } = props;
  return (
    <div className={styles.inputWrap}>
      <input
        onChange={(event) =>
          onChange({
            name: event.currentTarget.name,
            value: event.currentTarget.value,
          })
        }
        className={styles.input}
        required={required}
        placeholder={placeholder}
        value={value}
        name={name}
        maxLength={maxLength}
        type={type}
      />
    </div>
  );
}
