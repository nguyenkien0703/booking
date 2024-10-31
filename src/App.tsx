import ChakraCustomProvider from "@/providers/ChakraCustomProvider.tsx";
import QueryProvider from "@/providers/QueryProvider.tsx";
import UpdateProvider from "@/providers/UpdateProvider.tsx";
import AppRoutes from "@/routes/index.tsx";


function App() {
	
	return (
		<ChakraCustomProvider>
			<QueryProvider>
				<UpdateProvider>
					<AppRoutes/>
				</UpdateProvider>
			</QueryProvider>
		</ChakraCustomProvider>
	)
}

export default App
