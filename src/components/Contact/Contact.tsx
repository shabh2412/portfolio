import { Box, Flex, Link, Text, Wrap, WrapItem } from "@chakra-ui/layout";
import Title from "../Hero/Title";
import CustomSection from "../SectionComponent/CustomSection";
import {
	BsTelephoneFill,
	BsWhatsapp,
	BsGithub,
	BsLinkedin,
	BsTwitter,
	BsInstagram,
} from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { IconButton } from "@chakra-ui/button";

type Props = {};

const contact = [
	{ icon: BsTelephoneFill, link: "tel:+917738738680" },
	{
		icon: BsWhatsapp,
		link: "https://api.whatsapp.com/send/?phone=917738738680&text=Hey+Rishabh%21+I+just+checked+out+your+website%2C+and+I+would+love+to+discuss+about+a+project+with+you&app_absent=0&lang=en",
	},
	{
		icon: BsGithub,
		link: "https://github.com/shabh2412",
	},
	{
		icon: HiOutlineMail,
		link: "mailto: rishabhpanesar@gmail.com",
	},
	{
		icon: BsLinkedin,
		link: "https://www.linkedin.com/in/rishabh-panesar/",
	},
	{
		icon: BsTwitter,
		link: "https://twitter.com/PanesarRishabh",
	},
	{
		icon: BsInstagram,
		link: "https://www.instagram.com/rishabhpanesar/",
	},
];

const Contact = (props: Props) => {
	return (
		<CustomSection id="contact">
			<Title
				title="Get in Touch"
				size="5xl"
				color="secondary"
				textDecoration="none"
			/>
			<Flex justifyContent="center" alignItems="center" pt="10" pb="30">
				<Box w={["90%", "75%"]}>
					<Text color="whiteAlpha.700" fontSize="xl">
						I'm actively looking for any new opportunities in Full Stack Web
						Development. If you have any project or opportunity, then please
						connect with me via any of the platform below :)
					</Text>
					<Text color="whiteAlpha.700" fontSize="xl">
						Call me on:{" "}
						<span style={{ textDecoration: "underline" }}>+917738738680</span>
					</Text>
					<Wrap justify="center" my="10" spacing="10">
						{contact.map((c, index) => (
							<Box key={`${index}-${c.link}`}>
								<WrapItem>
									<Link href={c.link} isExternal bg="transparent">
										<IconButton
											// isRound
											colorScheme="blue"
											variant="outline"
											aria-label="contact-button"
											size="lg"
											icon={<c.icon />}
										/>
									</Link>
								</WrapItem>
							</Box>
						))}
					</Wrap>
				</Box>
			</Flex>
		</CustomSection>
	);
};

export default Contact;
