import { Flex, Text, Image } from '@chakra-ui/react'

export function Footer() {
    return (
        <Flex as="footer" w="100%" justify="center" direction="row"  pb="9" >
            <Text fontSize="10">
                Powered by
            </Text>
            <Image src="/images/logoJF.svg" h="8" alt="Jf Labs" />
            <Flex align="end">
                <Text fontSize="10"  >
                    Labs
                </Text>
            </Flex>
        </Flex>
    )
}