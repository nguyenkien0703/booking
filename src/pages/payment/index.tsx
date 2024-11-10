import { Box, Flex, Heading, Button } from '@chakra-ui/react';
import Price from './components/Price';
import PaymentMethod from './components/PaymentMethod';
import { PrimaryButton } from '@/components';

export default function Payment() {
  const handlePayment = () => {
    alert('Thanh toán thành công!');
  };

  return (
    <Flex direction="column" align="center" p="40px" bg="#F9FAFB" minH="100vh">
      <Box bg="white" p="30px" borderRadius="lg" boxShadow="md" w={{ base: '90%', md: '500px' }}>
        <Heading size="lg" mb="6">Thanh Toán</Heading>
        
        {/* Tổng hóa đơn */}
        <Price />
        
        {/* Hình thức thanh toán */}
        <PaymentMethod />

        {/* Nút xác nhận thanh toán */}
        <PrimaryButton colorScheme="teal" width="100%" mt="4" onClick={handlePayment}>
          Xác nhận thanh toán
        </PrimaryButton>
      </Box>
    </Flex>
  );
}
