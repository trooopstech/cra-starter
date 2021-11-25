import { Redirect, Route } from "react-router-dom";
import LandingPage from ".";
import NotFound from "./404";

interface RouteProps {
  path: string;
  exact?: boolean;
}

// route configuration
const routes: JSX.Element[] = [
  <Route key="index" exact path="/" component={LandingPage} />,
  <Route path="*" key="404">
    <NotFound />
  </Route>,
];

export default routes;
