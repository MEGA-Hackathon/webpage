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
} from "mdb-react";
import { FC, useState } from "react";
import Home from "./pages/Home";

const App: FC = () => {
	const [showResponsiveDropdown, setShowResponsiveDropdown] = useState(false);
	return (
		<div>
			<MDBAnimatedNavbar expand="lg" fixed="top" className="shadow-0">
				<MDBContainer>
					<MDBNavbarBrand href="#">
						<img src="/assets/logo.png" height="30" alt="MEGA Hackathon" loading="lazy" />
					</MDBNavbarBrand>
					<MDBNavbarToggler
						type="button"
						aria-expanded="false"
						aria-label="Toggle navigation"
						onClick={() => setShowResponsiveDropdown(!showResponsiveDropdown)}
					>
						<MDBIcon icon="bars" fas />
					</MDBNavbarToggler>
					<MDBCollapse show={showResponsiveDropdown} navbar>
						<MDBNavbarNav fullWidth={false} right className="mb-2 mb-lg-0">
							<MDBNavbarItem className="active">
								<MDBNavbarLink aria-current="page" href="#">
									Home
								</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem>
								<MDBNavbarLink href="#">About</MDBNavbarLink>
							</MDBNavbarItem>
						</MDBNavbarNav>
					</MDBCollapse>
				</MDBContainer>
			</MDBAnimatedNavbar>
			<Home />
			<div style={{ paddingBottom: 1000 }} />
		</div>
	);
};

export default App;
