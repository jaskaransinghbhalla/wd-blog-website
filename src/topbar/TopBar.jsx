
import './topbar.css'

export default function TopBar() {
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
                <li className='topListItem'>HOME</li>
                <li className='topListItem'>ABOUT</li>
                <li className='topListItem'>CONTACT</li>
                <li className='topListItem'>WRITE</li>
                <li className='topListItem'>LOGOUT</li>
            </ul>
        </div>
        <div className='topRight'>
            <img 
            className='topImg'
            src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-male-employee-in-office-picture-id1309328823?b=1&k=20&m=1309328823&s=170667a&w=0&h=a-f8vR5TDFnkMY5poQXfQhDSnK1iImIfgVTVpFZi_KU=" 
            alt="" 
            />
            <i class="topSearchIcon fa-sharp fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
