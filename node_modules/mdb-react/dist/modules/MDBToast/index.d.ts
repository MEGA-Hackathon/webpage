import * as React from 'react';

declare const MDBToast: React.FunctionComponent<{
  className?: string;
  position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
  color?: string;
  width?: number | number;
  offset?: number;
  appendToBody?: boolean;
  show?: boolean;
  whiteCloseBtn?: boolean;
  bodyClasses?: string;
  headerClasses?: string;
  closeBtnClasses?: string;
  [rest: string]: any;
}>;

export { MDBToast as default };
