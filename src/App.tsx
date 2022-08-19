import { Box } from "@chakra-ui/layout";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import myImage from "./assets/Cartoon.png";
import About from "./components/About/About";
import meWithMac from "./assets/Cartoon.png";

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
				<Hero
					elementId="top"
					intro="Hi, My Name is"
					primaryTitle="Rishabh Panesar"
					secondaryTitle="I am a full-stack dev"
					image={myImage}
					description="I build interesting things that live on the Internet! 🚀 \n I love to transform ideas into reality using code and developing web-apps using the latest front-end technologies and full fleged APIs.\nCurrently I'm learning Typescript and Chakra UI."
					hasCallToAction={true}
					callToActionMessage="Connect with me"
				/>
				<About image={meWithMac} />
			</Box>
		</div>
	);
}

export default App;
