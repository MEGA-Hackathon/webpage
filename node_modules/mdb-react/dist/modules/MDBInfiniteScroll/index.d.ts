import * as React from 'react';

declare const MDBInfiniteScroll: React.FunctionComponent<{
  tag?: React.ComponentProps<any>;
  windowParent?: boolean;
  infiniteDirection?: string;
  [rest: string]: any;
}>;

export { MDBInfiniteScroll as default };
