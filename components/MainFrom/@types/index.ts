import { Dispatch, SetStateAction } from 'react';

export type TMainForm = {
  className?: string;
  validateField: (props: TValidateFields) => void;
  sendData: (event: React.FormEvent<HTMLFormElement>) => void;
  fullData: {
    name: string;
    lastName: string;
    email: string;
    fullPhone: string;
  };
};

export type TValidateFields = {
  name: string;
  value: string;
};
