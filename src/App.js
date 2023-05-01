import ItemListContainer from "./components/ItemList/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import CartWidgetContainer from "./components/CartWidget/CartWidgetContainer";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Navbar />}>
					<Route path="/" element={<ItemListContainer />} />
					<Route path="/category/:categoryName" element={<ItemListContainer />} />
					<Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
					<Route path="/cart" element={<CartWidgetContainer />} />
					<Route path="*" element={<h1>La ruta no existe</h1>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
