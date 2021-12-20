import * as React from 'react';

declare const MDBLazyLoading: React.FunctionComponent<{
  className?: string;
  video?: boolean;
  lazyOffset?: number;
  lazySrc?: string;
  lazyError?: string;
  lazyDelay?: number;
  lazyPlaceholder?: string;
  [rest: string]: any;
}>;

export { MDBLazyLoading as default };
