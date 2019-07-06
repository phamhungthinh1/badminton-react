import {combineReducers} from 'redux';
import { ProductReducers } from "./productReducers";
import { SearchReducers } from "./searchReducers";

export default combineReducers({
    product: ProductReducers,
    search: SearchReducers
});