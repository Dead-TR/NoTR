import React, { DetailedHTMLProps, FC } from "react";

import { Color } from "components";
import { DefaultCardColors } from "components/Card";

import css from "./style.module.scss";

interface Props {
  onChange: (v: string) => void;
}
interface ColorProps
  extends DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  color: string;
}

const DefaultColor: FC<ColorProps> = ({ color, ...props }) => (
  <div className={css.defaultColor} style={{ background: color }} {...props} />
);

const ColorSelect: FC<Props> = ({ onChange }) => {
  return (
    <div className={css.root}>
      <div className={css.box}>
        <p className={css.text}>Select Color:</p>
        <div className={css.defaultColorsList}>
          {Object.values(DefaultCardColors).map((color) => {
            return (
              <DefaultColor color={color} onClick={() => onChange(color)} />
            );
          })}
        </div>
      </div>
      <div className={css.box}>
        <p className={css.text}>Or create custom:</p>
        <Color defaultColor={DefaultCardColors.blue} onChange={onChange} />
      </div>
    </div>
  );
};

export default ColorSelect;
