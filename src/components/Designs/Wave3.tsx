/**
 *
 * @param
 * @credits: https://smooth.ie/blogs/news/svg-wavey-transitions-between-sections
 * @returns an SVG With a wave pattern
 */

type Props = {
	bgColor?: string;
};

const Wave3 = ({ bgColor = "green" }: Props) => {
	return (
		<div
			style={{
				height: "150px",
				overflow: "hidden",
				backgroundColor: "transparent",
			}}>
			<svg
				viewBox="0 0 500 150"
				preserveAspectRatio="none"
				style={{ height: "100%", width: "100%" }}>
				<path
					d="M499.15,153.46 C640.24,-43.91 -82.11,237.34 233.35,38.98 L-123.87,160.37 L-20.60,166.29 Z"
					style={{ stroke: "none", fill: bgColor }}></path>
			</svg>
		</div>
	);
};

export default Wave3;
