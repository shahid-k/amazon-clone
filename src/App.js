import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path="/checkout">
      {/* Header */} <Header/>
      {/* Home */}  <h1>CHECKOUT</h1>
      </Route>

      <Route path="/">
      {/* Header */} <Header/>
      {/* Home */}  <Home/>
      </Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
