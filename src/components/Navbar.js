// import logo from "../logo.svg";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Navbar = () => {
  return (
    <navbar>
      <nav className="navbar">
        <h1>
          {" "}
          <Link to="/">AK</Link>
        </h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/experience">Experience</Link>

          <Link to="/projects">Projects</Link>
          <Link to="/resume"><Button variant="outlined" style={{color:"aqua"}}>Resume</Button></Link>

        </div>
      </nav>
    </navbar>
  );
};
export default Navbar;
