import { applyMiddleware, createStore } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";

const store = createStore(
    reducer,
    window._REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_(),
    applyMiddleware(thunk)
)

export default store;