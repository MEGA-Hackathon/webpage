import * as React from 'react';

declare const MDBLightbox: React.FunctionComponent<{
  className?: string;
  fontAwesome?: 'pro' | 'free';
  zoomLevel?: number;
  [rest: string]: any;
}>;

export { MDBLightbox as default };
