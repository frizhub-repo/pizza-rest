import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Contact from "./Components/Contact";
import TableRes from "./Components/TableRes";
import Delivery from "./Components/Delivery";
import Profile from "./Components/Profile";
import DeliveryAddress from "./Components/DeliveryAddress";
import OrdersReceived from "./Components/Orders/OrdersReceived";
import DeliveryTime from "./Components/DeliveryTime";
import Payment from "./Components/Payment";
import ExistingAddress from "./Components/ExistingAddress";
import OrderSummary from "./Components/Orders/OrderSummary";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu/:menu" exact component={Menu} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/tableRes" exact component={TableRes} />
          <Route path="/delivery" exact component={Delivery} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/deliveryAddress" exact component={DeliveryAddress} />
          <Route path="/ordersreceived" exact component={OrdersReceived} />
          <Route path="/order/summary" exact component={OrderSummary} />
          <Route path="/deliveryTime" exact component={DeliveryTime} />
          <Route path="/payment" exact component={Payment} />
          <Route path="/chooseAddress" exact component={ExistingAddress} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
