import { createStore } from "redux";
import { cartReducer } from "./reducer"; // правильна назва файлу

export const store = createStore(cartReducer); // named export