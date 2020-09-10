import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ResizeContextProvider from './useContextResize';
import { Navbar, Footer } from './components';
import { Home, Stories, Features, Pricing } from './mainPages';
import './App.scss';

const App = () => {
  return (
    <Router>
      <ResizeContextProvider>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/stories" component={Stories} />
            <Route exact path="/features" component={Features} />
            <Route exact path="/pricing" component={Pricing} />
          </Switch>
          <Footer />
        </div>
      </ResizeContextProvider>
    </Router> 
  )  
};

export default App;
