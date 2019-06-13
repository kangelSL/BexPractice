// import { createStore, applyMiddleware, compose, combineReducers } from "redux";
// import rootReducer from "../reducers/root";
// import { initialState } from "../reducers/Data/Data";
// import { logger } from "../middleware/index";
// import { crashReporter } from "../middleware/index";
// import thunk from "redux-thunk";

// const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//   rootReducer,
//   storeEnhancers(applyMiddleware(logger, crashReporter, thunk))
// );

// export default store;

import { createStore } from "redux";
import rootReducer from "../reducers/index";

const store = createStore(rootReducer);

export default store;
