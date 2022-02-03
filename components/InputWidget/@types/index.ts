import { Dispatch, SetStateAction } from 'react';
import { TValidateFields } from '../../MainFrom/@types';

export type TInputWidget = {
  placeholder: string;
  required: boolean;
  onChange: (props: TValidateFields) => void;
  value: string;
  name?: string;
  maxLength?: number;
  type: string;
};
