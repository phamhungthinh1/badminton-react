import {combineReducers} from 'redux';
import { ProductReducers } from "./productReducers";

export default combineReducers({
    product: ProductReducers
});