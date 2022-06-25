import { MDBAnimation, MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTypography } from "mdbootstrap";
import React, { useEffect } from "react";
import SpecialNavbar from "./special-navbar";
import Footer from "components/footer";
import "./style.css";
import header from "./assets/header.png";
import CardCarousel from "./card-carousel";
import { Sponsors } from "data/sponsors";
import { Partners } from "data/partners";

type EntryProps = {
	icon: React.ReactElement;
	title: string;
	description: string;
	delay: number;
};
const Entry: React.FC<EntryProps> = (props) => {
	return (
		<MDBCol lg={4} className="my-5 text-center">
			<MDBAnimation
				reset={true}
				tag="div"
				animation="fade-in-up"
				start="onScroll"
				delay={props.delay}
				duration={500}
			>
				{props.icon}
				<MDBTypography variant="h2">{props.title}</MDBTypography>
				<MDBTypography className="text-start mx-5">{props.description}</MDBTypography>
			</MDBAnimation>
		</MDBCol>
	);
};

const Home: React.FC = () => {
	useEffect(() => {
		setTimeout(() => {
			window.scrollTo(0, 0);
		}, 250);
	}, []);
	return (
		<>
			{/* Header */}
			<section>
				<SpecialNavbar />
				<MDBAnimation
					tag="div"
					animation="fade-in"
					className="page-header min-vh-75"
					style={{ backgroundImage: `url(${header})` }}
					start="onLoad"
					duration={2500}
				>
					<span className="mask bg-gradient-info opacity-75" />
					<MDBContainer>
						<MDBRow>
							<MDBCol lg={9} className="my-auto">
								<h2 className="ls-1 lh-1 text-white fw-900 mb-3">
									Mega <br /> Hackathon
								</h2>
								<div className="lead fw-normal text-white opacity-90 mb-1">
									Nonprofit organization host seasonal hackathons aiming for UN 17 sustainable
									development goals
								</div>
								<div>
									<MDBBtn color="light" size="lg" className="mt-3 me-3 text-dark">
										Sign up
									</MDBBtn>
									<MDBBtn
										color="link"
										size="lg"
										className="mt-3 link-light"
										style={{ background: "none" }}
									>
										Learn more
									</MDBBtn>
								</div>
							</MDBCol>
						</MDBRow>
					</MDBContainer>
					<div className="position-absolute w-100 z-index-1 bottom-0">
						<svg
							className="waves"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							viewBox="0 24 150 28"
							preserveAspectRatio="none"
							shape-rendering="auto"
						>
							<defs>
								<path
									id="gentle-wave"
									d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
								/>
							</defs>
							<g className="simple-waves">
								<use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(17,0,39,0.75" />
								<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(17,0,39,0.5)" />
								<use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(17,0,39,0.25)" />
								<use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(17,0,39,0.95)" />
							</g>
						</svg>
					</div>
				</MDBAnimation>
			</section>

			<section className="py-3">
				<MDBContainer>
					<MDBRow>
						<Entry
							icon={<MDBIcon fas icon="users" color="success" size="5x" className="pb-4" />}
							title="Powerful Community"
							description="A community of innovators and problem solvers working to help create solutions toward the UN's 17 sustainability goals. "
							delay={0}
						/>

						<Entry
							icon={<MDBIcon fas icon="share-alt" color="primary" size="5x" className="pb-4" />}
							title="Knowledge Network"
							description="A coalition of NGO's,  entreprenuers and tech companies providing guidance, advice and persoanlised help to our members. "
							delay={100}
						/>

						<Entry
							icon={<MDBIcon fas icon="city" color="warning" size="5x" className="pb-4" />}
							title='A "MEGA" Hackathon'
							description="A truly global event with members from all over the globe and from all ages, we strive to foster innovation and cretivity among all."
							delay={200}
						/>
					</MDBRow>
				</MDBContainer>
			</section>
			<MDBContainer className="px-5 py-5 text-center">
				<MDBTypography variant="h1">Sponsors</MDBTypography>
				<CardCarousel cards={Sponsors} />
			</MDBContainer>
			<MDBContainer className="px-5 py-5 text-center">
				<MDBTypography variant="h1">Partners NGOs & Schools</MDBTypography>
				<CardCarousel cards={Partners} />
			</MDBContainer>
			<div style={{ paddingBottom: 50 }} />
			<Footer />
		</>
	);
};

export default Home;
