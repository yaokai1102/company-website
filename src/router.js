import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './pages/memberHome/App'

export default function MyRouter() {
    <Router>
        <Switch>
            <Route exact path='/' component={App}></Route>
        </Switch>
    </Router>
}