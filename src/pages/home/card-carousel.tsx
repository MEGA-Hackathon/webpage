import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle } from "mdbootstrap";
import React from "react";
import Flickity from "react-flickity-component";

export type CardProps = { image: string; title: string; description: string };
export const Card: React.FC<CardProps> = (props) => {
	return (
		<MDBCard background="dark" className="text-start mx-1" style={{ width: 250 }}>
			<MDBCardImage src={props.image} position="top" />
			<MDBCardBody>
				<MDBCardTitle>{props.title}</MDBCardTitle>
				<MDBCardText>{props.description}</MDBCardText>
			</MDBCardBody>
		</MDBCard>
	);
};

export type CardCarouselProps = { cards: Array<CardProps> };
const CardCarousel: React.FC<CardCarouselProps> = (props) => {
	return (
		<Flickity
			options={{
				initialIndex: Math.random() * props.cards.length,
				imagesLoaded: true,
			}}
		>
			{props.cards.map((card, index) => (
				<Card key={index} {...card} />
			))}
		</Flickity>
	);
};

export default CardCarousel;
