import React from "react";
import styles from "./CartWidget.module.css";

const CartWidget = ({ numeroDeCompras }) => {
	return (
		<div>
			<img src="https://cdn-icons-png.flaticon.com/512/2211/2211008.png" alt="carrito" className={styles.carritoImagen} />
			<div className={styles.numeroDeCompras}>{numeroDeCompras}</div>
		</div>
	);
};

export default CartWidget;
