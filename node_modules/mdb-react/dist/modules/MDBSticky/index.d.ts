import * as React from 'react';

declare const MDBSticky: React.FunctionComponent<{
  className?: string;
  pill?: boolean;
  dot?: boolean;
  notification?: boolean;
  color?: string;
  tag?: React.ComponentProps<any>;
  [rest: string]: any;
}>;

export { MDBSticky as default };
