import { Box, Image, Text, Button } from "@chakra-ui/react";

interface AdvertisingProps {
    imageSrc: string;
    title: string;
    description: string;
    buttonText: string;
}

export default function Advertising({ imageSrc, title, description, buttonText }: AdvertisingProps) {
    return (
        <Box
            backgroundColor="white"
            borderRadius="md"
            overflow="hidden"
            boxShadow="md"
            mb={4}
            textAlign="center"
            width="240px"
            height="auto"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
            p={4}
        >
            <Image 
                src={imageSrc} 
                alt={title} 
                width="100%" 
                height="196px"
                objectFit="cover" 
                mb={4}
            />
            <Text fontWeight="bold" fontSize="lg" mb={2}>{title}</Text>
            <Text fontSize="sm" color="gray.600" mb={4}>
                {description}
            </Text>
            <Button colorScheme="purple" variant="outline" size="sm">
                {buttonText}
            </Button>
        </Box>
    );
}
