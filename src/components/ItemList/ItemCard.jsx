import React from "react";
import styles from "./ItemList.module.css";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
	return (
		<div className={styles.productCard}>
			<div className={styles.productTumb}>
				<Link to={`/itemDetail/${item.id}`}>
					<img src={item.img} alt=""></img>
				</Link>
			</div>
			<div className={styles.productDetails}>
				<span className={styles.productCategory}>{item.category} </span>
				<h4>
					<Link to={`/itemDetail/${item.id}`}>{item.title} </Link>
				</h4>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
				<div className={styles.productBottomDetails}>
					<div className={styles.productPrice}>{item.precio}</div>
				</div>
			</div>
		</div>
	);
};

export default ItemCard;
