import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import HookDonutContainer from "./components/HookDonutContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import HookItemContainer from "./components/HookItemContainer";
import UserContainer from "./components/UserContainer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer/> */}

        {/* <HooksCakeContainer /> */}
        {/* <HookDonutContainer /> */}
        {/* <NewCakeContainer /> */}
        {/* <HookItemContainer cake /> */}
        {/* <HookItemContainer /> */}
        {/* <ItemContainer cake />
        <ItemContainer /> */}
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
