import { Box, Heading, HStack, Link, Spacer, Text } from "@chakra-ui/layout";
import { NavLink } from "react-router-dom";
import { useScrollSection } from "react-scroll-section";
import style from "./Navbar.module.css";
import NavItem from "./NavItem";

type Props = {};

const Navbar = (props: Props) => {
	const aboutSection = useScrollSection("about");
	const educationSection = useScrollSection("education");
	const skillsSection = useScrollSection("skills");
	const projectSection = useScrollSection("project");
	return (
		<HStack
			bg="blackAlpha.900"
			color="white"
			className={style.navbar}
			p="5"
			fontSize="lg">
			<Box>
				<NavLink to="/">
					<Heading>
						<span className={style.tprim}>R</span>
						<span>P</span>
					</Heading>
				</NavLink>
			</Box>
			<Spacer />
			<HStack>
				<Box>
					<NavItem sectionHandler={aboutSection}>About</NavItem>
				</Box>
				<Box>
					<NavLink to="#education">Education</NavLink>
				</Box>
				<Box>
					<NavLink to="#skills">Skills</NavLink>
				</Box>
				<Box>
					<NavLink to="#projects">Projects</NavLink>
				</Box>
			</HStack>
		</HStack>
	);
};

export default Navbar;
