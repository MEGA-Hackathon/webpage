import * as React from 'react';

declare const MDBTouch: React.FunctionComponent<{
  tag?: React.ComponentProps<any>;
  type?: 'swipe' | 'tap' | 'press' | 'pinch' | 'rotate' | 'pan';
  threshold?: number;
  allDirections?: boolean;
  pointers?: number;
  interval?: number;
  taps?: number;
  time?: number;
  [rest: string]: any;
}>;

export { MDBTouch as default };
