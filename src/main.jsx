import { render } from "preact";
import { App } from "./app.jsx";
import "./styles/normalize.css";
import "./styles/vars.css";
import "./styles/index.css";

render(<App />, document.getElementById("app"));
