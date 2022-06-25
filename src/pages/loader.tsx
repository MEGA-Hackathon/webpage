import Header from "components/header";
import { MDBSpinner } from "mdbootstrap";
import React from "react";
const center: React.CSSProperties = {
	position: "absolute",
	marginLeft: "auto",
	marginRight: "auto",
	marginTop: "auto",
	marginBottom: "auto",
	left: 0,
	right: 0,
	top: 0,
	bottom: "25%",
	textAlign: "center",
};

const Loader: React.FC = () => {
	return (
		<>
			<Header focus="" />
			<MDBSpinner color="secondary" style={{ width: "5rem", height: "5rem", ...center }} grow>
				<span className="visually-hidden">Loading...</span>
			</MDBSpinner>
		</>
	);
};

export default Loader;
