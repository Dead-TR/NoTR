import React, { FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { appPageList } from "configs/pages";
import css from "./style.module.scss";

export const Page: FC = () => {
  return (
    <>
      <main className={css.root}>
        <Switch>
          {appPageList.map(({ component, path, redirect }) => {
            if (component) {
              return <Route exact path={path} component={component} />;
            }
            if (redirect) {
              return <Redirect exact from={path} to={redirect} />;
            }

            return null;
          })}
        </Switch>
      </main>
    </>
  );
};
