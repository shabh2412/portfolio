import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import "./index.css";

import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/provider";
import { ScrollingProvider } from "react-scroll-section";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
	brand: {
		900: "#1a365d",
		800: "#153e75",
		700: "#2a69ac",
		600: "#368be6",
		500: "#38fdff",
	},
	// primary: "#353941",
	primary: "#0e1629",
	secondary: "#5F85DB",
	dark: "#26282B",
	bluedark: "rgb(137,147,177)",
	bg: {
		lightGray: "#a6a6a6",
		dark: "#0e1629",
		secondary: "#5F85DB",
	},
	text: {
		white: "white",
		lightGray: "#a6a6a6",
	},
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<BrowserRouter>
				<ScrollingProvider>
					<App />
				</ScrollingProvider>
			</BrowserRouter>
		</ChakraProvider>
	</React.StrictMode>
);
