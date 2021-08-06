import './NavBar.css'

const NavBar = ({ links }) => {

return (
    <div>
        <nav>
            <a className="nav-image" href="#page-top">
                <img src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg" alt="of icon"></img>
                 </a>
            <ul> 
                {links.map(link => <li>{link}</li>)}
            </ul>
        </nav>
    </div>
)
}
export default NavBar