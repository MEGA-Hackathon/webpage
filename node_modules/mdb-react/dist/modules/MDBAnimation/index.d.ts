import * as React from 'react';

declare const AnimationProps: React.FunctionComponent<{
  animation?: string;
  animationRef?: React.RefObject<HTMLElement>;
  runOnce?: boolean;
  delay?: number;
  reset?: boolean;
  duration?: number;
  enableTarget?: boolean;
  infinite?: boolean;
  target?: boolean;
  repeatOnScroll?: boolean;
  start?: string;
  className?: string;
  tag?: React.ComponentProps<any>;
  [rest: string]: any;
}>;

export { AnimationProps as default };
