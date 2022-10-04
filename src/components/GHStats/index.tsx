import { Box, Flex, Heading } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";
// import "./Github.css";
export const GitHub = () => {
	const github = {
		margin: "auto",
		border: "5px solid",
		padding: "20px",
		borderRadius: "10px",
	};
	return (
		<Box className="github">
			<Heading textAlign="center" my={2}>
				My github calendar
			</Heading>
			<Box
				w={["100%", "100%", "65%"]}
				style={github}
				className="github_Calender">
				<GitHubCalendar
					style={{ margin: "auto" }}
					username="shabh2412"
					// year={new Date().getFullYear()}
				/>
			</Box>
			<Box mt={10}>
				<Heading textAlign="center">My Github Stats</Heading>
				<Flex justifyContent="center">
					<img
						src="https://github-readme-stats.vercel.app/api?username=shabh2412&show_icons=true&&countprivate=true&theme=react&hide_title=true"
						alt="GitHub stats"
					/>
				</Flex>
			</Box>
		</Box>
	);
};
