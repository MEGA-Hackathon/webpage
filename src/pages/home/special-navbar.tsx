import {
	MDBAnimatedNavbar,
	MDBCollapse,
	MDBContainer,
	MDBIcon,
	MDBNavbarBrand,
	MDBNavbarItem,
	MDBNavbarLink,
	MDBNavbarNav,
	MDBNavbarToggler,
} from "mdbootstrap";
import React, { useState } from "react";
import logo from "assets/logo.png";
import { NavLink } from "react-router-dom";

const SpecialNavbar: React.FC = () => {
	const [showResponsiveDropdown, setShowResponsiveDropdown] = useState(false);
	return (
		<MDBAnimatedNavbar expand="lg" fixed="top" className="shadow-0">
			<MDBContainer>
				<MDBNavbarBrand href="#" className="text-white">
					<img src={logo} height="50" loading="lazy" className="pe-2" />
					MEGA Hackathon
				</MDBNavbarBrand>
				<MDBNavbarToggler
					type="button"
					data-target="#navbarColor02"
					aria-controls="navbarColor02"
					aria-expanded="false"
					aria-label="Toggle navigation"
					onClick={() => setShowResponsiveDropdown(!showResponsiveDropdown)}
				>
					<MDBIcon icon="bars" fas />
				</MDBNavbarToggler>
				<MDBCollapse show={showResponsiveDropdown} navbar>
					<MDBNavbarNav fullWidth={false} right className="mb-2 mb-lg-0">
						<MDBNavbarItem>
							<NavLink to="/about">
								<MDBNavbarLink href="#">About</MDBNavbarLink>
							</NavLink>
						</MDBNavbarItem>
						<MDBNavbarItem>
							<NavLink to="/contact">
								<MDBNavbarLink href="#">Contact</MDBNavbarLink>
							</NavLink>
						</MDBNavbarItem>
					</MDBNavbarNav>
				</MDBCollapse>
			</MDBContainer>
		</MDBAnimatedNavbar>
	);
};

export default SpecialNavbar;
