import axios from 'axios';
import classNames from 'classnames';
import _ from 'lodash';
import React, { useEffect, useMemo, useState } from 'react';
import InputWidget from '../InputWidget/InputWidget';
import SubmitButton from '../SubmitButton/SubmitButton';
import { TMainForm, TValidateFields } from './@types';
import styles from './MainForm.module.scss';

export default function MainForm(props: TMainForm) {
  const { className } = props;

  const [name, setName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [fullPhone, setFullPhone] = useState('');
  const [ip, setIP] = useState('');
  const [invalidFields, setInvalidFields] = useState<Array<string>>([]);

  /**Send User Data */
  const sendData = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (invalidFields.length) {
      return;
    }

    try {
      await axios({
        method: 'post',
        url: '/api/v3/integration?api_token=DrBh7gRtMIeAqdBKbwGim9On8fA3wNH8u3fiJ0s3OKbVGKjlSTPhJGhggFvU',
        data: {
          link_id: 1932,
          fname: `${name}`,
          email: `${email}`,
          fullphone: `${fullPhone}`,
          lname: `${lastName}`,
          source: `gaz-invest.app`,
          ip: `${ip}`,
          domain: `gaz-invest.app`,
        },
      });

      setName('');
      setlastName('');
      setEmail('');
      setFullPhone('');
    } catch (error) {
      console.log('error', error);
    }
  };

  /**Validate inputs in form */
  const validateField = (props: TValidateFields) => {
    let { value } = props;
    const { name } = props;
    switch (name) {
      case 'name':
        if (/[0-9_]/.test(value)) {
          return;
        }
        setName(value);
        break;
      case 'lastName':
        if (/[0-9_]/.test(value)) {
          return;
        }
        setlastName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'fullPhone':
        /**Testing Only Number with one + */
        if (/[^+0-9]/.test(value) || /^\+.*?\+/.test(value)) {
          return;
        }

        /**If namber dont have + in start string */
        if (/^[^\+]/.test(value)) {
          return setFullPhone('+' + value);
        }
        setFullPhone(value);
        break;
    }
  };

  /**Remove or add Invalid Fields */
  const checkValidFields = (name: string, value: string) => {
    const removeFields = invalidFields.filter((item) => item !== name);

    if (name == 'email') {
      /**if value mail remove from invalidFields*/
      if (/^.*?@.*?\../.test(value)) {
        return setInvalidFields(removeFields);
      }

      return setInvalidFields([...invalidFields, name]);
    }

    if (!value && !invalidFields.includes(name)) {
      return setInvalidFields([...invalidFields, name]);
    }
    /**if value empty remove */
    if (value) {
      setInvalidFields(removeFields);
    }
  };

  /**Validate fields on blur */
  const onBlur = (props: TValidateFields) => {
    const { name, value } = props;
    switch (name) {
      case 'name':
        checkValidFields(name, value);
        break;
      case 'lastName':
        checkValidFields(name, value);
        break;
      case 'email':
        checkValidFields(name, value);
        break;
      case 'fullPhone':
        checkValidFields(name, value);
        break;
    }
  };

  /**GET CLIENT IP */
  useEffect(() => {
    const getIP = async () => {
      const { data } = await axios({
        method: 'GET',
        url: 'https://ip.nf/me.json',
      });
      setIP(data.ip.ip);
    };

    getIP();
  }, []);

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
        placeholder="Номер телефона"
        name={'fullPhone'}
        maxLength={12}
        onBlur={onBlur}
        invalid={invalidFields.includes('fullPhone')}
      />
      <SubmitButton text={'Подать заявку'} />
    </form>
  );
}
