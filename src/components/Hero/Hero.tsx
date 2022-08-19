import { Button } from "@chakra-ui/button";
import { Box, HStack, Text } from "@chakra-ui/layout";
import Description from "./Description";
import style from "./Hero.module.css";
import Title from "./Title";

type Props = {
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
	primaryTitle,
	secondaryTitle,
	intro,
	description,
	hasCallToAction = false,
	callToActionMessage = "",
	callToActionHandler = () => {},
}: Props) => {
	return (
		<HStack py="10" justifyContent="center" alignItems="center">
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
				<Box width={["100%", "100%", "100%","50%"]} mx="auto" p="5">
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
	);
};

export default Hero;
