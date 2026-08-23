export interface PhoneFrameProps {
  /** Video, image, or <image-slot> placeholder to show on the screen */
  children: React.ReactNode;
  /** Optional caption below the phone */
  caption?: string;
  /** Frame width in px; height derives from it. Default 240 */
  width?: number;
}
