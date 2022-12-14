import { Box } from "@chakra-ui/layout";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import myImage from "./assets/Cartoon.png";
import About from "./components/About/About";
import portfolioPicture from "./assets/IMG_6510.jpg";
import Skill from "./components/Skills/Skill";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useScrollSection } from "react-scroll-section";
import { GitHub } from "./components/GHStats";

function App() {
	const connectSection = useScrollSection("contact");
	return (
		<div className="App">
			<Navbar />
			<Box bg="primary" color="white">
				<Hero
					elementId="top"
					intro="Hi, My Name is"
					primaryTitle="Rishabh Panesar"
					secondaryTitle="I am a full-stack dev"
					image={myImage}
					description="I build interesting things that live on the Internet! 🚀 \n I love to transform ideas into reality using code and developing web-apps using the latest front-end technologies and full fleged APIs.\nCurrently I'm learning Typescript and Chakra UI."
					hasCallToAction={true}
					callToActionMessage="Download My Resume"
					callToActionHandler={() => {
						// alert("this action is under construction...");
						window.open(
							"https://drive.google.com/uc?export=download&id=1FEBJh_1TB4UOWtWxz-23-flRbt-gyunJ"
						);
					}}
				/>
				<About image={portfolioPicture} />
				<Skill />

				<Projects />
				<GitHub />
				<Contact />
				<Footer />
			</Box>
		</div>
	);
}

export default App;
