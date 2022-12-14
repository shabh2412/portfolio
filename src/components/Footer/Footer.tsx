import { Flex, Link } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/react";

type Props = {};

const Footer = (props: Props) => {
	return (
		<Flex
			w="full"
			bg="primary"
			p={50}
			alignItems="center"
			justifyContent="center">
			<Flex
				w="full"
				as="footer"
				flexDir={{
					base: "column",
					sm: "row",
				}}
				align="center"
				justify="center"
				px="6"
				py="4">
				<chakra.p
					py={{
						base: "2",
						sm: "0",
					}}
					color="whiteAlpha.800">
					Designed & Built by{"  "}
					<span>
						<Link
							href="https://www.linkedin.com/in/rishabh-panesar/"
							isExternal>
							Rishabh Panesar,
						</Link>
					</span>{" "}
					2022 All rights reserved.
				</chakra.p>
			</Flex>
		</Flex>
	);
};

export default Footer;
