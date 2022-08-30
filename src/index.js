
import ReactDOM from "react-dom/client"
import App from "./components/App"
import "./assets/css/index.css"

import reloader from "./components/tools/reloader"

reloader(500)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)