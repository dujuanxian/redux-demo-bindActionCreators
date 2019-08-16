import './styles.css';
import { createStore, combineReducers, bindActionCreators } from 'redux';

const addReducer = (state = { value: 1 }, action) => {
  if (action.type === 'ADD') {
    return {
      ...state,
      value: state.value + action.payload.value
    };
  }
  return state;
};

const minusReducer = (state = { value: 2 }, action) => {
  if (action.type === 'MINUS') {
    return {
      ...state,
      value: state.value - action.payload.value
    };
  }
  return state;
};

const addActionCreator = value => {
  return { type: 'ADD', payload: { value: value } };
};

const minusActionCreator = value => {
  return { type: 'MINUS', payload: { value: value } };
};

const reducers = combineReducers({
  add: addReducer,
  minus: minusReducer
});
const store = createStore(reducers);

bindActionCreators(
  {
    addActionCreator,
    minusActionCreator
  },
  store.dispatch
);

store.dispatch(addActionCreator(1));
store.dispatch(minusActionCreator(1));
console.log(store.getState());
