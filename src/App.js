import ForgotPassword from "Components/Auth/ForgotPassword";
import SignIn from "Components/Auth/SignIn";
import SignUp from "Components/Auth/SignUp";
import Settings from "Components/Settings";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "./App.css";
import Contact from "./Components/Contact";
import Delivery from "./Components/Delivery";
import DeliveryAddress from "./Components/DeliveryAddress";
import DeliveryTime from "./Components/DeliveryTime";
import ExistingAddress from "./Components/ExistingAddress";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import OrdersReceived from "./Components/Orders/OrdersReceived";
import OrderSummary from "./Components/Orders/OrderSummary";
import Payment from "./Components/Payment";
import TableRes from "./Components/TableRes";
import { useRestaurantContext } from "Context/restaurantContext";
import ResetPassword from "Components/Auth/ResetPassword";
import NewPassword from "Components/Auth/NewPassword";
import StripeElementsWrapper from "Components/StripeElementsWrapper/StripeElementsWrapper";

function App() {
  const { token } = useRestaurantContext();

  return (
    <StripeElementsWrapper>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/menu/:menu" exact component={Menu} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/tableRes" exact component={TableRes} />
            <Route path="/delivery" exact component={Delivery} />
            <Route path="/signIn" exact component={SignIn} />
            <Route path="/signUp" exact component={SignUp} />
            <Route path="/forgotPassword" exact component={ForgotPassword} />
            <Route path="/resetPassword/:id" exact component={ResetPassword} />
            <Route
              path="/newPassword/:id/:code"
              exact
              component={NewPassword}
            />
            {token ? (
              <>
                <Route path="/profile" exact component={Settings} />
                <Route
                  path="/deliveryAddress"
                  exact
                  component={DeliveryAddress}
                />
                <Route
                  path="/ordersreceived/:id"
                  exact
                  component={OrdersReceived}
                />
                <Route path="/order/summary" exact component={OrderSummary} />
                <Route path="/deliveryTime" exact component={DeliveryTime} />
                <Route path="/payment" exact component={Payment} />
                <Route
                  path="/chooseAddress"
                  exact
                  component={ExistingAddress}
                />
              </>
            ) : (
              <Redirect to="/" />
            )}
          </Switch>
        </Router>
      </div>
    </StripeElementsWrapper>
  );
}

export default App;
