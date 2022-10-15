import { Button } from "@chakra-ui/button";
import { Box, HStack, Text, Flex } from "@chakra-ui/layout";
import { Section } from "react-scroll-section";
import CustomSection from "../SectionComponent/CustomSection";
import Description from "./Description";
import style from "./Hero.module.css";
import Title from "./Title";

type Props = {
	elementId: string;
	intro: string;
	primaryTitle: string;
	secondaryTitle?: string;
	image?: string;
	description: string;
	hasCallToAction?: boolean;
	callToActionMessage?: string;
	callToActionHandler?: Function;
};

const Hero = ({
	elementId,
	primaryTitle,
	secondaryTitle,
	intro,
	description,
	hasCallToAction = false,
	callToActionMessage = "",
	callToActionHandler = () => {},
}: Props) => {
	return (
		<CustomSection id={elementId} waveOption={2} waveColor="#153e75">
			<HStack height="65vh" py="10" justifyContent="center" alignItems="center">
				<Box flexGrow="1" textAlign="center">
					<Text
						letterSpacing="wider"
						textTransform="uppercase"
						color="text.lightGray"
						fontWeight="semibold">
						{intro}
					</Text>
					{primaryTitle && (
						<Title title={primaryTitle} className={style.titleColor} />
					)}
					{secondaryTitle && (
						<Title title={secondaryTitle} className={style.titleColor} />
					)}
					<Box width={["100%", "100%", "100%", "50%"]} mx="auto" p="5">
						<Description text={description} />
					</Box>
					<Flex justifyContent="center" alignItems="center" gap="2">
						<Box my="2">
							{hasCallToAction && (
								<Button
									colorScheme="linkedin"
									variant="solid"
									onClick={() => {
										window.open(
											"https://drive.google.com/file/d/1FEBJh_1TB4UOWtWxz-23-flRbt-gyunJ/view?usp=sharing"
										);
									}}>
									View my resume online
								</Button>
							)}
						</Box>
						<Box my="2">
							{hasCallToAction && (
								<Button
									colorScheme="blue"
									variant="solid"
									onClick={() => {
										callToActionHandler();
									}}>
									{callToActionMessage}
								</Button>
							)}
						</Box>
						<Box my="2">
							{hasCallToAction && (
								<Button
									colorScheme="linkedin"
									variant="solid"
									onClick={() => {
										window.open("https://www.linkedin.com/in/rishabh-panesar/");
									}}>
									Connect on Linked<strong>in</strong>
								</Button>
							)}
						</Box>
					</Flex>
				</Box>
			</HStack>
		</CustomSection>
	);
};

export default Hero;
