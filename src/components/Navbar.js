import "./style.css"

export default function Navbar(props) {
	return (
		 <nav className="navbar">
            <a className="link-home" onClick={props.handleClick} href="#">Home</a>
         </nav>
	)
}