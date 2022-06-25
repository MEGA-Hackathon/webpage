import {
	MDBCollapse,
	MDBContainer,
	MDBIcon,
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarItem,
	MDBNavbarLink,
	MDBNavbarNav,
	MDBNavbarToggler,
} from "mdbootstrap";
import React, { useState } from "react";
import logo from "assets/logo.png";
import { NavLink } from "react-router-dom";

export type HeaderProps = {
	focus: string;
};
const Header: React.FC<HeaderProps> = (props) => {
	const [responsiveDropdown, setResponsiveDropdown] = useState(false);
	return (
		<MDBNavbar expand="lg" dark style={{ backgroundColor: "rgba(10, 0, 20, 0.95)" }}>
			<MDBContainer>
				<MDBNavbarBrand href="#">
					<img src={logo} height="45" loading="lazy" style={{ position: "absolute" }} />
					<div style={{ paddingLeft: 55 }}>MEGA Hackathon</div>
				</MDBNavbarBrand>
				<MDBNavbarToggler
					type="button"
					data-target="#navbarColor02"
					aria-controls="navbarColor02"
					aria-expanded="false"
					aria-label="Toggle navigation"
					onClick={() => setResponsiveDropdown(!responsiveDropdown)}
				>
					<MDBIcon icon="bars" fas />
				</MDBNavbarToggler>
				<MDBCollapse show={responsiveDropdown} navbar>
					<MDBNavbarNav className="ms-auto mb-2 mb-lg-0" right fullWidth={false}>
						<MDBNavbarItem>
							<NavLink to="/">
								<MDBNavbarLink href="#">Home</MDBNavbarLink>
							</NavLink>
						</MDBNavbarItem>
						<MDBNavbarItem>
							<NavLink to={props.focus === "About" ? "#" : "/about"}>
								<MDBNavbarLink active={props.focus === "About"} href="#">
									About
								</MDBNavbarLink>
							</NavLink>
						</MDBNavbarItem>
						<MDBNavbarItem>
							<NavLink to={props.focus === "Contact" ? "#" : "/contact"}>
								<MDBNavbarLink active={props.focus === "Contact"} href="#">
									Contact
								</MDBNavbarLink>
							</NavLink>
						</MDBNavbarItem>
					</MDBNavbarNav>
				</MDBCollapse>
			</MDBContainer>
		</MDBNavbar>
	);
};

export default Header;
