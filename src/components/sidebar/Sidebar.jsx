import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidbarTitle">
          ABOUT ME
          <img src="https://images.unsplash.com/photo-1542840843-3349799cded6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c21hbGwlMjBzaXplfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" className="sideImage" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas excepturi veniam omnis odio cumque quia ai praesentium sequi eveniet, expedita repellat qui.</p>
          
          <div className="sideBarItem">
            <span className="sidebarTitle">
              CATERGORIES
            </span>
            <ul className="sidebarList">
              <li className="sidebarListItem">Life</li>
              <li className="sidebarListItem">Music</li>
              <li className="sidebarListItem">Style</li>
              <li className="sidebarListItem">Sport</li>
              <li className="sidebarListItem">Tech</li>
              <li className="sidebarListItem">Cinema</li>
            </ul>
          </div>

          <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
            <i class="topIcon fa-brands fa-facebook"></i>
            <i class="topIcon fa-brands fa-instagram"></i>
            <i class="topIcon fa-brands fa-twitter"></i>
            <i class="topIcon fa-brands fa-pinterest"></i>
          </div>


          </div>
        </span>
      </div>
      </div>
  )
}
