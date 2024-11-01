import { PrimaryButton } from "@/components";
import { Text, Image, Box, Flex, Select, Grid, GridItem, Input, Button } from "@chakra-ui/react";
import { IoIosSwap, IoIosSearch } from 'react-icons/io'

const Index = () => {
	return (
		<Flex
			flexDirection={'column'}
			position={'relative'}
		>
			{/* <Image
				src="/logo.jpg"
				alt="logo"
				position={'absolute'}
				width={'100%'}
				height={'400px'}
				objectFit={'cover'}
			/> */}
			<Box
				position={'absolute'}
				backgroundColor={'black'}
				width={'100%'}
				height={'500px'}
				opacity={0.3}
			/>
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
				alignSelf={'center'}
				padding={{
					base: '16px 12px',
					md: '20px 24px',
				}}
				backgroundColor={'white'}
				marginTop={'20px'}
				zIndex={2}
				width={{
					base: '100%',
					lg: '70%',
					'xl': '60%',
					'2xl': '50%',
				}}
			>
				<Text variant={'h3'} color='black'>
					Search Trips
				</Text>
				<Grid templateColumns={'repeat(2, 1fr)'} mt={3} gap={3}>
					<GridItem
						colSpan={{
							base: 2,
							md: 1,
						}}
						display={'flex'}
						alignItems={'center'}
						gap={3}
					>
						<Select
							placeholder="From"
						>
							<option value="option1">Option 1</option>
							<option value="option2">Option 2</option>
							<option value="option3">Option 3</option>
						</Select>
						<IoIosSwap size={50} />
						<Select
							placeholder="From"
						>
							<option value="option1">Option 1</option>
							<option value="option2">Option 2</option>
							<option value="option3">Option 3</option>
						</Select>
					</GridItem>
					<GridItem
						colSpan={{
							base: 2,
							md: 1,
						}}
						display={'flex'}
						alignItems={'center'}
						gap={3}
					>
						<Input
							type="datetime-local"
						/>
						<PrimaryButton
							leftIcon={<IoIosSearch />}
						>
							Search
						</PrimaryButton>
					</GridItem>
				</Grid>
			</Box>
		</Flex>
	)
}

export default Index