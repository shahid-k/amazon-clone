import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout.js';
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
    <Header/>
      <Switch>
      <Route path="/checkout">
      {/* Checkout */} <Checkout/> 
      </Route>

      <Route path="/">
      {/* Home */}  <Home/>
      </Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
