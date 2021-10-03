import React, { FC, useCallback, useEffect } from "react";
import { Button, Img } from "../../../../../../../components";
import { buttonWeaveAnimation } from "../../../../../../../components/Button";
import { createTimeouts } from "../../../../../../../utils";
import css from "./style.module.scss";

interface Props {
  logo?: string;
  text: string;
  onClick: () => void;
}

const { pushTimeout, clearTimeouts } = createTimeouts();

const NavElement: FC<Props> = ({ onClick, text, logo }) => {
  const handleOnClick = useCallback(() => {
    pushTimeout(() => {
      onClick();
    }, buttonWeaveAnimation * 0.7);
  }, [onClick]);

  useEffect(() => {
    return () => {
      clearTimeouts();
    };
  }, []);
  return (
    <Button className={css.root} onClick={handleOnClick}>
      <Img src={logo || ""} alt={text} className={css.img} />
      <p className={css.text}>{text}</p>
    </Button>
  );
};

export default NavElement;
