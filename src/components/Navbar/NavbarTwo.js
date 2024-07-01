
import { Link } from 'react-router-dom'
import './NavbarTwo.css'


const NavbarTwo=()=>{
    
return(
    <nav className="navbar-two">
        <h1 className="site-title" >Site Name</h1>
        <ul style={{listStyleType:'none',display:'flex',padding:'0px',margin:'0px'}}>
            <li className="active"  style={{color:'white',padding:'5px'}}><Link className='links'  to="/">Home</Link></li>
            <li  style={{color:'white',padding:'5px'}}><Link className='links'  to="/pricing">buy Product</Link></li>
            <li  style={{color:'white',padding:'5px'}}><Link className='links' to="/about">about</Link></li>
        </ul>
    </nav>
)
}
export default NavbarTwo