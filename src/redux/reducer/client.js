import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk"
import axios from "axios"

const initialState = {
  fetching: false,
  fetched: null,
  menu: [],
  error: null
}

const reducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_MENU_START": {
      return {...state, fetching: true}
      break;
    }
    case "FETCH_MENU_ERROR": {
      return {...state, fetching: false, error: action.payload}
      break;
    }
    case "RECIEVED_MENU": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload,
      }
      break;
    }
  }
  return state
}

const middleware = applyMiddleware(thunk,logger());
const store = createStore(reducer, middleware)

store.dispatch((dispatch) => {
  dispatch({type: "FETCH_MENU_START"})
  axios.get("http://rest.learncode.academy/api/wstern/user")
    .then((response) => {
      dispatch({type: "RECIEVED_MENU", payload: response.data})
    })
    .catch((err) => {
      dispatch({type: "FETCH_MENU_ERROR",payload: err})
    })
  //do something
  dispatch({type: "BAR"})
})