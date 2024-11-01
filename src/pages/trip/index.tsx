import { SearchTrip } from "@/components";
import { Box, Flex } from "@chakra-ui/react";
import TripItem from "./components/TripItem";

export default function Trip() {
    return (
        <Flex
            flexDirection={'column'}
            paddingBottom={'50px'}
        >
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
                flexDirection={'column'}
                backgroundColor={'#F3F3F3'}
                padding={{
                    base: '20px 20px',
                    md: '30px 50px'
                }}
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
    )
}