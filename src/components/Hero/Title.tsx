import { Text } from "@chakra-ui/layout";
import React from "react";

type Props = {
	title: string;
	className?: string;
	size?: string;
	fontWeight?: string;
	textDecoration?: string;
	color?: string;
};

const Title = ({
	title,
	className = "",
	size = "6xl",
	fontWeight = "extrabold",
	textDecoration = "underline",
	color = undefined,
}: Props) => {
	return (
		<Text
			fontSize={size}
			fontWeight={fontWeight}
			className={className}
			color={color || "white"}
			textDecoration={textDecoration}>
			{title}
		</Text>
	);
};

export default Title;
