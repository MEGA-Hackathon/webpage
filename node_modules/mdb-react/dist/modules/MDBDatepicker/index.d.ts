import * as React from 'react';

declare const MDBDatepicker: React.FunctionComponent<{
  closeOnEsc?: boolean;
  filter?: (date: Date) => any;
  inline?: boolean;
  inputClasses?: string;
  format?: string;
  min?: Date;
  max?: Date;
  options?: any;
  value: string;
  setValue: React.SetStateAction<any>;
  clearBtnText?: string;
  cancelBtnText?: string;
  okBtnText?: string;
  inputToggle?: boolean;
  icon?: React.ReactChild;
  inputLabel?: string;
  inputStyle?: React.CSSProperties;
  startDay?: number;
  title?: string;
  weekdaysShort?: Array<string>;
  monthsShort?: Array<string>;
  monthsFull?: Array<string>;
  weekdaysNarrow?: Array<string>;
  weekdaysFull?: Array<string>;
  views?: 'days' | 'months' | 'years';
  style?: React.CSSProperties;
  [rest: string]: any;
}>;

export { MDBDatepicker as default };
