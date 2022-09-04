
import './topbar.css'
import { Link } from "react-router-dom";
export default function TopBar() {
  const user = true;
  return (
    <div className="top">

        <div className='topLeft'>
            <i class="topIcon fa-brands fa-facebook"></i>
            <i class="topIcon fa-brands fa-instagram"></i>
            <i class="topIcon fa-brands fa-twitter"></i>
            <i class="topIcon fa-brands fa-pinterest"></i>
        </div>

        <div className='topCenter'>
            <ul className='topList'>
                <li className='topListItem'><Link to="/" className='link'>HOME</Link></li>
                <li className='topListItem'><Link to="/" className='link'>ABOUT</Link></li>
                <li className='topListItem'><Link to="/" className='link'>CONTACT</Link></li>
                <li className='topListItem'><Link to="/write" className='link'>WRITE</Link></li>
                <li className='topListItem'><Link to="/" className='link'>{user && 'LOGOUT'}</Link></li>
            </ul>
        </div>
        <div className='topRight'>
            {user ? (
                <img 
                className='topImg'
                src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-male-employee-in-office-picture-id1309328823?b=1&k=20&m=1309328823&s=170667a&w=0&h=a-f8vR5TDFnkMY5poQXfQhDSnK1iImIfgVTVpFZi_KU=" 
                alt="" 
                />
            ):
            (   <ul className='topList'>
                <li className='topListItem'><Link to="/login" className='link'>LOGIN</Link></li>    
                <li className='topListItem'><Link to="/register" className='link'>REGISTER</Link></li>    
                </ul>
                
            )}
            
            <i class="topSearchIcon fa-sharp fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
