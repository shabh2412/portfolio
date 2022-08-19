import { Button } from "@chakra-ui/button";
import { Box, HStack, Text } from "@chakra-ui/layout";
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
		<CustomSection id={elementId} waveOption={2}>
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
					<Box>
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
				</Box>
			</HStack>
		</CustomSection>
	);
};

export default Hero;
