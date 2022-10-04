import { Box, Flex, Link as ChLink, Stack, Text } from "@chakra-ui/layout";
import { chakra, Image } from "@chakra-ui/react";
import style from "./Project.module.css";

type Props = {
	image: string;
	title: string;
	description: string;
	projectLink: string;
	githubLink: string;
	techStack: Array<string>;
};

const Project = ({
	image,
	title,
	description,
	projectLink,
	githubLink,
	techStack = [],
}: Props) => {
	return (
		<Flex
			className={style.projectCard}
			bg="transparent"
			p={15}
			w="full"
			alignItems="center"
			justifyContent="center">
			<Box
				className={style.content}
				border="2px solid"
				borderColor="primary"
				boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"
				bg="white"
				px="10"
				py="5"
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
					lg: "lg",
				}}
				rounded={{
					lg: "lg",
				}}>
				<Box
					display="flex"
					alignItems="center"
					w={{
						lg: "50%",
					}}>
					<Box>
						<ChLink isExternal href={projectLink}>
							<Image
								objectFit="fill"
								src={image}
								border="1px solid"
								borderColor="primary"
								transition="0.25s ease-in-out;"
								_hover={{
									transition: "0.25s ease-in-out",
									// boxShadow: "0px 5px 10px #0e1629",
									filter: "brightness(50%)",
									cursor: "pointer",
								}}
								rounded={{
									lg: "lg",
								}}
							/>
						</ChLink>
					</Box>
				</Box>

				<Box
					py={5}
					px={4}
					maxW={{
						base: "xl",
						lg: "5xl",
					}}
					w={{
						lg: "50%",
					}}>
					<chakra.h2
						fontSize={{
							base: "2xl",
							md: "3xl",
						}}
						color="brand.700"
						// color="gray.800"
						_dark={{
							color: "white",
						}}
						fontWeight="bold">
						{title}
						{/* <chakra.span
							_dark={{
								color: "brand.400",
							}}>
							Idea
						</chakra.span> */}
					</chakra.h2>
					<chakra.p
						mt={4}
						color="gray.600"
						_dark={{
							color: "gray.400",
						}}>
						{description}
					</chakra.p>

					<Flex mt={8} flexWrap="wrap" justifyContent="center">
						{githubLink.length > 0 && (
							<ChLink
								isExternal
								href={githubLink}
								bg="gray.900"
								color="gray.100"
								px={5}
								py={3}
								mx={5}
								border="1px solid"
								fontWeight="semibold"
								rounded="lg"
								_hover={{
									bg: "whiteAlpha.800",
									color: "primary",
									border: "1px solid",
									borderColor: "primary",
								}}>
								GitHub
							</ChLink>
						)}
						<ChLink
							isExternal
							href={projectLink}
							bg="brand.800"
							color="gray.100"
							px={5}
							py={3}
							mx={5}
							border="1px solid"
							fontWeight="semibold"
							rounded="lg"
							_hover={{
								bg: "whiteAlpha.800",
								color: "brand.700",
								border: "1px solid",
								borderColor: "brand.700",
							}}>
							View Demo
						</ChLink>
					</Flex>
					{/* Tech Stack */}
					<Flex mt={4} flexWrap="wrap" justifyContent={"center"} gap="10px">
						{techStack.length > 0 &&
							techStack.map((stack, index) => (
								<Text
									border="1px solid white"
									borderRadius="md"
									style={{
										transform: "skewX(-10deg)",
									}}
									p={2}
									textTransform="capitalize"
									key={index}>
									{stack}
								</Text>
							))}
					</Flex>
				</Box>
			</Box>
		</Flex>
	);
};

export default Project;
