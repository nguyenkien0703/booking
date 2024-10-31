import {ChakraProvider} from "@chakra-ui/react";
import {chakraTheme} from "@/themes";
export default function ChakraCustomProvider({children}: {children: React.ReactNode}) {
	return (
		<ChakraProvider theme={chakraTheme}>
			{children}
		</ChakraProvider>
	)
}