import { Box, Text } from "@chakra-ui/layout";
import React from "react";

type Props = {
	text: string;
};

const Description = ({ text }: Props) => {
	return (
		<Box color="whiteAlpha.900">
			{text.split("\\n").map((str) => {
				console.log(str);
				return <Text fontSize="lg" key={str.length.toString() + str}>{str}</Text>;
			})}
		</Box>
	);
};

export default Description;
