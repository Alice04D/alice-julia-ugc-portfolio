export interface SectionHeadingProps {
  /** Small uppercase label with dot+rule marker, e.g. "UGC EXAMPLES" */
  eyebrow?: string;
  title: React.ReactNode;
  align?: 'left' | 'center';
  /** Use on ink/dark section backgrounds */
  dark?: boolean;
  /** Override the heading font-size (CSS length); defaults to --text-h1 */
  titleSize?: string;
}
