import './App.css';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './components/About/About';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
