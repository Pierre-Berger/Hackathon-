import React from "react";
import ReactDOM from "react-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import App from "./App";

const stripePromise = loadStripe(
  "pk_test_51JuH6IFh0FGrOEPdXe9PjOU0PT5Lz2lzkqU3ZBgEHsCuGa7HmhxDBRLJzuYlqtw9cIaeS36dNe8uJP1Lc2R0VGaK00w6VsLytB"
);

ReactDOM.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </React.StrictMode>,
  document.getElementById("root")
);
