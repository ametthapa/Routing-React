import { Link } from 'react-router-dom'


const Nav= () =>{

  return (
    <div className="flex justify-around bg-gray-200 h-24 items-center">
        <h3 className="text-3xl"><Link to='/'>Logo</Link></h3>
        <ul className="flex justify-around w-2/4 items-center">
            <li className="hover:text-red-300"><Link to='/about'>About</Link></li>
            <li className="hover:text-red-300"><Link to='/shop'>Shop</Link></li>
        </ul>
      
    </div>
  );
}

export default Nav;
