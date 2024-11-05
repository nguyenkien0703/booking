import { Box, Text, Flex, Input, Select, VStack } from '@chakra-ui/react';

export default function ContactDetails() {
    return (
        <Box
            width="100%"
            maxW="800px"
            p={6}
            bg="white"
            boxShadow="md"
            borderRadius="lg"
            mx="auto"
            my={4}
        >
            {/* Title */}
            <Text fontSize="lg" fontWeight="bold" mb={2}>
                Contact Details <span style={{ fontWeight: 'normal' }}>(Booking details will be sent to)</span>
            </Text>

            {/* Form Fields */}
            <VStack spacing={4} align="stretch">
                <Flex direction={{ base: 'column', md: 'row' }} gap={4}>
                    {/* Country Code */}
                    <Box flex="1">
                        <Text fontSize="sm" fontWeight="bold" mb={1}>Country Code</Text>
                        <Select placeholder="Select Country Code">
                            <option value="+1">+1</option>
                            <option value="+44">+44</option>
                            <option value="+91">+91</option>
                            {/* Add more country codes here as needed */}
                        </Select>
                    </Box>

                    {/* Mobile Number */}
                    <Box flex="2">
                        <Text fontSize="sm" fontWeight="bold" mb={1}>Mobile Number</Text>
                        <Input placeholder="Mobile numbers" />
                    </Box>
                </Flex>

                <Box>
                    {/* Email */}
                    <Text fontSize="sm" fontWeight="bold" mb={1}>Email</Text>
                    <Input placeholder="Email" />
                </Box>
            </VStack>
        </Box>
    );
}
