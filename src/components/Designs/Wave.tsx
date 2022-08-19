import React from "react";

type Props = {};

const Wave = (props: Props) => {
	return (
		<div style={{ height: "150px", overflow: "hidden" }}>
			<svg
				viewBox="0 0 500 150"
				preserveAspectRatio="none"
				style={{ height: "100%", width: "100%" }}>
				<path
					d="M0.00,92.27 C216.83,192.92 304.30,8.39 500.00,109.03 L500.00,0.00 L0.00,0.00 Z"
					style={{ stroke: "none", fill: "#153e75" }}></path>
			</svg>
		</div>
	);
};

export default Wave;
