export interface NavLinkProps {
  children: React.ReactNode;
  href?: string;
  /** Force the underline visible (current section) */
  active?: boolean;
  /** Use on dark/ink backgrounds */
  dark?: boolean;
}
