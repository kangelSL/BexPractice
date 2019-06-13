import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import rootReducer from "../reducers/index";
import { initialState } from "../reducers/Data/Data";
import { logger } from "../middleware/index";
import { crashReporter } from "../middleware/index";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const rootReducer = combineReducers({
//     actionReducer,
//     form: formReducer
// });

const store = createStore(
    rootReducer,
    initialState,
    storeEnhancers(applyMiddleware(logger, crashReporter, thunk))
);

export default store;
