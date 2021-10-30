import {Textarea,TextareaProps} from '@chakra-ui/react'

export function PrgTextarea({...rest}:TextareaProps){
    return (
        <Textarea
        w="100%"
        minH="22"
        variant="filled"
        bg="blue.900"
        borderColor="blue.900"
        resize="none"
        colorScheme="blue"

        focusBorderColor="blue.500"
        _hover={{
            bgColor: "blue.900",
        }}
        css={{
            '&::-webkit-scrollbar': { width: '4px' },
            '&::-webkit-scrollbar-track': { width: '6px' },
            '&::-webkit-scrollbar-thumb': {
                background: `rgba(1,24,40,1)`,
                borderRadius: '24px',
            },
        }}
        {...rest}
    />
    );
}