import * as React from 'react';

declare const MDBTimepicker: React.FunctionComponent<{
  className?: string;
  customValue?: string;
  inputLabel?: string;
  invalidLabel?: string;
  clearLabel?: string;
  submitLabel?: string;
  cancelLabel?: string;
  format?: '24h' | '12h';
  customIcon?: string;
  customIconSize?: string;
  btnIcon?: boolean;
  justInput?: boolean;
  noIcon?: boolean;
  defaultValue?: string;
  minHour?: number;
  maxHour?: number;
  maxTime?: string;
  minTime?: string;
  inline?: boolean;
  increment?: boolean;
  [rest: string]: any;
}>;

export { MDBTimepicker as default };
