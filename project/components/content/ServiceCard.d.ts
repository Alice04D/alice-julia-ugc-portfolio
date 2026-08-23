export interface ServiceCardProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Row items rendered as label/value pairs, e.g. "1 video" / "£120" */
  items?: React.ReactNode[];
  price?: React.ReactNode;
  /** Ink card (default false = light surface card) */
  dark?: boolean;
}
