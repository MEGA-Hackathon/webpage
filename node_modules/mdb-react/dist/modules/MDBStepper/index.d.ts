import * as React from 'react';

declare const MDBStepper: React.FunctionComponent<{
  className?: string;
  linear?: boolean;
  formWizard?: boolean;
  noEditable?: boolean;
  mobileProgress?: boolean;
  mobile?: boolean;
  mobileBreakpoint?: any;
  outerState?: number;
  setOuterState?: React.SetStateAction<any>;
  prevOuterState?: number;
  setPrevOuterState?: React.SetStateAction<any>;
  vertical?: boolean;
  verticalBreakpoint?: any;
  tag?: React.ComponentProps<any>;
  [rest: string]: any;
}>;

export { MDBStepper as default };
