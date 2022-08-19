import { Box, Heading } from "@chakra-ui/layout";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import myImage from "./assets/Cartoon.png";
import { Section } from "react-scroll-section";
import About from "./components/About/About";
import meWithMac from "./assets/Cartoon.png";
import Wave from "./components/Designs/Wave";
import Title from "./components/Hero/Title";

function App() {
	return (
		<div
			className="App"
			// TODO: Remove this style later on
			style={{
				height: "1000vh",
			}}>
			<Navbar />
			<Box bg="primary" color="white">
				<Section id="top" style={{ paddingTop: "50px" }}>
					<Hero
						intro="Hi, My Name is"
						primaryTitle="Rishabh Panesar"
						secondaryTitle="I am a full-stack dev"
						image={myImage}
						description="I build interesting things that live on the Internet! 🚀 \n I love to transform ideas into reality using code and developing web-apps using the latest front-end technologies and full fleged APIs.\nCurrently I'm learning Typescript and Chakra UI."
						hasCallToAction={true}
						callToActionMessage="Connect with me"
					/>
				</Section>
				<Section id="about" style={{ paddingTop: "50px", textAlign: "center" }}>
					<Wave />
					<Title title="About Me" />
					<About image={meWithMac} />
				</Section>
			</Box>
		</div>
	);
}

export default App;
