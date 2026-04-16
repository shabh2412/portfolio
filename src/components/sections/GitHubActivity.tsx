import { Box, Flex, Grid, Heading, HStack, Image, Link, Text } from "@chakra-ui/react";
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
      description="A year of commits, plus a few stats from my GitHub. Receipts for the craft, not a popularity contest."
    >
      <Grid templateColumns={{ base: "1fr", lg: "1.3fr 1fr" }} gap={6}>
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

        <Reveal delay={0.1}>
          <Box className="rp-card" p={{ base: 5, md: 8 }} h="full">
            <Heading as="h3" fontSize="lg" color="text" mb={6}>
              GitHub stats
            </Heading>
            <HStack spacing={4} justify="center" flexWrap="wrap">
              <Image
                src={`https://github-readme-stats.vercel.app/api?username=${profile.handle}&show_icons=true&count_private=true&hide_border=true&bg_color=11131d&title_color=5eead4&icon_color=8b5cf6&text_color=b8bcd0&hide_title=true`}
                alt="GitHub stats"
                rounded="md"
                loading="lazy"
              />
              <Image
                src={`https://github-readme-streak-stats.herokuapp.com?user=${profile.handle}&theme=transparent&hide_border=true&background=11131d&stroke=5eead4&ring=5eead4&fire=8b5cf6&currStreakLabel=ffffff&sideLabels=b8bcd0&dates=b8bcd0&currStreakNum=e7e9f2&sideNums=e7e9f2`}
                alt="GitHub streak"
                rounded="md"
                loading="lazy"
              />
              <Image
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${profile.handle}&layout=compact&hide_border=true&bg_color=11131d&title_color=5eead4&text_color=b8bcd0&hide=html,css`}
                alt="Top languages"
                rounded="md"
                loading="lazy"
              />
            </HStack>
            <Text textAlign="center" mt={6} color="text.muted" fontSize="sm">
              Real numbers, live from GitHub.
            </Text>
          </Box>
        </Reveal>
      </Grid>
    </Section>
  );
};

export default GitHubActivity;
