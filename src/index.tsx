import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import AppRoute from "./pages/app";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

Sentry.init({
  dsn: "https://bb7103eba8cd43d398c1abe6d11cdce8@o1054055.ingest.sentry.io/6039146",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <>
    <ToastContainer />
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
