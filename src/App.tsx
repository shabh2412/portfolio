import { Box } from "@chakra-ui/layout";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import myImage from "./assets/Cartoon.png";
import { Section } from "react-scroll-section";

function App() {
	return (
		<div
			className="App"
			// TODO: Remove this style later on
			style={{
				height: "1000vh",
			}}>
			<Navbar />
			<Box bg="primary" p="5" color="white" id="about">
				<Section id="about" style={{ paddingTop: "100px" }}>
					<Hero
						intro="Hi, My Name is"
						primaryTitle="Rishabh Panesar"
						secondaryTitle="I am a full-stack dev"
						image={myImage}
						description="I build interesting things that live on the Internet! 🚀 \n I love to transform ideas into reality using code and developing web-apps using the latest front-end technologies and full fleged APIs.\nCurrently I'm learning Typescript and Chakra UI."
					/>
				</Section>
			</Box>
		</div>
	);
}

export default App;
