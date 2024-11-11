import { Box, VStack, Text, Flex, Input, Select, Divider } from '@chakra-ui/react';

export default function PassengersDetails() {
    return (
        <Box
            width="100%"
            maxW="900px"
            p={6}
            bg="white"
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="md"
            mx="auto"
        >
            {/* Title */}
            <Text fontSize="xl" fontWeight="bold" mb={2}>
                Quý khách vui lòng điền thông tin
            </Text>
            <Flex justifyContent="space-between" alignItems="center" mb={4}>
                {/* <Text fontSize="md" fontWeight="semibold">
                    Primary Passenger
                </Text> */}
                <Select maxW="200px" placeholder="Người lớn (trên 12 tuổi)">
                    <option value="adult">Người lớn (trên 12 tuổi)</option>
                    <option value="child">Trẻ em (từ 2-12 tuổi)</option>
                    <option value="infant">Trẻ sơ sinh (dưới 2 tuổi)</option>
                </Select>
            </Flex>

            {/* Alert for instructions */}
            {/* <Alert status="info" borderRadius="md" mb={4}>
                <AlertIcon />
                Use all given names and surnames <strong> exactly as they appear in your passport/ID</strong> to avoid boarding complications.
            </Alert> */}

            <Divider mb={4} />

            {/* Form Fields */}
            <VStack spacing={4} align="stretch">
                <Flex gap={4} flexDirection={{ base: "column", md: "row" }}>
                    <Box flex="1">
                        <Text fontSize="sm" fontWeight="semibold">Họ và tên</Text>
                        <Input placeholder="v.d. Nguyễn Văn A" />
                    </Box>
                    <Box flex="1">
                        <Text fontSize="sm" fontWeight="semibold">Số Điện Thoại</Text>
                        <Input placeholder="Số Điện Thoại" />
                    </Box>
                </Flex>

                {/* <Flex gap={4} flexDirection={{ base: "column", md: "row" }}>
                    <Box flex="1">
                        <Text fontSize="sm" fontWeight="semibold">Nationality</Text>
                        <Select placeholder="Select">
                            <option value="us">United States</option>
                            <option value="vn">Vietnam</option>
                            <option value="jp">Japan</option> */}
                            {/* Thêm các quốc gia khác vào đây */}
                        {/* </Select>
                    </Box>
                    <Box flex="1">
                        <Text fontSize="sm" fontWeight="semibold">Gender</Text>
                        <Select placeholder="Select">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </Select>
                    </Box>
                    <Box flex="1">
                        <Text fontSize="sm" fontWeight="semibold">Date of birth</Text>
                        <Input type="date" placeholder="dd/mm/yyyy" />
                    </Box>
                </Flex> */}

                <Flex gap={4} flexDirection={{ base: "column", md: "row" }}>
                    <Box flex="1">
                        {/* Email */}
                        <Text fontSize="sm" fontWeight="bold" mb={1}>Email</Text>
                        <Input placeholder="nguyenvana@gmail.com" />
                    </Box>
                    <Box flex="1">
                        <Text fontSize="sm" fontWeight="semibold">Loại ghế</Text>
                        <Select placeholder="Ghế đầu">
                            <option value="us">Ghế đầu</option>
                            <option value="vn">Ghế giữa</option>
                            <option value="jp">Ghế cuối</option>
                            {/* Thêm các quốc gia khác vào đây */}
                        </Select>
                    </Box>
                    {/* <Box flex="1">
                        <Text fontSize="sm" fontWeight="semibold">Passport number</Text>
                        <Input placeholder="Passport number..." />
                    </Box> */}
                    {/* <Box flex="1">
                        <Text fontSize="sm" fontWeight="semibold">Passport expiration date</Text>
                        <Input type="date" placeholder="dd/mm/yyyy" />
                        <Checkbox mt={2}>No expiration</Checkbox>
                    </Box> */}
                </Flex>
            </VStack>
        </Box>
    );
}
