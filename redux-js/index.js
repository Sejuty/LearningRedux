const redux = require("redux");
const reduxLogger = require("redux-logger")
const createStore = redux.legacy_createStore;
const combineReducers = redux.combineReducers
const applyMiddlewire = redux.applyMiddleware
const logger = reduxLogger.createLogger()

//type of action
const BUY_CAKE = "BUY_CAKE";
const BUY_DONUT = "BUY_DONUT";

//action
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}
//action
function buyDonut() {
  return {
    type: BUY_DONUT,
    info: "Action for Buying Donut",
  };
}

//STATE
// const initialState = {
//   numOfCakes: 10,
//   numOfDonut: 20,
// };
const initialDonutState = {
  numOfDonut: 20,
};
const initialCakeState = {
  numOfCakes: 10,
};

//reducers
const CakeReducer = (state = initialCakeState, action) => {
  //returns new  state
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};
const donutReducer = (state = initialDonutState, action) => {
  //returns new  state
  switch (action.type) {
    case BUY_DONUT:
      return {
        ...state,
        numOfDonut: state.numOfDonut - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: CakeReducer,
  donut: donutReducer
})

//STORE STATE
const store = createStore(rootReducer, applyMiddlewire(logger));
console.log("initial state", store.getState());

//to listen to any changes in the store
const unsubscribe = store.subscribe(() => {
  
});

//dispatch to update the state
//invoke action fuction
//when we dispatch the store the reducer sees the action is buycake()
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyDonut());
store.dispatch(buyDonut());
store.dispatch(buyCake());

unsubscribe();
