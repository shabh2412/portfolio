import { Box } from "@chakra-ui/layout";
import React, { ReactPropTypes } from "react";
import { Section } from "react-scroll-section";
import Wave from "../Designs/Wave1";
import Wave2 from "../Designs/Wave2";
import Wave3 from "../Designs/Wave3";
import Wave4 from "../Designs/Wave4";

type waveType = 1 | 2 | 3 | 4 | null;

type Props = {
	id: string;
	children: React.ReactNode;
	waveOption?: waveType;
	bg?: string;
	waveColor?: string;
};

const chooseWave = (wave: waveType, bgColor: string) => {
	switch (wave) {
		case 1: {
			return <Wave bgColor={bgColor} />;
		}
		case 2: {
			return <Wave2 bgColor={bgColor} />;
		}
		case 3: {
			return <Wave3 bgColor={bgColor} />;
		}
		case 4: {
			return <Wave4 bgColor={bgColor} />;
		}
		default:
			return <></>;
	}
};

const CustomSection = ({
	id,
	children,
	waveOption = null,
	bg = "primary",
	waveColor = "#153e75",
}: Props) => {
	return (
		<Section id={id}>
			<Box style={{ textAlign: "center", paddingTop: "75px" }} bg={bg}>
				{children}
			</Box>
			{chooseWave(waveOption, waveColor)}
		</Section>
	);
};

export default CustomSection;
