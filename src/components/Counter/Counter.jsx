const Counter = ({ sumar, restar, counter, onAdd }) => {
	return (
		<div style={{ marginBottom: "20px", display: "flex", gap: "30px" }}>
			<span variant="contained" onClick={sumar}>
				Sumar
			</span>
			<span variant="contained" onClick={restar}>
				Restar
			</span>
			<span onClick={() => onAdd(counter)}>Agregar al carrito</span>
		</div>
	);
};

export default Counter;
