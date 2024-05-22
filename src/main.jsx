import ReactDOM from "react-dom/client";
import AppRouter from "./routes/AppRouter";
import "./styles/universal.scss";
import "../fonts/fonts.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import  store from "./app/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter basename='/contraverso-project-frontend-7'>
      <AppRouter />
    </BrowserRouter>
  </Provider>
);
