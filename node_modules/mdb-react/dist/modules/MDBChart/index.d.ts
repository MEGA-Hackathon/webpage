import * as React from 'react';

declare const MDBChart: React.FunctionComponent<{
  type: 'bar' | 'line' | 'pie' | 'doughnut' | 'polarArea' | 'radar' | 'bubble' | 'scatter';
  options?: Record<string, unknown>;
  [rest: string]: any;
}>;

export { MDBChart as default };
