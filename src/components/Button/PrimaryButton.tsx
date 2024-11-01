import { Button, ButtonProps } from "@chakra-ui/react";

export default function PrimaryButton({ ...props }: ButtonProps) {
    return (
        <Button
            backgroundColor={props?.backgroundColor || 'primary.500'}
            _hover={props?._hover || {
                backgroundColor: 'primary.400'
            }}
            padding={props?.padding || '12px 24px'}
            color={props?.color || 'white'}
            {...props}
        >
            {props.children}
        </Button>
    )
}