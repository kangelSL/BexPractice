import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import { logger } from "../middleware/index";
import { crashReporter } from "../middleware/index";
import thunk from "redux-thunk";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(logger, crashReporter, thunk))
);

export default store;
