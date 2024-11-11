import { useState } from "react";
import {
  Box,
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  Checkbox,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import { PrimaryButton, SearchTrip } from "@/components";
import TripItem from "./components/TripItem";
import { TfiFilter } from "react-icons/tfi";


export default function Trip() {
  const [isFilterOpen, setFilterOpen] = useState(false);

  const openFilterModal = () => setFilterOpen(true);
  const closeFilterModal = () => setFilterOpen(false);

  return (
    <Flex flexDirection="column" paddingBottom="50px">
      <Box
        padding={{
          base: "20px 20px",
          md: "30px 50px",
        }}
        width="100%"
        backgroundColor="white"
      >
        <SearchTrip />
      </Box>

      <Flex
        flexDirection="column"
        backgroundColor="#F3F3F3"
        padding={{
          base: "20px 20px",
          md: "30px 50px",
        }}
      >
        <Flex
          alignSelf="center"
          flexDirection="column"
          width={{
            base: "100%",
            md: "80%",
            lg: "70%",
            xl: "60%",
            "2xl": "50%",
          }}
          gap={10}
        >
          <Box
            alignSelf="center"
            width={{
              base: '100%',
            }}
          >
            <PrimaryButton
              leftIcon={<TfiFilter />} 
              alignSelf="flex-end" 
              onClick={openFilterModal}
              width="300px"
              size="lg"
              
            >
              
              Lọc 
            </PrimaryButton>
          </Box>

          <TripItem />
          <TripItem />
          <TripItem />
          <TripItem />
          <TripItem />
          <TripItem />
        </Flex>
      </Flex>

      {/* Pop-up Filter */}
      <Modal isOpen={isFilterOpen} onClose={closeFilterModal} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Filter Options</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb={2}>Departure Time</Text>
            <RangeSlider defaultValue={[5, 20]} min={0} max={24}>
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>

            <Text mt={4} mb={2}>Price Range</Text>
            <RangeSlider defaultValue={[100, 1000]} min={0} max={2000}>
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>

            <Text mt={4} mb={2}>Stop Options</Text>
            <Checkbox>Nonstop</Checkbox>
            <Checkbox>1 Stop</Checkbox>
            <Checkbox>2+ Stops</Checkbox>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={closeFilterModal}>
              Close
            </Button>
            <Button colorScheme="blue" ml={3} onClick={closeFilterModal}>
              Apply Filters
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
