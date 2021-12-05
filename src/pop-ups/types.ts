export type PopUpFrameBackground = "transparent" | "dark";

export interface PopUpWrapperProps {
  background?: PopUpFrameBackground;
  frameOnClick?: () => void;

  classes?: {
    root?: string;
    frame?: string;
    paper?: string;
  };
}
