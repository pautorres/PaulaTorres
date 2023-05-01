import CartWidget from "./CartWidget";

function CartWidgetContainer() {
	const numeroDeCompras = 15;

	return (
		<div>
			<CartWidget numeroDeCompras={numeroDeCompras} />
		</div>
	);
}

export default CartWidgetContainer;
