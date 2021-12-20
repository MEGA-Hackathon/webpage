import * as React from 'react';

declare const MDBAlert: React.FunctionComponent<{
  className?: string;
  position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
  color?: string;
  width?: number | number;
  offset?: number;
  appendToBody?: boolean;
  show?: boolean;
  stacking?: boolean;
  [rest: string]: any;
}>;

export { MDBAlert as default };
