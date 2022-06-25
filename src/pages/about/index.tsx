import Header from "components/header";
import React from "react";
import {
	MDBAccordion,
	MDBAccordionItem,
	MDBCard,
	MDBCardBody,
	MDBCardImage,
	MDBCardText,
	MDBCardTitle,
	MDBContainer,
	MDBListGroup,
	MDBListGroupItem,
	MDBRow,
	MDBTypography,
} from "mdbootstrap";
import "./style.css";
import Footer from "components/footer";
import { members, Role, roles } from "data/members";

type CardProps = { image: string; title: string; description: string };
const Card: React.FC<CardProps> = (props) => {
	return (
		<MDBCard background="dark" className="text-start m-1" style={{ width: 300 }}>
			<MDBCardImage src={props.image} position="top" />
			<MDBCardBody>
				<MDBCardTitle>{props.title}</MDBCardTitle>
				<MDBCardText>{props.description}</MDBCardText>
			</MDBCardBody>
		</MDBCard>
	);
};

const mapMembers = (role: Role) => {
	const mapped = new Array<React.ReactElement>();
	const memberOfRole = members[role];
	for (let i = 0; i < memberOfRole.length; i++) {
		const member = memberOfRole[i];
		mapped.push(<Card key={i} {...member} />);
	}
	return mapped;
};
const mapRoles = () => {
	const mapped = new Array<React.ReactElement>();
	for (let i = 0; i < roles.length; i++) {
		const role = roles[i];
		mapped.push(
			<MDBAccordionItem key={i} headerTitle={role} collapseId={i + 1}>
				<MDBContainer fluid>
					<MDBRow className="justify-content-center">{mapMembers(role)}</MDBRow>
				</MDBContainer>
			</MDBAccordionItem>,
		);
	}
	return mapped;
};

const About: React.FC = () => {
	return (
		<>
			<Header focus="About" />
			<section className="mx-auto py-4">
				<MDBTypography variant="h1" className="text-center">
					Frequently asked questions
				</MDBTypography>
				<MDBListGroup className="px-5">
					<MDBListGroupItem className="py-3">
						<MDBTypography variant="h4">What is a hackathon?</MDBTypography>
						<div>
							A hackathon is an event where groups of programmers come together to solve real-world
							problems by creating projects. Our theme for this year is AI for good.
						</div>
					</MDBListGroupItem>
					<MDBListGroupItem className="py-3">
						<MDBTypography variant="h4">What is a hackathon?</MDBTypography>
						<div>
							A hackathon is an event where groups of programmers come together to solve real-world
							problems by creating projects. Our theme for this year is AI for good.
						</div>
					</MDBListGroupItem>
					<MDBListGroupItem className="py-3">
						<MDBTypography variant="h4">Who can participate?</MDBTypography>
						<div>Anyone! Regardless of coding abilities, geography, or age, anyone can participate.</div>
					</MDBListGroupItem>
					<MDBListGroupItem className="py-3">
						<MDBTypography variant="h4">Why should I participate?</MDBTypography>
						<div>
							Hackathons are opportunities to network with people, learn new skills, and potentially
							benefit communities. Plus, there are prizes!
						</div>
					</MDBListGroupItem>
					<MDBListGroupItem className="py-3">
						<MDBTypography variant="h4">What are United Nation's 17 goals?</MDBTypography>
						<div>
							The Sustainable Development Goals are the blueprint to achieve a better and more sustainable
							future for all. They address the global challenges we face, including poverty, inequality,
							climate change, environmental degradation, peace and justice. Learn more and take action.
							<a
								className="text-secondary"
								href="https://www.un.org/sustainabledevelopment/sustainable-development-goals/"
								target="_blank"
							>
								<br />
								More Info
							</a>
						</div>
					</MDBListGroupItem>
					<MDBListGroupItem className="py-4">
						<MDBTypography variant="h4">
							What if we want to partner/sponsor MEGA Hackathon League?
						</MDBTypography>
						<div>
							Hackathons are opportunities to network with people, learn new skills, and potentially
							benefit communities. Plus, there are prizes!
						</div>
					</MDBListGroupItem>
				</MDBListGroup>
			</section>
			<section className="px-5 py-4 text-center">
				<MDBTypography variant="h1">Meet our team</MDBTypography>
				<MDBAccordion alwaysOpen>{mapRoles()}</MDBAccordion>
			</section>
			<div style={{ paddingBottom: 25 }} />
			<Footer />
		</>
	);
};

export default About;
