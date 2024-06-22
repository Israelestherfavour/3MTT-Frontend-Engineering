import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RepoList from './RepoList';
import RepoDetails from './RepoDetails';
import Header from './Header';
import Footer from './Footer';
import NotFound from './NotFound';
import ErrorBoundary from './ErrorBoundary'; // Add ErrorBoundary component

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <ErrorBoundary> {/* Wrap all routes with ErrorBoundary */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/repos" component={RepoList} />
            <Route path="/repos/:repoName" component={RepoDetails} />
            <Route component={NotFound} /> {/* 404 Route */}
          </Switch>
        </ErrorBoundary>
        <Footer />
      </div>
    </Router>
  );
};

const Home = () => {
  return (
    <div>
      <h1>Welcome to the GitHub Repositories App!</h1>
      <p>Explore GitHub repositories and details.</p>
    </div>
  );
};

export default App;
