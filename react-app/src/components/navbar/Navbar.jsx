import "./navbar.css"
import "../../styles/styles.css"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo">West Bestern</span>
            <div className="navItems">
            <button className="navButton secondary-btn">Login</button>
            <button className="navButton primary-btn">Create an account</button>
            </div>

        </div>
    </div>
  )
}

export default Navbar
