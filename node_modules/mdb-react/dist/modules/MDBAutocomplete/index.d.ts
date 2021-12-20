import * as React from 'react';

declare const MDBAutocomplete: React.FunctionComponent<{
  className?: string;
  customContent?: any;
  dataFilter: any;
  displayValue?: any;
  inputValue?: string;
  itemContent?: any;
  noResults?: string;
  setInputValue?: React.SetStateAction<any>;
  threshold?: number;
  tag?: React.ComponentProps<any>;
  [rest: string]: any;
}>;

export { MDBAutocomplete as default };
