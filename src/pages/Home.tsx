import { MDBBtn } from "mdb-react";
import { FC } from "react";

const Home: FC = () => {
	return (
		<div
			className="p-5 text-center bg-image"
			style={{ backgroundImage: "url(/assets/TechBanner.jpg)", height: 400 }}
		>
			<div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}>
				<div className="d-flex justify-content-center align-items-center h-100">
					<div className="text-white">
						<h1 className="mb-3">Mega Hackathon</h1>
						<h4 className="mb-3">Subheading</h4>
						<MDBBtn size="lg" color="light" outline>
							Join now!
						</MDBBtn>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
