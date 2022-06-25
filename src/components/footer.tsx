import { MDBBtn, MDBContainer, MDBFooter, MDBIcon } from "mdbootstrap";
import React from "react";

const Footer: React.FC = () => {
	return (
		<MDBFooter className="text-center text-white" style={{ backgroundColor: "rgb(30, 0, 60)" }}>
			<MDBContainer className="p-4 pb-0">
				<section className="mb-4">
					<MDBBtn
						className="m-1"
						href="https://www.instagram.com/megahack2022/"
						color="light"
						outline
						floating
					>
						<MDBIcon fab icon="instagram" />
					</MDBBtn>
					<MDBBtn
						className="m-1"
						href="https://youtube.com/channel/UCjVzRZLEikyw9HJu7gvFPgg"
						color="light"
						outline
						floating
					>
						<MDBIcon fab icon="youtube" />
					</MDBBtn>
					<MDBBtn className="m-1" href="https://discord.gg/PxJnDw7SPt" color="light" outline floating>
						<MDBIcon fab icon="discord" />
					</MDBBtn>
					<MDBBtn
						className="m-1"
						href="https://github.com/orgs/MEGA-Hackathon/"
						color="light"
						outline
						floating
					>
						<MDBIcon fab icon="github" />
					</MDBBtn>
				</section>
			</MDBContainer>

			<div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
				© 2022 Copyright:
				<a className="text-white ms-1" href="https://megahack.tech">
					megahack.tech
				</a>
			</div>
		</MDBFooter>
	);
};

export default Footer;
