import { Box, Checkbox, Flex, Text, Button, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Divider } from '@chakra-ui/react';
import { useState } from 'react';

export default function FilterSection() {
    const [sliderValue, setSliderValue] = useState(50);

    return (
        <Box
            backgroundColor={'white'}
            p={4}
            width={'235px'}
            boxShadow={'0px 4px 4px rgba(141, 141, 141, 0.25)'}
            borderRadius={'4px'}
        >
            {/* Header */}
            <Text fontFamily={'Segoe UI'} fontWeight={600} fontSize={'18px'} color={'black'}>
                Lọc
            </Text>
            
            <Divider my={4} />

            {/* Filter Section */}
            <Box>
                <Text fontWeight={600} fontSize={'14px'} color={'black'}>Vị trí ghế</Text>
                <Flex direction="column" mt={2} gap={3}>
                    <Flex alignItems="center" gap={2}>
                        <Checkbox colorScheme="purple" />
                        <Text fontWeight={400} fontSize={'14px'}>Ghế hàng đầu</Text>
                        <Text fontWeight={400} fontSize={'14px'} ml="auto">$110</Text>
                    </Flex>
                    <Flex alignItems="center" gap={2}>
                        <Checkbox colorScheme="purple" />
                        <Text fontWeight={400} fontSize={'14px'}>Ghế ngồi giữa</Text>
                        <Text fontWeight={400} fontSize={'14px'} ml="auto">$120</Text>
                    </Flex>
                    <Flex alignItems="center" gap={2}>
                        <Checkbox colorScheme="purple" />
                        <Text fontWeight={400} fontSize={'14px'}>Ghế ngồi cuối </Text>
                        <Text fontWeight={400} fontSize={'14px'} ml="auto">$130</Text>
                    </Flex>
                </Flex>
            </Box>

            <Divider my={4} />

            {/* Time Filter Section */}
            <Box>
                <Text fontWeight={600} fontSize={'14px'} color={'black'}>Giá vé </Text>
                <Slider
                    mt={4}
                    aria-label="slider-ex-1"
                    defaultValue={sliderValue}
                    onChange={(val) => setSliderValue(val)}
                >
                    <SliderTrack bg="gray.200">
                        <SliderFilledTrack bg="purple.500" />
                    </SliderTrack>
                    <SliderThumb boxSize={4} bg="purple.500" />
                </Slider>
            </Box>

            <Divider my={4} />

            {/* Action Buttons */}
            <Flex gap={3} mt={4}>
                <Button
                    width="80px"
                    color="purple.600"
                    fontWeight={600}
                    variant="ghost"
                >
                    Clear
                </Button>
                <Button
                    width="131px"
                    color="white"
                    backgroundColor="purple.500"
                    fontWeight={600}
                    _hover={{ bg: 'purple.600' }}
                >
                    Apply
                </Button>
            </Flex>
        </Box>
    );
}
