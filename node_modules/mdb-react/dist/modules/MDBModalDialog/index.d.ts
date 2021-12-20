import * as React from 'react';

declare const MDBModalDialog: React.FunctionComponent<{
  className?: string;
  centered?: boolean;
  frame?: boolean;
  position?: string;
  side?: boolean;
  size?: string;
  tag?: React.ComponentProps<any>;
  [rest: string]: any;
}>;

export { MDBModalDialog as default };
