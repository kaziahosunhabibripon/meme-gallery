import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Stats from './components/Stats/Stats';
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/stats">
          <Stats />
        </Route>
        <Route path="*">
          <Home />
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
