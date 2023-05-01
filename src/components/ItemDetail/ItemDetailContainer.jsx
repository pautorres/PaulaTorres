import React, { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { products } from "../../productsMocks";

const ItemDetailContainer = () => {
	const [product, setProduct] = useState({});

	const { id } = useParams();

	useEffect(() => {
		let found = products.find((prod) => prod.id === +id);
		setProduct(found);
	}, [id]);

	const onAdd = (cantidad) => {
		let data = {
			...product,
			quantity: cantidad,
		};
	};

	return (
		<div>
			<ItemDetail product={product} onAdd={onAdd} />
		</div>
	);
};

export default ItemDetailContainer;
