import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,Switch, Route
} from "react-router-dom";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Contact from "./Components/Contact";
import TableRes from "./Components/TableRes";
import Delivery from "./Components/Delivery";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/menu/:menu' exact component={Menu}/>
            <Route path='/contact' exact component={Contact}/>
          <Route path='/tableRes' exact component={TableRes}/>
          <Route path='/delivery' exact component={Delivery}/>






        </Switch>
      </Router>
    </div>
  );
}

export default App;
