import { LIST_HEADER_MENU } from "@/constants/data";
import { Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import PrimaryButton from "../Button/PrimaryButton";


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
			<Flex
				gap={5}
				display={{
					base: 'none',
					md: 'flex',
				}}
			>
				{LIST_HEADER_MENU.map((item: any) => {
					return (
						<Link
							to={item.url}
							key={item.label}
						>
							<Text variant={'body-default'}>
								{item.label}
							</Text>
						</Link>
					)
				})}
			</Flex>
			<Flex
				gap={2}
				alignItems={'center'}
				display={{
					base: 'none',
					md: 'flex',
				}}
			>
				<PrimaryButton>
					Login or Create Account
				</PrimaryButton>
				<Text
					color='primary.600'
					variant={'body-default-bold'}
					cursor={'pointer'}
				>
					Select Language
				</Text>
			</Flex>
		</header>
	);
};

export default Header;