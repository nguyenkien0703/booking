// import { SearchTrip } from "@/components";
// import { Box, Flex } from "@chakra-ui/react";
// import TripItem from "./components/TripItem";

// export default function Trip() {
//     return (
//         <Flex
//             flexDirection={'column'}
//             paddingBottom={'50px'}
//         >
//             <Box
//                 padding={{
//                     base: '20px 20px',
//                     md: '30px 50px'
//                 }}
//                 width={'100%'}
//                 backgroundColor={'white'}
//             >
//                 <SearchTrip />
//             </Box>
//             <Flex
//                 flexDirection={'column'}
//                 backgroundColor={'#F3F3F3'}
//                 padding={{
//                     base: '20px 20px',
//                     md: '30px 50px'
//                 }}
//                 gap={10}

//             >
//                 <TripItem />
//                 <TripItem />
//                 <TripItem />
//                 <TripItem />
//                 <TripItem />
//                 <TripItem />
//             </Flex>
//         </Flex>
//     )
// }



// import { SearchTrip } from "@/components";
// import { Box, Flex } from "@chakra-ui/react";
// import TripItem from "./components/TripItem";
// import FilterSection from "./components/FilterSection";

// export default function Trip() {
//     return (
//         <Flex flexDirection={'column'} paddingBottom={'50px'}>
//             <Box
//                 padding={{
//                     base: '20px 20px',
//                     md: '30px 50px'
//                 }}
//                 width={'100%'}
//                 backgroundColor={'white'}
//             >
//                 <SearchTrip />
//             </Box>
//             <Flex
//                 flexDirection={{ base: 'column', md: 'row' }}
//                 backgroundColor={'#F3F3F3'}
//                 padding={{
//                     base: '20px 20px',
//                     md: '30px 50px'
//                 }}
//                 gap={10}
//                 justifyContent={'center'}
//             >
//                 {/* Filter Section bên trái */}
//                 <Box
//                     width={{ base: '100%', md: '20%' }}  // Giảm độ rộng FilterSection
//                     padding={{ base: '10px', md: '20px' }}
//                     backgroundColor={'white'}
//                     borderRadius={'md'}
//                     boxShadow={'md'}
//                 >
//                     <FilterSection />
                    
                    
//                 </Box>
                
//                 {/* Trip Items bên phải */}
//                 <Flex
//                     flexDirection={'column'}
//                     width={{ base: '100%', md: '70%' }}  // Tăng độ rộng của TripItem
//                     alignItems={'center'}  // Căn giữa các TripItem
//                     gap={5}
//                 >
//                     <TripItem />
//                     <TripItem />
//                     <TripItem />
//                     <TripItem />
//                     <TripItem />
//                     <TripItem />
//                 </Flex>
//             </Flex>
//         </Flex>
//     );
// }

// index.tsx
// index.tsx
import { SearchTrip } from "@/components";
import { Box, Flex } from "@chakra-ui/react";
import TripItem from "./components/TripItem";
import FilterSection from "./components/FilterSection";
import Advertising from "./components/Advertising";

export default function Trip() {
    return (
        <Flex flexDirection="column" paddingBottom="50px">
            <Box
                padding={{
                    base: '20px 20px',
                    md: '30px 50px'
                }}
                width="100%"
                backgroundColor="white"
            >
                <SearchTrip />
            </Box>
            <Flex
                flexDirection={{ base: 'column', md: 'row' }}
                backgroundColor="#F3F3F3"
                padding={{
                    base: '20px 20px',
                    md: '30px 50px'
                }}
                gap={10}
                justifyContent="center"
            >
                {/* Filter Section bên trái */}
                <Box
                    width={{ base: '100%', md: '20%' }}
                    padding={{ base: '10px', md: '20px' }}
                    backgroundColor="white"
                    borderRadius="md"
                    boxShadow="md"
                >
                    <FilterSection />
                </Box>
                
                {/* Trip Items giữa */}
                <Flex
                    flexDirection="column"
                    width={{ base: '100%', md: '50%' }}
                    alignItems="center"
                    gap={5}
                >
                    <TripItem />
                    <TripItem />
                    <TripItem />
                    <TripItem />
                    <TripItem />
                    <TripItem />
                </Flex>

                {/* Advertising bên phải */}
                <Box
                    width={{ base: '100%', md: '20%' }}
                    padding={{ base: '10px', md: '20px' }}
                    backgroundColor="white"
                    borderRadius="md"
                    boxShadow="md"
                >
                    <Advertising 
                        imageSrc="https://nonwovenn.com/wp-content/uploads/2021/08/Relocating_Production_featured.jpg" 
                        title="International Guideline" 
                        description="COVID safety measures adopted by various countries including VISA restrictions, quarantine rules, etc." 
                        buttonText="View guidelines" 
                    />
                    <Advertising 
                        imageSrc="https://vnc-os.com/wp-content/uploads/2022/09/discount.jpg" 
                        title="Great Deal" 
                        description="Get more, spend less with up to $575 off when you book your flight + stay together,etc" 
                        buttonText="View Deal" 
                    />
                    <Advertising 
                        imageSrc="https://evngenco2.vn/uploads/news/2023_05/cach-quet-ma-qr-hinh-1.jpg" 
                        title="Tap into the world of travel" 
                        description="Scan the QR code with your device camera and download our app." 
                        buttonText="Scan QR" 
                    />

                </Box>
            </Flex>
        </Flex>
    );
}
