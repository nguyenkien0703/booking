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



import { SearchTrip } from "@/components";
import { Box, Flex } from "@chakra-ui/react";
import TripItem from "./components/TripItem";
import FilterSection from "./components/FilterSection";

export default function Trip() {
    return (
        <Flex flexDirection={'column'} paddingBottom={'50px'}>
            <Box
                padding={{
                    base: '20px 20px',
                    md: '30px 50px'
                }}
                width={'100%'}
                backgroundColor={'white'}
            >
                <SearchTrip />
            </Box>
            <Flex
                flexDirection={{ base: 'column', md: 'row' }}
                backgroundColor={'#F3F3F3'}
                padding={{
                    base: '20px 20px',
                    md: '30px 50px'
                }}
                gap={10}
                justifyContent={'center'}
            >
                {/* Filter Section bên trái */}
                <Box
                    width={{ base: '100%', md: '20%' }}  // Giảm độ rộng FilterSection
                    padding={{ base: '10px', md: '20px' }}
                    backgroundColor={'white'}
                    borderRadius={'md'}
                    boxShadow={'md'}
                >
                    <FilterSection />
                    <FilterSection />
                    <FilterSection />
                </Box>
                
                {/* Trip Items bên phải */}
                <Flex
                    flexDirection={'column'}
                    width={{ base: '100%', md: '70%' }}  // Tăng độ rộng của TripItem
                    alignItems={'center'}  // Căn giữa các TripItem
                    gap={10}
                >
                    <TripItem />
                    <TripItem />
                    <TripItem />
                    <TripItem />
                    <TripItem />
                    <TripItem />
                </Flex>
            </Flex>
        </Flex>
    );
}


