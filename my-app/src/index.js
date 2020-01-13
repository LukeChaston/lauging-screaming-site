import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import laughing from "./laughing";
import screaming from "./screaming";
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


class routing extends React.Component {
    render() {
        return(
            <Router>
            <div name="nav">
            <ul>
            <li>
                <Link to="/">Blank</Link>
            </li>

            <li>
                 <Link to="/">Laughing</Link>
            </li>

            <li>
                <Link to="/">Screaming</Link>
            </li>

               </ul>
            <Switch>
                    <Route exact path='/' component={ App }/>
                     <Route path='/laughing' component={ laughing }/>
                   <Route path='/screaming' component={ screaming }/>
        </Switch>
            </div>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

