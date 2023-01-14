// tüm stateleri topladığım yer...
// combineReducer bütün stateleri yani reducerleri topladığımız alan
import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers(
    {
        cart : cartReducer,

    }
)

export default rootReducer;