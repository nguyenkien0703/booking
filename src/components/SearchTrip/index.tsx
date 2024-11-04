import { Grid, GridItem, Input, Select } from '@chakra-ui/react';
import { IoIosSearch, IoIosSwap } from 'react-icons/io';
import PrimaryButton from '@/components/Button/PrimaryButton';
import { MdLocationPin, IoIosRadioButtonOn } from "react-icons/md";

export default function SearchTrip() {
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
                <Select
                    placeholder="From"
                    icon={<IoIosRadioButtonOn  />}
                >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </Select>
                <IoIosSwap size={50} />
                <Select
                    placeholder="To"
                    icon={<MdLocationPin />}
                >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </Select>
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
                <Input
                    type="datetime-local"
                />
                <PrimaryButton
                    leftIcon={<IoIosSearch />}
                >
                    Search
                </PrimaryButton>
            </GridItem>
        </Grid>
    )
}