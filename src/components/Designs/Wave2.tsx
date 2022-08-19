/**
 *
 * @param
 * @credits: https://smooth.ie/blogs/news/svg-wavey-transitions-between-sections
 * @returns an SVG With a wave pattern
 */

const Wave2 = () => {
	return (
		<div style={{ height: "150px", overflow: "hidden" }}>
			<svg
				viewBox="0 0 500 150"
				preserveAspectRatio="none"
				style={{ height: "100%", width: "100%" }}>
				<path
					d="M-18.90,41.95 C129.51,282.73 318.00,-105.09 538.66,179.12 L500.00,150.00 L0.00,150.00 Z"
					style={{ stroke: "none", fill: "#153e75" }}></path>
			</svg>
		</div>
	);
};

export default Wave2;
