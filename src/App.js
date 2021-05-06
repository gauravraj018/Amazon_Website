import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51IRv9sIdlSkJm4p4RU6JnCAA3R7v14HadYSbFIaBJZX4ATFthvh5VdiPH01StRiaNt2QgjTqlGIppTf59Bo18YpW00hspkkpBb"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    ///only run whrn the app loads its (like "DYNAMIC if staement in Raect)
    //jaisde jhi app load hoga onAuthstatechnegd is listenenr active ho jaeya login ya logout ho
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        //user just logged in aur user ws logged in
        dispatch({
          //user login karega to data layer m daal denge jaise logout karega data layer se niakal denge
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is loggedout
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    //router ka istemaal hota hai route daalne k liye jaise "/" home route hota hai aur"/checkout" checkout page banata hai
    <Router>
      <div className="app">
        {/*switch ka istemmal hota haii switch karne k liye ek route se dussre route m*/}
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            {/*yaha par different page pass kar raha hhai jo load  kkarna ho */}
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
