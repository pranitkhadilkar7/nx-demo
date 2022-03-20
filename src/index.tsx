import { StrictMode } from "react"
import ReactDOM from "react-dom"
import "./styles/index.scss"
import { App } from "./App"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./store/store"

ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </Provider>,
  document.getElementById("root")
)
