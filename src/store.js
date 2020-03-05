import { createStore, combineReducers } from "redux";
import { reducer as LoginReducer } from "./pages/Login";
import { reducer as DashboardReducer } from "./pages/Dashboard";

const reducers = combineReducers({
  login: LoginReducer,
  dashboard: DashboardReducer
});

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
