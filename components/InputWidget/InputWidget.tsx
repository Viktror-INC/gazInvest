import classNames from 'classnames';
import React from 'react';
import { TInputWidget } from './@types';
import styles from './InputWidget.module.scss';

export default function InputWidgetComponent(props: TInputWidget) {
  const {
    value,
    placeholder,
    name,
    maxLength,
    type,
    required = false,
    invalid,
    onChange,
    onBlur,
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
        onBlur={(event) =>
          onBlur({
            name: event.currentTarget.name,
            value: event.currentTarget.value,
          })
        }
        className={classNames(styles.input,{
          [styles.inpuError]:invalid
        })}
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

