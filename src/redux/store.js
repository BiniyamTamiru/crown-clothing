import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import { createLogger } from "redux-logger";

import rootReducer from "./root-reducer";

const logger = createLogger();

export const store = createStore(
  rootReducer,
  applyMiddleware(logger)
);

export const persistor = persistStore(store);

export default { store, persistor };