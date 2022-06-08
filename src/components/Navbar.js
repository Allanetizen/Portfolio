import logo from "../logo.svg";

function Navbar() {
  return (
    <div className="nav">
      <header className="header">
        <img src={logo} className="nav-logo" alt="logo" />
        <ul>
          <li>About</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </header>
    </div>
  );
}
export default Navbar;