import { Box, Text, Divider } from '@chakra-ui/react';

export default function Price() {
  return (
    <Box mb="4">
      <Text fontWeight="bold" fontSize="lg">Tổng hóa đơn</Text>
      <Text>Sản phẩm: Vé xe từ Hà Nội đến Nam Định</Text>
      <Text>Số lượng: 1</Text>
      <Text>Giá: 100,000 VND</Text>
      <Divider my="4" />
      <Text fontWeight="bold" fontSize="lg">Tổng cộng</Text>
      <Text fontSize="2xl" color="primary.500">100,000 VND</Text>
    </Box>
  );
}
