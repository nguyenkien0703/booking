import {Flex, Image, Text} from "@chakra-ui/react";

const Header = () => {
	return (
		<header className="w-full h-16 px-4 shadow-xl flex justify-between items-center">
			<Flex alignItems={'center'} gap={2}>
				<Image
					width={10}
					height={10}
					className={'object-cover rounded-xl'}
					src="/logo.jpg"
				/>
				<Text>
					DRIVE HUB
				</Text>
			</Flex>
		</header>
	);
};

export default Header;