import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import NavBar from './components/layout/NavBar';
import {BrowserRouter, Route, Router, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={ContactPage} />
        </Switch>
      </div>
    </Router>  
  );
}

export default App;
