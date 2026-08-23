export interface IconListItemProps {
  /** Icon image URL (e.g. a Simple Icons CDN link) or a React node */
  icon: string | React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
}
