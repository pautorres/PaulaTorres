import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { products } from "../../productsMocks";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
	const [items, setItems] = useState([]);

	const { categoryName } = useParams();
	useEffect(() => {
		const productsFiltered = products.filter((prod) => prod.category === categoryName);

		const tarea = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(categoryName ? productsFiltered : products);
			}, 1000);
		});

		tarea.then((res) => setItems(res));
	}, [categoryName]);

	console.log(items);
	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<ItemList items={items} />
		</div>
	);
};
export default ItemListContainer;
