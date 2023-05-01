import styles from "./Navbar.module.css";
import CartWidgetContainer from "../CartWidget/CartWidgetContainer";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
	return (
		<div>
			<nav class="navbar navbar-expand-lg bg-body-tertiary">
				<div class="container-fluid" className={styles.container}>
					<h1 class="navbar-brand">
						<Link to="/" className={styles.titulo}>
							POWDER
						</Link>
					</h1>
					<div class="collapse navbar-collapse" className={styles.paginas}>
						<ul class="navbar-nav">
							<Link class="nav-link" className={styles.link} to="/">
								Todo
							</Link>
							<Link class="nav-link" to="/category/mujer" className={styles.link}>
								Mujeres
							</Link>
							<Link class="nav-link" to="/category/hombr" className={styles.link}>
								Hombres
							</Link>
						</ul>
					</div>
					<CartWidgetContainer />
				</div>
			</nav>
			<Outlet />
		</div>
	);
}

export default Navbar;
