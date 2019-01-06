import { createStore } from 'redux';
import rootReducer from '../reducer'//takes index.js

const store = createStore(rootReducer);

export {store};