import React from 'react';
import Home from './pages/home/Home';
import OtherPage from './pages/other-page/OtherPage';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <nav>
        <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/other-page">Other Page</Link>
        </li>
        </ul>
    </nav>
    <Route path="/" exact="true" component={Home} />
    <Route path="/other-page" exact="true" component={OtherPage} />
  </BrowserRouter>
);

export default Routes;