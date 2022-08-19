import { Text } from "@chakra-ui/layout";
import React from "react";

type Props = {
	title: string;
	className?: string;
	size?: string;
	fontWeight?: string;
	textDecoration?: string;
};

const Title = ({
	title,
	className = "",
	size = "6xl",
	fontWeight = "extrabold",
	textDecoration = "underline",
}: Props) => {
	return (
		<Text
			fontSize={size}
			fontWeight={fontWeight}
			className={className}
			textDecoration={textDecoration}>
			{title}.
		</Text>
	);
};

export default Title;
