import { Box, Flex, Text, VStack, Divider, Alert, AlertIcon } from '@chakra-ui/react';
import { FaCarSide } from "react-icons/fa";

export default function TripSummary() {
    return (
        <Box
            width="100%"
            maxW="800px"
            p={6}
            bg="white"
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="md"
            mx="auto"
        >
            {/* Header Section */}
            <Text fontSize="xl" fontWeight="bold" mb={4}>
                Tóm tắt thông tin chuyến đi
            </Text>
            {/* <Flex justifyContent="space-between" alignItems="center" mb={4}>
                <HStack>
                    <Icon as={FaGlobe} color="blue.500" />
                    <Text fontSize="lg" fontWeight="bold">ABC Airline</Text>
                    <Text color="red.500">Non-refundable</Text>
                </HStack>
                <Text fontSize="md" fontWeight="semibold">
                    Travel Class: <span style={{ fontWeight: 'bold' }}>Economy</span>
                </Text>
            </Flex> */}

            {/* Trip Details Section */}
            <Box bg="#FFF5EB" p={4} borderRadius="md" mb={4}>
                <Flex justifyContent="space-between">
                    <VStack align="start" spacing={1}>
                        <Text fontSize="xl" fontWeight="bold">Thanh Hóa</Text>
                        <Text fontSize="lg">14.50</Text>
                        <Text fontSize="sm">Sun, 29 Jan 2023</Text>
                        <Text fontSize="sm">Moi Intl, Mombasa, Kenya</Text>
                        <Text fontSize="sm">Terminal - 2, Gate - 25</Text>
                    </VStack>

                    <VStack spacing={1} textAlign="center">
                        <Text fontSize="sm" color="gray.600">2hr 30min</Text>
                        <Flex justifyContent={'space-between'} gap={1} alignItems={'center'}>
                            <Box
                                width={'50px'}
                                height={'1px'}
                                bgColor={'gray.300'}
                            />
                            <FaCarSide
                                size={20}
                                //className='rotate-90'
                                color='gray'
                            />
                            <Box
                                width={'50px'}
                                height={'1px'}
                                bgColor={'gray.300'}
                            />
                        </Flex>
                    </VStack>

                    <VStack align="end" spacing={1}>
                        <Text fontSize="xl" fontWeight="bold">Hà Nội</Text>
                        <Text fontSize="lg">14.50</Text>
                        <Text fontSize="sm">Sun, 29 Jan 2023</Text>
                        <Text fontSize="sm">JFK Terminal, Nairobi, Kenya</Text>
                        <Text fontSize="sm">Terminal - 2, Gate - 25</Text>
                    </VStack>
                </Flex>

                <Divider my={4} />

                {/* Baggage Information */}
            </Box>

            <Flex justifyContent="space-between">
                <VStack align="start" spacing={1} >
                    <Text fontWeight="bold" fontSize="lg" >Tổng Cộng</Text>
                    <Text fontSize="2xl" fontWeight="bold" >100.000</Text>
                </VStack>



                {/* <VStack align="start" spacing={1}>
                        <Text fontWeight="bold">Cabin</Text>
                        <Text>7Kgs (1 Piece * 7kgs)</Text>
                    </VStack> */}
            </Flex>

            {/* Additional Information Section */}
            
            {/* <HStack spacing={4} my={2}>
                <HStack>
                    <Icon as={FaSuitcaseRolling} color="gray.600" />
                    <Text fontSize="sm">Separate tickets booked together for cheaper price</Text>
                </HStack>
                <HStack>
                    <Icon as={FaExchangeAlt} color="gray.600" />
                    <Text fontSize="sm">Change of Terminal</Text>
                </HStack>
                <HStack>
                    <Icon as={AiFillWarning} color="gray.600" />
                    <Text fontSize="sm">Self Transfer</Text>
                </HStack>
                <HStack>
                    <Text fontSize="sm">7kg</Text>
                </HStack>
            </HStack> */}

            {/* Warning Section */}
            <Alert status="info" variant="subtle" borderRadius="md" mt={4}>
                <AlertIcon />
                Khuyến cáo khách hàng không mang theo vật phẩm có mùi theo hành lý như mắm, sầu riêng,...
            </Alert>
        </Box>
    );
}
