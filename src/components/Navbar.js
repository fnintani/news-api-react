import "./style.css";

export default function Navbar(props) {
  return (
    <nav className="navbar">
      {/* <h4 className="app-name">NEWS APP</h4> */}
      <a className="app-name" onClick={props.handleClick} href="#">
        NEWS APP
      </a>
    </nav>
  );
}
