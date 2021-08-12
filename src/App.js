import About from './components/About'
import Shop from './components/Shop'
import Nav from './components/Nav'
import SingleProduct from './components/SingleProduct'

import './index.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/shop' exact component={Shop} />
          <Route path='/shop/:productId' component={ SingleProduct } />
          </Switch>
      </div>  
    </Router>
  );
}

const Home = () =>{
  return(
    <div>
      <h1>Home Page</h1>
    </div>
)}


export default App;
