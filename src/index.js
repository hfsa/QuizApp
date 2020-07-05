import React from "react"
import ReactDOM from "react-dom"

import {Provider} from "react-redux"
import {createStore} from "redux"

import App from "./app.js"

import rootReducer from "./bank/reducer"

let store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById("root"));