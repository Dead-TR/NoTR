import React, {
  FC,
  ImgHTMLAttributes,
  SyntheticEvent,
  useCallback,
  useRef,
  useState,
} from "react";
import clsx from "clsx";
import css from "./style.module.scss";
import { useListeners } from "../../hooks";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {}
const listeners: (keyof WindowEventMap)[] = [
  "scroll",
  "resize",
  "orientationchange",
];

export const Img: FC<Props> = ({ src, alt, className, onLoad, ...props }) => {
  const [srcUrl, setSrcUrl] = useState("");
  const [disabled, setDisabled] = useState(true);
  const imgRef = useRef<HTMLImageElement>(null);

  const customOnLoad = useCallback(
    (event: SyntheticEvent<HTMLImageElement, Event>) => {
      onLoad && onLoad(event);
      setDisabled(false);
    },
    [onLoad]
  );

  useListeners(
    listeners,
    () => {
      const imgCoordinates = imgRef.current?.getBoundingClientRect();
      if (
        imgCoordinates &&
        imgCoordinates.top >= 0 &&
        imgCoordinates.top <= window.innerHeight + window.pageYOffset &&
        imgCoordinates.left <= window.innerWidth + window.pageXOffset &&
        imgCoordinates.left >= 0
      ) {
        setSrcUrl(src || "");
      }
    },
    [imgRef, src]
  );
  return (
    <img
      ref={imgRef}
      src={srcUrl}
      alt={alt}
      {...props}
      className={clsx(className, css.img, disabled && css.img__disabled)}
      onLoad={customOnLoad}
    />
  );
};
