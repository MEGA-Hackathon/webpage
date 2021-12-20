import * as React from 'react';

declare const MDBSelect: React.FunctionComponent<{
  className?: string;
  pill?: boolean;
  dot?: boolean;
  notification?: boolean;
  color?: string;
  tag?: React.ComponentProps<any>;
  clearBtn?: boolean;
  searchLabel?: string;
  noResultLabel?: string;
  size?: 'default' | 'lg' | 'sm';
  validation?: boolean;
  validFeedback?: string;
  invalidFeedback?: string;
  optionSelected?: string;
  optionsSelectedLabel?: string;
  inputClassName?: string;
  [rest: string]: any;
}>;

export { MDBSelect as default };
