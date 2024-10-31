import {Button, Text} from "@chakra-ui/react";
import {formatNumber} from "@/utils";

const Index = () => {
	const number = 10.200
	const formattedNumber = formatNumber(number)
	console.log(formattedNumber)
	return (
		<div>
			<Button bgColor={'primary.50'}>
				Check
			</Button>
			<Text variant={'display2'}>
					HOME
			</Text>
		</div>
	)
}

export default Index