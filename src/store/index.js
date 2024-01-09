//A primeira etapa para configurar o Redux em nossa aplicação é criar a store. 

import { createStore } from "redux";

import counterReducer from "./reducer/counterRedux";

const store = createStore (counterReducer);

export default store;