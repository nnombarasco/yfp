import './Navbar.css'
import Cart from "../cart/cart";

const Navbar = () =>{
	return (
		<nav className="Navbar">
			<div>
				<h1>Your Favorite Page</h1>
			</div>
			<div className="btnDerecha">
				<Cart />
				<button>Celulares</button>
				<button>Tablets</button>
				<button>Notebooks</button>
				<button>Accesorios</button>
			</div>
		</nav>
	)
}

export default Navbar