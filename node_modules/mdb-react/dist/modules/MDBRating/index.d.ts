import * as React from 'react';

declare const MDBRating: React.FunctionComponent<{
  className?: string;
  active?: number;
  dynamic?: boolean;
  setActive?: React.SetStateAction<any>;
  tag?: React.ComponentProps<any>;
  [rest: string]: any;
}>;

export { MDBRating as default };
