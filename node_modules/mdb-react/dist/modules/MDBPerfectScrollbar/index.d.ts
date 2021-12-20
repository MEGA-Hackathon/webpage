import * as React from 'react';

declare const MDBScrollbar: React.FunctionComponent<{
  className?: string;
  tag?: React.ComponentProps<any>;
  sidenav?: boolean;
  handlers?: string[] | undefined;
  wheelSpeed?: number;
  wheelPropagation?: boolean;
  swipeEasing?: boolean;
  minScrollbarLength?: number;
  maxScrollbarLength?: number;
  scrollingThreshold?: number;
  useBothWheelAxes?: boolean;
  suppressScrollX?: boolean;
  suppressScrollY?: boolean;
  scrollXMarginOffset?: number;
  scrollYMarginOffset?: number;
  [rest: string]: any;
}>;

export { MDBScrollbar as default };
