import "./style.css";

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <h4 className="app-name">NEWS APP</h4>
      <a className="link-home" onClick={props.handleClick} href="#">
        Home
      </a>
    </nav>
  );
}
