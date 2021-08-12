import About from './components/About'
import Shop from './components/Shop'
import Nav from './components/Nav'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/shop' component={Shop} />
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
