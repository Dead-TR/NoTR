import React, {
  FC,
  ImgHTMLAttributes,
  SyntheticEvent,
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

  const customOnLoad = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    onLoad && onLoad(event);
    setDisabled(false);
  };

  useListeners(
    listeners,
    () => {
      const img = imgRef.current;
      if (
        img &&
        img.offsetTop < window.innerHeight + window.pageYOffset &&
        img.offsetLeft < window.innerWidth + window.pageXOffset &&
        img.offsetLeft > 0
      ) {
        setSrcUrl(src || "");
      }
    },
    [imgRef]
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
