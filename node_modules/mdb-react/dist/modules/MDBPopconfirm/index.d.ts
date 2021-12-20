import * as React from 'react';

declare const MDBPopconfirm: React.FunctionComponent<{
  className?: string;
  btnClassName?: string;
  btnChildren?: any;
  confirmBtnText?: string;
  cancelBtnText?: string;
  isOpen?: boolean;
  modal?: boolean;
  onClick?: any;
  placement?: string;
  popperTag?: React.ComponentProps<any>;
  setIsOpen?: React.SetStateAction<any>;
  tag?: React.ComponentProps<any>;
  [rest: string]: any;
}>;

export { MDBPopconfirm as default };
