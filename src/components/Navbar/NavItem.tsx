import { Text } from "@chakra-ui/layout";
import style from "./NavItem.module.css";

type Props = {
	sectionHandler: {
		onClick: () => void;
		selected: boolean;
	};
	children: string;
};

const NavItem = ({ sectionHandler, children }: Props) => {
	return (
		<Text className={style.navItem} onClick={sectionHandler.onClick}>
			{children}
		</Text>
	);
};

export default NavItem;
