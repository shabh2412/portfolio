import { Text } from "@chakra-ui/layout";
import React from "react";

type Props = {
	title: string;
	className?: string;
	size?: string;
};

const Title = ({ title, className = "", size = "6xl" }: Props) => {
	return (
		<Text fontSize={size} fontWeight="extrabold" className={className}>
			{title}.
		</Text>
	);
};

export default Title;
