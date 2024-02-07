import "./navbar.css"
import "../../styles/styles.css"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo">West Bestern</span>
            <div className="navItems">
            <button className="rounded-btn secondary-btn ">Login</button>
            <button className="rounded-btn primary-btn">Create an account</button>
            </div>

        </div>
    </div>
  )
}

export default Navbar
