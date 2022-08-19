import { Box, Flex, Link } from "@chakra-ui/layout";
import { chakra, Image } from "@chakra-ui/react";
import { Link as ChLink } from "react-router-dom";
import React from "react";
import Title from "../Hero/Title";
import { Section } from "react-scroll-section";
import CustomSection from "../SectionComponent/CustomSection";

type Props = {
	image: string;
};

const About = ({ image }: Props) => {
	return (
		<CustomSection id="about" waveOption={3}>
			<Title title="About Me" />
			<Flex
				bg="transparent"
				_dark={{
					bg: "#3e3e3e",
				}}
				p={50}
				w="full"
				alignItems="center"
				justifyContent="center">
				<Box
					bg="transparent"
					borderBottom="2px solid #5F85DB"
					borderEnd="2px solid #5F85DB"
					p="5"
					_dark={{
						bg: "gray.800",
					}}
					mx={{
						lg: 8,
					}}
					display={{
						lg: "flex",
					}}
					maxW={{
						lg: "5xl",
					}}
					shadow={{
						lg: "dark-lg",
					}}
					rounded={{
						lg: "lg",
					}}>
					<Box
						display="flex"
						justifyContent="center"
						alignItems="center"
						w={{
							lg: "50%",
						}}>
						<Image
							src={image}
							rounded="full"
							w={{
								lg: "50%",
								sm: "50%",
								base: "100%",
							}}
							border="5px solid"
							borderColor="secondary"
							style={{ objectFit: "contain" }}
						/>
					</Box>

					<Box
						py={12}
						px={6}
						display="flex"
						justifyContent="center"
						w={{
							lg: "50%",
						}}>
						<Box>
							<chakra.h2
								fontSize={{
									base: "2xl",
									md: "3xl",
								}}
								color="white.800"
								_dark={{
									color: "white",
								}}
								fontWeight="bold">
								I'm{" "}
								<chakra.span
									color="brand.600"
									_dark={{
										color: "brand.400",
									}}>
									Rishabh Panesar
								</chakra.span>
							</chakra.h2>
							<chakra.p
								mt={4}
								fontWeight="400"
								color="rgb(137,147,177)"
								_dark={{
									color: "gray.400",
								}}>
								👨🏼‍💻 I love building things that live on the internet! My interest
								in development started back when I was in my 12th Standard, when
								I was trying to create my first app using Thunkable. I can say
								that I've come way far in my journey of learning :)
							</chakra.p>
							<chakra.p
								mt={4}
								fontWeight="400"
								color="rgb(137,147,177)"
								_dark={{
									color: "gray.400",
								}}>
								Apart from coding, I love Teaching 🎓, playing Table Tennis 🏓,
								dribbling with football ⚽️, reading books 📚 and stargazing✨🤩
							</chakra.p>
							<Box mt={8}>
								<Link
									href="https://github.com/shabh2412"
									isExternal
									bg="transparent"
									color="secondary"
									border="1px solid #5F85DB"
									px={5}
									py={3}
									fontWeight="semibold"
									rounded="3xl"
									transition="0.5s all ease-in-out"
									_hover={{
										bg: "secondary",
										color: "white",
										border: "1px solid #5F85DB",
										transition: "0.5s all ease-in-out",
										boxShadow:
											"rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
									}}>
									My GitHub
								</Link>
							</Box>
						</Box>
					</Box>
				</Box>
			</Flex>
		</CustomSection>
	);
};

export default About;
