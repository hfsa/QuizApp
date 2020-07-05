import React from "react"

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Quiz from "./quiz"
import Review from "./review"
import Result from "./result"

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Quiz}></Route>
                        <Route exact path="/quiz/review" component={Review}></Route>
                        <Route exact path="/quiz/result" component={Result}></Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;