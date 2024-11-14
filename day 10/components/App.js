import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Destination from './components/Destination';
import About from './components/About';
import Contact from './components/Contact';
import RegistrationForm from './components/RegistrationForm';
import SubmittedForm from './components/SubmittedForm';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/destination" component={Destination} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/registration" component={RegistrationForm} />
                    <Route path="/submittedform" component={SubmittedForm} />
                    <Route path="*" component={Home} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
