import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from '@chakra-ui/react'

interface ButtonProps extends ChakraButtonProps {
    text: string;
}

export function Button({ text, type, ...rest }: ButtonProps) {
    return (
        <ChakraButton
            boxShadow="md"
            p="4"
            rounded="md"
            type={type}
            size="lg"
            mt="6"
            bgGradient="linear( 258deg,blue.50 0%,blue.800 100%)"
            fontWeight="400"
            colorScheme="blue"
            {...rest}
        >
            {text}
        </ChakraButton>
    );
}