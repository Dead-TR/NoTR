import {
  ButtonHTMLAttributes,
  FC,
  MouseEvent,
  useCallback,
  useMemo,
  useState,
} from "react";
import clsx from "clsx";

import css from "./style.module.scss";
import { createTimeouts, throttle } from "../../utils";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  upperCase?: boolean;
}

interface ClickAnimation {
  x: number;
  y: number;
}

const { clearTimeouts, pushTimeout } = createTimeouts();

export const Button: FC<Props> = ({
  upperCase,
  className,
  onClick,
  children,
  ...props
}) => {
  const [clickAnimation, setClickAnimation] = useState<ClickAnimation | null>(
    null
  );
  const disableClickAnimation = useCallback(() => {
    setClickAnimation(null);
  }, []);

  const wait = useMemo(
    () =>
      throttle(() => {
        disableClickAnimation();
        clearTimeouts();
      }, 300),
    []
  );

  const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(event);
    wait();

    const { clientX, clientY, currentTarget } = event;

    pushTimeout(() => {
      setClickAnimation({
        x: clientX - currentTarget.offsetLeft,
        y: clientY - currentTarget.offsetTop,
      });
    });
  };
  return (
    <button
      {...props}
      className={clsx(
        className,
        css.Button,
        upperCase && css.Button__upperCase
      )}
      onClick={handleOnClick}
    >
      <span
        className={clsx(
          css.Button_waveAnimation,
          clickAnimation && css.Button_waveAnimation__play
        )}
        style={{
          left: clickAnimation?.x,
          top: clickAnimation?.y,
        }}
        onAnimationEnd={disableClickAnimation}
      />
      {children}
    </button>
  );
};
