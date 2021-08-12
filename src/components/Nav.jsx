import { Link } from 'react-router-dom'


function Nav() {
  const navStyle = {
    color: 'white',
  };
  return (
    <div>
        <h3><Link to='/'>Logo</Link></h3>
        <ul>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/shop'>Shop</Link></li>
        </ul>
      
    </div>
  );
}

export default Nav;
