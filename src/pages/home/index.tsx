import { SearchTrip } from "@/components";
import { Text, Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import HomeItemDescription from "./components/HomeItemDescription";
import { HOME_ITEM_DATA } from "@/constants/data";

const Index = () => {
	return (
		<Flex
			flexDirection={'column'}
			position={'relative'}
			paddingBottom={'4rem'}
		>
			<Box
				backgroundColor={'gray.500'}
				width={'100%'}
				height={'500px'}
				alignItems={'center'}
				display={'flex'}
				flexDirection={'column'}
			>
				<Text
					textAlign={'center'}
					variant={{
						base: 'display6',
						md: 'display5',
					}}
					color={'white'}
					zIndex={2}
					whiteSpace={'pre-wrap'}
					marginTop={{
						base: '40px',
					}}
				>
					{"Transforming Travel, \n"}
					{"One Trip at a Time"}
				</Text>
				<Box
					alignSelf="center"
					padding={{
						base: '16px 12px',
						md: '20px 24px',
					}}
					backgroundColor="white"
					marginTop="20px"
					zIndex={2}
					width={{
						base: '100%',
						lg: '70%',
						'xl': '60%',
						'2xl': '50%',
					}}
					boxShadow="lg" // Thêm shadow để hộp chứa nổi bật hơn
				>
					<Text variant="h3" color="black">
						Tìm kiếm chuyến đi
					</Text>
					<SearchTrip />
				</Box>
			</Box>
			<Grid
				margin={'0 auto'}
				padding={{
					base: '0 40px',
					md: '0 80px',
					lg: '0 120px',
					'xl': '0 160px',
				}}
				templateColumns={{
					base: 'repeat(1, 1fr)',
					md: 'repeat(2, 1fr)',
					lg: 'repeat(3, 1fr)',
				}}
				gap={20}
				marginTop={{
					base: '40px',
					md: '80px',
				}}
			>
				{
					HOME_ITEM_DATA.map((item: any) => {
						return (
							<GridItem
								key={item.title}
							>
								<HomeItemDescription
									title={item.title}
									description={item.description}
									icon={item.icon}
								/>
							</GridItem>
						)
					})
				}
			</Grid>
		</Flex>
	)
}

export default Index