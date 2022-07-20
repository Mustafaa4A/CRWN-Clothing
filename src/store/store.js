import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const middleware = [logger];
const composedEnhancers = compose(applyMiddleware(...middleware));

export const staore = createStore(rootReducer, undefined, composedEnhancers);
