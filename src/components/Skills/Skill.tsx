import { Image } from "@chakra-ui/image";
import {
	Box,
	Container,
	Flex,
	HStack,
	SimpleGrid,
	Wrap,
	WrapItem,
	Text,
} from "@chakra-ui/layout";
import React from "react";
import { Section } from "react-scroll-section";
import Title from "../Hero/Title";
import CustomSection from "../SectionComponent/CustomSection";

type Props = {};

const skills = [
	"react",
	"typescript",
	"html5",
	"css3",
	"javascript",
	"bootstrap",
	"mongodb",
	"nodejs",
	"express",
	"python",
	"fastapi",
	"nextjs",
	"heroku",
	"redux",
	"git",
	"github",
	"markdown",
	"materialui",
];

const Skill = (props: Props) => {
	return (
		<CustomSection id="skills" waveOption={3}>
			<Title title="Skills🔥" size="5xl" textDecoration="none" />
			<Flex
				my="20"
				mx="auto"
				maxW="container.xl"
				// border="1px solid green"
			>
				<Wrap
					// columns={4}
					mx="auto"
					// border="1px solid blue"
					width={["90%", "80%", "90%%"]}
					justify="center"
					spacingY="40px"
					// gridTemplateColumns="repeat(4,1fr)"
					// gridTemplateRows="repeat(3,50px)"
				>
					{skills.map((skill) => (
						<WrapItem
							// border="1px solid red"
							p="2"
							key={skill}
							width={["20%", "25%", "15%", "10%"]}>
							<Image
								rounded="md"
								margin="auto"
								bg="whiteAlpha.200"
								p="3"
								style={{
									transition: "0.25s all ease-in-out",
								}}
								_hover={{
									backgroundColor: "white",
									cursor: "pointer",
									transition: "0.25s all ease-in-out",
								}}
								src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill}/${skill}-original.svg`}
							/>
						</WrapItem>
					))}
					{/* <WrapItem
						// border="1px solid red"
						p="2"
						width={["20%", "25%", "15%", "10%"]}>
						<Text border="1px solid white">DSA</Text>
						<Text border="1px solid white">Teamwork</Text>
						<Text border="1px solid white">Collaboration</Text>
						<Text border="1px solid white">Leadership</Text>
					</WrapItem> */}
					<HStack justifyContent="center" alignItems="center"></HStack>
				</Wrap>
			</Flex>
		</CustomSection>
	);
};

export default Skill;
