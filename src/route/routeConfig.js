import Loadable from "react-loadable";

const loading = { loading: props => (props.error ? "Error" : "Loading") };

const routesConfig = [
  {
    path: "/",
    component: Loadable({
      loader: () => import("../pages/Login"),
      ...loading
    })
  },
  {
    path: "/dashboard",
    component: Loadable({
      loader: () => import("../pages/Dashboard"),
      ...loading
    })
  }
];

export default routesConfig;
