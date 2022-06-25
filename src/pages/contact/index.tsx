import Header from "components/header";
import React from "react";
import Footer from "components/footer";
import { MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTypography } from "mdbootstrap";

const Contact: React.FC = () => {
	return (
		<>
			<Header focus="Contact" />
			<section className="mx-auto py-4">
				<MDBTypography variant="h1" className="text-center">
					Contact us
				</MDBTypography>
				<MDBContainer>
					<MDBRow>
						<MDBCol>
							Official Contacts:
							<div>
								<MDBIcon fas icon="at" /> info@megahack.tech
								<br />
								<MDBIcon fas icon="envelope" /> megahackleague@gmail.com
							</div>
						</MDBCol>
						<MDBCol>
							Social Media:
							<div>
								<MDBBtn
									className="me-2"
									href="https://www.instagram.com/megahack2022/"
									style={{ backgroundColor: "#ac2bac" }}
									floating
								>
									<MDBIcon fab icon="instagram" />
								</MDBBtn>
								<MDBBtn
									className="me-2"
									href="https://youtube.com/channel/UCjVzRZLEikyw9HJu7gvFPgg"
									style={{ backgroundColor: "#ed302f" }}
									floating
								>
									<MDBIcon fab icon="youtube" />
								</MDBBtn>
								<MDBBtn
									className="me-2"
									href="https://discord.gg/PxJnDw7SPt"
									style={{ backgroundColor: "#6A5ACD" }}
									floating
								>
									<MDBIcon fab icon="discord" />
								</MDBBtn>
								<MDBBtn
									className="me-2"
									href="https://github.com/orgs/MEGA-Hackathon/"
									style={{ backgroundColor: "#333333" }}
									floating
								>
									<MDBIcon fab icon="github" />
								</MDBBtn>
							</div>
						</MDBCol>
					</MDBRow>
				</MDBContainer>
			</section>
			<Footer />
		</>
	);
};

export default Contact;
