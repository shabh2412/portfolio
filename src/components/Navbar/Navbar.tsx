import { Box, Heading, HStack, Link, Spacer, Text } from "@chakra-ui/layout";
import { NavLink } from "react-router-dom";
import { useScrollSection } from "react-scroll-section";
import style from "./Navbar.module.css";
import NavItem from "./NavItem";

type Props = {};

const Navbar = (props: Props) => {
	const topSection = useScrollSection("top");
	const aboutSection = useScrollSection("about");
	const contactSection = useScrollSection("contact");
	const skillsSection = useScrollSection("skills");
	const projectSection = useScrollSection("projects");
	return (
		<HStack
			bg="blackAlpha.900"
			color="white"
			className={style.navbar}
			p="5"
			fontSize="lg">
			<Box>
				<Heading onClick={topSection.onClick}>
					<span className={style.tprim}>R</span>
					<span className={style.tsec}>P</span>
				</Heading>
			</Box>
			<Spacer />
			<HStack>
				<Box>
					<NavItem sectionHandler={aboutSection}>About</NavItem>
				</Box>
				<Box>
					<NavItem sectionHandler={skillsSection}>Skills</NavItem>
				</Box>
				<Box>
					<NavItem sectionHandler={projectSection}>Projects</NavItem>
				</Box>
				<Box>
					<NavItem sectionHandler={contactSection}>Contact</NavItem>
				</Box>
			</HStack>
		</HStack>
	);
};

export default Navbar;
