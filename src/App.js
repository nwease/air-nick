import React from 'react';
import './App.css';
import Header from './components/Header';
import SearchPage from './pages/SearchPage';
import Home from './pages/Home';
import Footer from './components/Footer';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

function App() {
    return (
        <div className='app'>
            <Router>
                <Header />

                <Switch>
                    <Route path='/search'>
                        <SearchPage />
                    </Route>

                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>

                <Footer />
            </Router>
        </div>
    );
}

export default App;
