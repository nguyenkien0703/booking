import { Flex, Image, Text } from "@chakra-ui/react";

interface HomeItemDescriptionProps {
    title: string;
    description: string;
    icon: string;
}

export default function HomeItemDescription({ title, description, icon }: HomeItemDescriptionProps) {
    return (
        <Flex
            flexDirection={'column'}
            gap={2}
            width={'100%'}
        >
            <Image width={'60px'} height={'60px'} src={icon} alt={title} />
            <Text variant={'body-default-bold'} color={'black'}>
                {title}
            </Text>
            <Text variant={'body-small'} color={'black'}>
                {description}
            </Text>
        </Flex>
    )
}