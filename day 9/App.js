import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Singers from './components/Singers';
import Albums from './components/Albums';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/singers" component={Singers} />
                    <Route path="/albums" component={Albums} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
