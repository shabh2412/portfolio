import { Box } from "@chakra-ui/layout";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import myImage from "./assets/Cartoon.png";
import About from "./components/About/About";
import meWithMac from "./assets/Cartoon.png";
import Skill from "./components/Skills/Skill";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useScrollSection } from "react-scroll-section";

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
					callToActionMessage="My Resume"
					callToActionHandler={() => {
						// alert("this action is under construction...");
						window.open(
							"https://drive.google.com/file/d/1zKeePKV_O8bri3F_SfKDGvHE1dV4nOM7/view?usp=sharing"
						);
					}}
				/>
				<About image={meWithMac} />
				<Skill />
				<Projects />
				<Contact />
				<Footer />
			</Box>
		</div>
	);
}

export default App;
