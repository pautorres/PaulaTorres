import React from "react";
import styles from "./ItemDetail.module.css";
import { Link } from "react-router-dom";

export const ItemDetail = ({ product, onAdd }) => {
	return (
		<div>
			<div className={styles.containerItemDetail}>
				<div className={styles.containerImage}>
					<img src={product.img} alt="producto" />
				</div>

				<div className={styles.containerDetail}>
					<h1>{product.title}</h1>
					<h2>
						<span style={{ fontSize: "23px" }}>{product.description}</span>
					</h2>
					<h2>
						<span style={{ fontSize: "23px" }}>${product.precio}</span>
					</h2>
				</div>
			</div>

			<div style={{ display: "flex", justifyContent: "center" }}>
				<Link to="/">Regresar</Link>
			</div>
		</div>
	);
};
