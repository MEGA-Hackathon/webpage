import * as React from 'react';

declare const MDBSideNav: React.FunctionComponent<{
  className?: string;
  color?: string;
  isOpen?: boolean;
  light?: boolean;
  bgColor?: string;
  relative?: boolean;
  absolute?: boolean;
  right?: boolean;
  slim?: boolean;
  slimCollapsed?: boolean;
  backdrop?: boolean;
  mode?: 'over' | 'side' | 'push' | string;
  accordion?: boolean;
  closeOnEsc?: boolean;
  constant?: boolean;
  [rest: string]: any;
}>;

export { MDBSideNav as default };
