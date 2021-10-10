import {
  ButtonHTMLAttributes,
  FC,
  MouseEvent,
  useCallback,
  useMemo,
  useState,
} from "react";
import clsx from "clsx";

import { createTimeouts, throttle } from "utils";

import css from "./style.module.scss";

export const buttonWeaveAnimation = 700;

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  upperCase?: boolean;
  active?: boolean | { className: string };
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
  active,
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
      const targetRect = currentTarget.getBoundingClientRect();
      setClickAnimation({
        x: clientX - targetRect.left,
        y: clientY - targetRect.top,
      });
    });
  };
  return (
    <button
      {...props}
      className={clsx(
        className,
        css.Button,
        upperCase && css.Button__upperCase,
        active && css.Button__active,
        typeof active === "string" && active
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
