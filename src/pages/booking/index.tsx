import { Box, VStack, Text} from '@chakra-ui/react';
import TripSummary from './components/TripSummary';
// import ContactDetails from './components/ContactDetails';
import PassengersDetails from './components/PassengersDetails';
import { PrimaryButton } from '@/components';

const BookingDetails = () => {
    return (
        <Box maxW="1000px" mx="auto" p={8} borderWidth="1px" borderRadius="lg" bg="white" boxShadow="lg">
            {/* Tiêu đề lớn ở đầu trang */}
            <Text fontSize="3xl" fontWeight="bold" mb={8} textAlign="center" color="gray.700">
                Chi Tiết Thông Tin Đặt Vé
            </Text>
            
            <VStack spacing={8} align="stretch">
                {/* Trip Summary Section */}
                <Box borderWidth="1px" borderRadius="lg" p={6} bg="gray.50" boxShadow="sm">
                    <TripSummary />
                </Box>
                
                {/* Contact Details Section */}
                {/* <Box borderWidth="1px" borderRadius="lg" p={6} bg="gray.50" boxShadow="sm">
                    <ContactDetails />
                </Box> */}
                
                
                <Box borderWidth="1px" borderRadius="lg" p={6} bg="gray.50" boxShadow="sm">
                    <PassengersDetails />
                </Box>

                <PrimaryButton>
                    Thanh Toán
                </PrimaryButton>
                
            </VStack>
        </Box>
    );
};

export default BookingDetails;
