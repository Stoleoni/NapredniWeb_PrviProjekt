import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import { useEffect, useState } from "react";
import { kolaInitial } from "./constants";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";

function App() {
	const [kola, setKola] = useState<any>([]);

	useEffect(() => {
		const results = localStorage.getItem("kola");
		if (!results) {
			localStorage.setItem("kola", JSON.stringify(kolaInitial));
			setKola(kolaInitial);
		} else {
			setKola(JSON.parse(results));
		}
	}, []);

	return (
		<>
			<LoginButton />
			<LogoutButton />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home kola={kola} setKola={setKola} />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
