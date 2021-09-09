import { Route } from "react-router-dom";
import Layout from "../layouts";
import { RouteProps } from "./Type";

const DefaultRoute = ({ children, layout, ...rest } = RouteProps) => {
  const LayoutTemplate = Layout(layout);

  return (
    <Route
      {...rest}
      render={() => <LayoutTemplate>{children}</LayoutTemplate>}
    ></Route>
  );
};

export default DefaultRoute;
