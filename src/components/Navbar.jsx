import { Link } from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa"
import Logo from "../images/logo.svg"

const Navbar = () => {
  return (
    <div className='d-flex justify-content-between align-items-center py-3 px-5'>
        <img src={Logo} alt="" />
        <nav className="d-flex gap-3">
            <Link to="/" className="text-decoration-none text-white">About</Link>
            <Link to="/" className="text-decoration-none text-white">Careers</Link>
            <Link to="/" className="text-decoration-none text-white">Events</Link>
            <Link to="/" className="text-decoration-none text-white">Products</Link>
            <Link to="/" className="text-decoration-none text-white">Support</Link>
        </nav>
        {/* <div></div> */}
    </div>
  )
}

export default Navbar