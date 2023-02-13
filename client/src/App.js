import './App.css';
import { Provider } from "react-redux";
import store from "./store/index";
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from "./components/Home/Home";
import Game from "./components/Game/Game";
import Form from "./components/Form/Form"

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/"> <Landing /></Route>
        <Route exact path="/home"> <Home /></Route>
        <Route exact path="/home/:id"> <Game /></Route>
        <Route exact path="/form"> <Form /></Route>
      </Switch>
    </Provider>
  );
}

export default App;
