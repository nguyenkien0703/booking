import { SearchTrip } from "@/components";
import { HOME_ITEM_DATA } from "@/constants/data";
import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import HomeItemDescription from "./components/HomeItemDescription";
import { useNavigate } from "react-router-dom";

const Index = () => {
	const navigate = useNavigate();
	
	const handleSearchResults = (data: any) => {
        // Chuyển hướng sang trang trip và truyền data qua state
        navigate('/trip', { 
            state: { 
                trips: data.contents,
                totalItems: data.totalElements,
                totalPages: data.totalPage,
                currentPage: data.currentPage,
                perPage: data.perPage
            } 
        });
    }

	return (
		<Flex
			flexDirection={'column'}
			position={'relative'}
			paddingBottom={'4rem'}
		>
			<Box
				backgroundImage={'https://vivutoday.com/wp-content/uploads/2023/07/vivutoday-home-banner.jpg'}
				backgroundSize={'cover'}
				backgroundPosition={'center'}
				backgroundRepeat={'no-repeat'}
				width={'100%'}
				height={'500px'}
				alignItems={'center'}
				display={'flex'}
				flexDirection={'column'}
				justifyContent={'center'} // Căn giữa nội dung dọc theo Box
			>
				{/* Thêm một Box trống để tạo khoảng cách */}
				<Box height="20px" /> {/* Tạo khoảng trống để giữ vị trí ổn định */}
				
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
					<SearchTrip onSearch={handleSearchResults} />
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

export default Index;
