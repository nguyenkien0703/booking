// import { Grid, GridItem, Input, Box, Select, Icon } from '@chakra-ui/react';
// import { IoIosSearch, IoIosSwap } from 'react-icons/io';
// import PrimaryButton from '@/components/Button/PrimaryButton';
// import { MdLocationPin } from "react-icons/md";
// import { IoIosRadioButtonOn } from "react-icons/io";
// import { useState, useEffect } from 'react';

// export default function SearchTrip() {
//     const [dateValue, setDateValue] = useState("");
//     const [placeholderDate, setPlaceholderDate] = useState("");

//     useEffect(() => {
//         const currentDate = new Date();
//         const formattedDate = currentDate.toISOString().slice(0, 10); // Chỉ lấy ngày ở định dạng YYYY-MM-DD
//         setDateValue(formattedDate);

//         // Định dạng ngày cho placeholder theo dd/mm/yyyy
//         const placeholder = currentDate.toLocaleDateString("en-GB"); // Định dạng ngày thành dd/mm/yyyy
//         setPlaceholderDate(placeholder);
//     }, []);

//     const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setDateValue(event.target.value);
//     };

//     return (
//         <Grid templateColumns={'repeat(2, 1fr)'} mt={3} gap={3}>
//             <GridItem
//                 colSpan={{
//                     base: 2,
//                     md: 1,
//                 }}
//                 display={'flex'}
//                 alignItems={'center'}
//                 gap={3}
//             >
//                 <Box display="flex" alignItems="center" borderWidth="1px" borderRadius="md" paddingLeft={3} width="100%">
//                     <Icon as={IoIosRadioButtonOn} color="gray.500" />
//                     <Select placeholder="Nơi xuất phát" border="none" _focus={{ boxShadow: "none" }}>
//                         <option value="option1">Option 1</option>
//                         <option value="option2">Option 2</option>
//                         <option value="option3">Option 3</option>
//                     </Select>
//                 </Box>

//                 <Box mx={2}>
//                     <IoIosSwap size={24} />
//                 </Box>

//                 <Box display="flex" alignItems="center" borderWidth="1px" borderRadius="md" paddingLeft={3} width="100%">
//                     <Icon as={MdLocationPin} color="gray.500" />
//                     <Select placeholder="Nơi đến" border="none" _focus={{ boxShadow: "none" }}>
//                         <option value="option1">Option 1</option>
//                         <option value="option2">Option 2</option>
//                         <option value="option3">Option 3</option>
//                     </Select>
//                 </Box>
//             </GridItem>
            
//             <GridItem
//                 colSpan={{
//                     base: 2,
//                     md: 1,
//                 }}
//                 display={'flex'}
//                 alignItems={'center'}
//                 gap={3}
//             >
//                 <Input
//                     type="date"
//                     value={dateValue}
//                     onChange={handleDateChange}
//                     placeholder={placeholderDate} // Hiển thị ngày hiện tại trong placeholder
//                 />
                
//                 <PrimaryButton leftIcon={<IoIosSearch />}>
//                     Search
//                 </PrimaryButton>
//             </GridItem>
//         </Grid>
//     );
// }

import { Grid, GridItem, Input, Box, Select, Icon, FormControl, FormLabel } from '@chakra-ui/react';
import { IoIosSearch, IoIosSwap } from 'react-icons/io';
import PrimaryButton from '@/components/Button/PrimaryButton';
import { MdLocationPin } from "react-icons/md";
import { IoIosRadioButtonOn } from "react-icons/io";
import { useState, useEffect } from 'react';

export default function SearchTrip() {
    const [dateValue, setDateValue] = useState("");
    const [placeholderDate, setPlaceholderDate] = useState("");

    useEffect(() => {
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().slice(0, 10);
        setDateValue(formattedDate);

        const placeholder = currentDate.toLocaleDateString("en-GB");
        setPlaceholderDate(placeholder);
    }, []);

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDateValue(event.target.value);
    };


    return (
        <Grid templateColumns={'repeat(2, 1fr)'} mt={3} gap={3}>
            <GridItem
                colSpan={{
                    base: 2,
                    md: 1,
                }}
                display={'flex'}
                alignItems={'center'}
                gap={3}
            >
                <FormControl>
                    <FormLabel mb="1" fontSize="sm" color="gray.600">
                        Điểm đi
                    </FormLabel>
                    <Box display="flex" alignItems="center" borderWidth="1px" borderRadius="md" paddingLeft={3} width="100%">
                        <Icon as={IoIosRadioButtonOn} color="gray.500" />
                        <Select placeholder="Hà Nội" border="none" _focus={{ boxShadow: "none" }}>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </Box>
                </FormControl>


                <Box mx={2} top = {10}>
                    <IoIosSwap size={24} />
                </Box>

                <FormControl>
                    <FormLabel mb="1" fontSize="sm" color="gray.600">
                        Điểm đến
                    </FormLabel>
                    <Box display="flex" alignItems="center" borderWidth="1px" borderRadius="md" paddingLeft={3} width="100%">
                        <Icon as={MdLocationPin} color="gray.500" />
                        <Select placeholder="Nam Định" border="none" _focus={{ boxShadow: "none" }}>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </Box>
                </FormControl>
            </GridItem>

            <GridItem
                colSpan={{
                    base: 2,
                    md: 1,
                }}
                display={'flex'}
                alignItems={'center'}
                gap={3}
            >
                <FormControl>
                    <FormLabel mb="1" fontSize="sm" color="gray.600">
                        Ngày đi
                    </FormLabel>
                    <Input
                        type="date"
                        value={dateValue}
                        onChange={handleDateChange}
                        placeholder={placeholderDate}
                    />
                </FormControl>

                <PrimaryButton leftIcon={<IoIosSearch />}>
                    Search
                </PrimaryButton>
            </GridItem>
        </Grid>
    );
}