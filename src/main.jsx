import ReactDOM from "react-dom/client";
import AppRouter from "./routes/AppRouter";
import "./styles/universal.scss";
import "../fonts/fonts.css";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </Provider>
);
