import { combineReducers } from "redux";
import data from "./data";



function MenuReducer(state = data, action ) {
  switch(action.type) {
    case "DATA_IMPORT": {
      return {
        ...state
      }
    }
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  menu: MenuReducer
})

export default rootReducer;
