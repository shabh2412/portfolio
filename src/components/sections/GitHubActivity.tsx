import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import { profile } from "../../data/profile";

const calendarTheme = {
  level0: "#11131d",
  level1: "#134e4a",
  level2: "#0f766e",
  level3: "#14b8a6",
  level4: "#5eead4",
};

const GitHubActivity = () => {
  return (
    <Section
      id="github"
      eyebrow="open source"
      title="I ship in public."
      description="A year of commits on GitHub. Receipts for the craft, not a popularity contest."
    >
      <Reveal>
        <Box className="rp-card" p={{ base: 5, md: 8 }}>
          <Flex justify="space-between" align="center" mb={6} flexWrap="wrap" gap={3}>
            <Heading as="h3" fontSize="lg" color="text">
              Contributions
            </Heading>
            <Link
              href={profile.socials.github}
              isExternal
              fontSize="sm"
              className="rp-font-mono"
              color="accent"
            >
              @{profile.handle} ↗
            </Link>
          </Flex>
          <Box overflowX="auto">
            <GitHubCalendar
              username={profile.handle}
              theme={calendarTheme}
              blockMargin={4}
              blockRadius={3}
              blockSize={12}
              fontSize={14}
              hideColorLegend={false}
              hideMonthLabels={false}
            />
          </Box>
        </Box>
      </Reveal>
    </Section>
  );
};

export default GitHubActivity;
