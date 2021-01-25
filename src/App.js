import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import './App.scss';
import { Ships } from './pages/Ships/Ships';
import { Rockets } from './pages/Rockets/Rockets';
import { Nav } from './components/Nav/Nav';
import { Footer } from './components/Footer/Footer';

function App() {
    return (
        <Router>
            <div className="layout">
                <header>
                    <Nav />
                </header>
                <main>
                    <div className="container">
                        <Switch>
                            <Route exact path="/">
                                <Ships />
                            </Route>
                            <Route path="/rockets">
                                <Rockets />
                            </Route>
                        </Switch>
                    </div>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
