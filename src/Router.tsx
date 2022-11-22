/* eslint-disable prettier/prettier */
import { Routes, Route } from "react-router-dom";
import { Index } from "./layouts/DefaultLayout";
import { History } from "./pages/History";
import { Home } from "./pages/Home";

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<Index />}>
				<Route path="/" element={<Home />} />
				<Route path="/history" element={<History />} />
			</Route>
			
		</Routes>
	);
}
