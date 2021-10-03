import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { appPageList } from "configs/pages";

export const Page = () => {
  return (
    <>
      <main>
        <Router>
          <Switch>
            {appPageList.map(({ component, path, redirect }) => {
              if (component) {
                return <Route exact path={path} children={component} />;
              }
              if (redirect) {
                return <Redirect exact from={path} to={redirect} />;
              }

              return null;
            })}
          </Switch>
        </Router>
      </main>
    </>
  );
};
