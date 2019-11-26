import React from 'react';
import Home from './pages/home/Home';
import OtherPage from './pages/other-page/OtherPage';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Routes extends React.Component {
  render() {
    return (
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
        <div>
          { this.props.pageTitle }
        </div>
        <Route path="/" exact="true" component={Home} />
        <Route path="/other-page" exact="true" component={OtherPage} />
      </BrowserRouter>
    )
  }
}

const mapStateToProps = state => ({
  pageTitle: state.pageTitle,
  pageContent: state.pageContent,
});
export default connect(mapStateToProps)(Routes);