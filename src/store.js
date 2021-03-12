// modularize this outside of our main index.js or app.js files

import allReducers from "./utils/reducers/index";
import { createStore } from "redux";

const store = createStore(allReducers);

export default store;
