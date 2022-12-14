import { Box, Text } from "@chakra-ui/layout";
import React from "react";

type Props = {
	text: string;
};

const Description = ({ text }: Props) => {
	return (
		<Box color="bluedark">
			{text.split("\\n").map((str) => {
				return (
					<Text fontSize={["sm", "lg"]} key={str.length.toString() + str}>
						{str}
					</Text>
				);
			})}
		</Box>
	);
};

export default Description;
