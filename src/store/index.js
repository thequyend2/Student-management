import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducer";
import sagas from "../containers/studentManagementPage/sagas";

const sagaMiddleware = createSagaMiddleware();

const rootStore = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);
export default rootStore;
