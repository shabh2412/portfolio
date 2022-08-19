/**
 *
 * @param color: string: specify the color of wave
 * @credits: https://smooth.ie/blogs/news/svg-wavey-transitions-between-sections
 * @returns an SVG With a wave pattern
 */

type Props = {
	bgColor?: string;
};

const Wave4 = ({ bgColor = "#153e75" }: Props) => {
	return (
		<div style={{ height: "150px", overflow: "hidden" }}>
			<svg
				viewBox="0 0 500 150"
				preserveAspectRatio="none"
				style={{ height: "100%", width: "100%" }}>
				<path
					d="M0.00,49.99 C148.14,195.89 250.28,-92.26 529.06,117.93 L501.97,-2.45 L-0.28,-1.47 Z"
					style={{ stroke: "none", fill: bgColor }}></path>
			</svg>
		</div>
	);
};

export default Wave4;
