import { Box, Flex, Image,ImageProps } from '@chakra-ui/react';

export function PrgIcon({ src,boxSize }: ImageProps) {
    return (
        <Flex justify="center">
            <Box
                boxShadow="lg"
                p="4"
                alignItems="center"
                rounded="lg"
                bgGradient="linear( 258deg,blue.50 0%,blue.800 100%)"
            >
                <Image src={src} alt="PrgIcon"  boxSize={boxSize}/>
            </Box>
        </Flex>

    );
}