import { createStore, applyMiddleware } from "redux";
import { reducer } from "./reducer";
const reduxThunk = require("redux-thunk").default;

const store = createStore(reducer, applyMiddleware(reduxThunk));

export default store;
