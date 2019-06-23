import {combineReducers} from 'redux';
import { ProductReducers } from "./productReducers";
import { ShoppingCartReducers } from "./shoppingCartReducers";

export default combineReducers({
    product: ProductReducers,
    shoppingCart: ShoppingCartReducers
});