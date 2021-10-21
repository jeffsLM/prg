import { Flex, Box, Heading ,Image} from '@chakra-ui/react'
export function Logo() {
    return (
        <>
            <Flex justify="center">
                <Box boxShadow="md" p="4" rounded="lg" bgGradient="linear( 258deg,blue.50 0%,blue.800 100%)">
                    <Image src="/images/mage@2x.png" alt="Jf Labs" />
                </Box>
            </Flex>
            <Flex direction="column" align="center">
                <Box>
                    <Heading as="h4" size="md" fontWeight="400">
                        PRG
                    </Heading>
                    <Heading as="h4" size="md" fontWeight="100" ml="5">
                        Table Master
                    </Heading>
                </Box>
            </Flex>
        </>
    );
}