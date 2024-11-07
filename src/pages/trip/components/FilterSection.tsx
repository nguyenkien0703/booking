// // import { Box, Text, VStack, Checkbox, Divider, Flex, Button, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb } from '@chakra-ui/react';
// // import { useState } from 'react';

// // export default function FilterSection() {
// //     const [departureTime, setDepartureTime] = useState([5, 17]); // Giả sử từ 5:00 AM đến 5:00 PM
// //     const [priceRange, setPriceRange] = useState([0, 2000000]); // Giả sử giá vé từ 0 đến 2.000.000đ
// //     return (
// //         <Box p={4} bg="white" borderRadius="md" boxShadow="md" width="100%">
// //             <Text fontSize="xl" fontWeight="bold" mb={4}>
// //                 Filter By
// //             </Text>

// //             {/* Stop Section */}
// //             <VStack align="start" spacing={2} mb={4}>
// //                 <Text fontWeight="bold">Stop</Text>
// //                 <Flex justifyContent="space-between" width="100%">
// //                     <Checkbox>Nonstop (23)</Checkbox>
// //                     <Text>$110</Text>
// //                 </Flex>
// //                 <Flex justifyContent="space-between" width="100%">
// //                     <Checkbox>1 Stop (4)</Checkbox>
// //                     <Text>$324</Text>
// //                 </Flex>
// //                 <Flex justifyContent="space-between" width="100%">
// //                     <Checkbox>2+ Stops (2)</Checkbox>
// //                     <Text>$349</Text>
// //                 </Flex>
// //             </VStack>

// //             <Divider />

// //             {/* Airlines Section */}
// //             <VStack align="start" spacing={2} mt={4} mb={4}>
// //                 <Text fontWeight="bold">Airlines</Text>
// //                 <Flex justifyContent="space-between" width="100%">
// //                     <Checkbox>ABC Air Technologies</Checkbox>
// //                     <Text>$203</Text>
// //                 </Flex>
// //                 <Flex justifyContent="space-between" width="100%">
// //                     <Checkbox>ABC Airlines</Checkbox>
// //                     <Text>$160</Text>
// //                 </Flex>
// //                 <Flex justifyContent="space-between" width="100%">
// //                     <Checkbox>XYZ Airways</Checkbox>
// //                     <Text>$212</Text>
// //                 </Flex>
// //                 <Flex justifyContent="space-between" width="100%">
// //                     <Checkbox>BOP Links</Checkbox>
// //                     <Text>$129</Text>
// //                 </Flex>
// //                 <Flex justifyContent="space-between" width="100%">
// //                     <Checkbox>EDF Express</Checkbox>
// //                     <Text>$190</Text>
// //                 </Flex>
// //             </VStack>

// //             <Divider />

// //             {/* Travel and Baggage Section */}
// //             <VStack align="start" spacing={2} mt={4} mb={4}>
// //                 <Text fontWeight="bold">Travel and Baggage</Text>
// //                 <Flex justifyContent="space-between" width="100%">
// //                     <Checkbox>Carry-on bag</Checkbox>
// //                     <Text>$129</Text>
// //                 </Flex>
// //                 <Flex justifyContent="space-between" width="100%">
// //                     <Checkbox>Checked bag</Checkbox>
// //                     <Text>$99</Text>
// //                 </Flex>
// //             </VStack>

// //             <Divider />

// //             {/* Departure Time Section */}
// //             <VStack align="start" spacing={2} mt={4} mb={4}>
// //                 <Text fontWeight="bold">Giờ xuất phát</Text>
// //                 <Flex justifyContent="space-between" width="100%">
// //                     <Text>Mon {departureTime[0]}:00 AM</Text>
// //                     <Text>Tue {departureTime[1] % 12}:00 {departureTime[1] >= 12 ? 'PM' : 'AM'}</Text>
// //                 </Flex>
// //                 <RangeSlider
// //                     min={5}
// //                     max={24}
// //                     step={1}
// //                     defaultValue={departureTime}
// //                     onChangeEnd={(val) => setDepartureTime(val)}
// //                     colorScheme="purple"
// //                 >
// //                     <RangeSliderTrack>
// //                         <RangeSliderFilledTrack />
// //                     </RangeSliderTrack>
// //                     <RangeSliderThumb index={0} />
// //                     <RangeSliderThumb index={1} />
// //                 </RangeSlider>
// //             </VStack>

// //             <Divider />

// //             {/* Price Range Section */}
// //             <VStack align="start" spacing={2} mt={4} mb={4}>
// //                 <Text fontWeight="bold">Giá vé</Text>
// //                 <Flex justifyContent="space-between" width="100%">
// //                     <Text>{priceRange[0].toLocaleString()}đ</Text>
// //                     <Text>{priceRange[1].toLocaleString()}đ</Text>
// //                 </Flex>
// //                 <RangeSlider
// //                     min={0}
// //                     max={2000000}
// //                     step={50000}
// //                     defaultValue={priceRange}
// //                     onChangeEnd={(val) => setPriceRange(val)}
// //                     colorScheme="purple"
// //                 >
// //                     <RangeSliderTrack>
// //                         <RangeSliderFilledTrack />
// //                     </RangeSliderTrack>
// //                     <RangeSliderThumb index={0} />
// //                     <RangeSliderThumb index={1} />
// //                 </RangeSlider>
// //             </VStack>

// //             <Divider />
// //             <Divider />

// //             {/* Departure Airports Section */}
// //             <VStack align="start" spacing={2} mt={4} mb={4}>
// //                 <Text fontWeight="bold">Departure Airports</Text>
// //                 <Flex justifyContent="space-between" width="100%">
// //                     <Checkbox>LCY, London (11)</Checkbox>
// //                     <Text>$221</Text>
// //                 </Flex>
// //                 <Flex justifyContent="space-between" width="100%">
// //                     <Checkbox>LHR, London (19)</Checkbox>
// //                     <Text>$143</Text>
// //                 </Flex>
// //             </VStack>

// //             <Divider />

// //             {/* Arrival Airports Section */}
// //             <VStack align="start" spacing={2} mt={4} mb={4}>
// //                 <Text fontWeight="bold">Arrival Airports</Text>
// //                 <Flex justifyContent="space-between" width="100%">
// //                     <Checkbox>NBO, Nairobi (32)</Checkbox>
// //                     <Text>$122</Text>
// //                 </Flex>
// //                 <Flex justifyContent="space-between" width="100%">
// //                     <Checkbox>WIL, Nairobi (21)</Checkbox>
// //                     <Text>$107</Text>
// //                 </Flex>
// //             </VStack>

// //             <Divider />

// //             {/* Reset and Apply Filters Buttons */}
// //             <Flex justifyContent="space-between" mt={4}>
// //                 <Button variant="outline" colorScheme="blue">
// //                     Reset
// //                 </Button>
// //                 <Button colorScheme="blue">Apply Filters</Button>
// //             </Flex>
// //         </Box>
// //     );
// // }

// import { Button, Box, Text, Flex, VStack, Checkbox, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure } from '@chakra-ui/react';
// import { useState } from 'react';

// export default function FilterPopup() {
//     const { isOpen, onOpen, onClose } = useDisclosure();
//     const [priceRange, setPriceRange] = useState([0, 2000000]);
//     const [departureTime, setDepartureTime] = useState([5, 24]);

//     return (
//         <>
//             <Button onClick={onOpen}>Filter</Button>
            
//             <Modal isOpen={isOpen} onClose={onClose}>
//                 <ModalOverlay />
//                 <ModalContent>
//                     <ModalHeader>Filter Options</ModalHeader>
//                     <ModalCloseButton />
//                     <ModalBody>
//                         {/* Thời gian khởi hành */}
//                         <VStack align="start" spacing={2} mb={4}>
//                             <Text fontWeight="bold">Departure Time</Text>
//                             <RangeSlider
//                                 defaultValue={departureTime}
//                                 min={0}
//                                 max={24}
//                                 onChangeEnd={(val) => setDepartureTime(val)}
//                             >
//                                 <RangeSliderTrack>
//                                     <RangeSliderFilledTrack />
//                                 </RangeSliderTrack>
//                                 <RangeSliderThumb index={0} />
//                                 <RangeSliderThumb index={1} />
//                             </RangeSlider>
//                         </VStack>

//                         {/* Giá vé */}
//                         <VStack align="start" spacing={2} mb={4}>
//                             <Text fontWeight="bold">Price Range</Text>
//                             <RangeSlider
//                                 defaultValue={priceRange}
//                                 min={0}
//                                 max={2000000}
//                                 step={50000}
//                                 onChangeEnd={(val) => setPriceRange(val)}
//                             >
//                                 <RangeSliderTrack>
//                                     <RangeSliderFilledTrack />
//                                 </RangeSliderTrack>
//                                 <RangeSliderThumb index={0} />
//                                 <RangeSliderThumb index={1} />
//                             </RangeSlider>
//                         </VStack>

//                         {/* Điểm dừng chân */}
//                         <VStack align="start" spacing={2} mb={4}>
//                             <Text fontWeight="bold">Stop Options</Text>
//                             <Checkbox>Nonstop</Checkbox>
//                             <Checkbox>1 Stop</Checkbox>
//                             <Checkbox>2+ Stops</Checkbox>
//                         </VStack>
//                     </ModalBody>

//                     <ModalFooter>
//                         <Button variant="ghost" onClick={onClose}>Close</Button>
//                         <Button colorScheme="blue" onClick={() => {
//                             // Gửi lựa chọn lọc về để cập nhật kết quả tìm kiếm
//                             onClose();
//                         }}>Apply Filters</Button>
//                     </ModalFooter>
//                 </ModalContent>
//             </Modal>
//         </>
//     );
// }
