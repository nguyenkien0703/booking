import { FormControl, FormLabel, Select } from '@chakra-ui/react';

export default function PaymentMethod() {
  return (
    <FormControl mb="4">
      <FormLabel fontWeight="bold">Hình thức thanh toán</FormLabel>
      <Select placeholder="Chọn hình thức thanh toán">
        <option value="credit-card">Thẻ tín dụng</option>
        <option value="momo">Ví Momo</option>
        <option value="bank-transfer">Chuyển khoản ngân hàng</option>
      </Select>
    </FormControl>
  );
}
