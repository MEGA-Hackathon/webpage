import Loader from "pages/loader";
import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("pages/home"));
const About = lazy(() => import("pages/about"));
const Contact = lazy(() => import("pages/contact"));

const App: React.FC = () => {
	return (
		<Router>
			<div style={{ fontFamily: "Chakra Petch" }}>
				<Routes>
					<Route
						path="/"
						element={
							<Suspense fallback={<Loader />}>
								<Home />
							</Suspense>
						}
					/>
					<Route
						path="/about"
						element={
							<Suspense fallback={<Loader />}>
								<About />
							</Suspense>
						}
					/>
					<Route
						path="/contact"
						element={
							<Suspense fallback={<Loader />}>
								<Contact />
							</Suspense>
						}
					/>

					{/* Unhandled URLs */}
					<Route
						path="*"
						element={
							<Suspense fallback={<Loader />}>
								<Home />
							</Suspense>
						}
					/>
				</Routes>
			</div>
		</Router>
	);
};

export default App;
