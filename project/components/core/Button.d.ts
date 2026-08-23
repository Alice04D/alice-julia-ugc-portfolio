import * as React from 'react';
export interface ButtonProps {
  /** Button label / content */
  children: React.ReactNode;
  /** primary = solid ink fill by default; outline = transparent border that fills on hover (default) */
  variant?: 'primary' | 'outline';
  size?: 'md' | 'lg';
  /** Render as a link instead of a button */
  as?: 'button' | 'a';
  href?: string;
  onClick?: () => void;
  /** Show an animated trailing arrow */
  iconRight?: boolean;
}
