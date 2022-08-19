import { None } from "framer-motion";
import React, { ReactPropTypes } from "react";
import { Section } from "react-scroll-section";
import Wave from "../Designs/Wave1";
import Wave2 from "../Designs/Wave2";
import Wave3 from "../Designs/Wave3";

type waveType = 1 | 2 | 3 | null;

type Props = {
	id: string;
	children: React.ReactNode;
	waveOption?: waveType;
};

const chooseWave = (wave: waveType) => {
	switch (wave) {
		case 1: {
			return <Wave />;
		}
		case 2: {
			return <Wave2 />;
		}
		case 3: {
			return <Wave3 />;
		}
		default:
			return <></>;
	}
};

const CustomSection = ({ id, children, waveOption = null }: Props) => {
	return (
		<Section style={{ textAlign: "center", paddingTop: "75px" }} id={id}>
			{children}
			{chooseWave(waveOption)}
		</Section>
	);
};

export default CustomSection;
