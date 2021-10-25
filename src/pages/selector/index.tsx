import { Flex } from '@chakra-ui/react'
import { Header } from '../../components/Header'

import { Carousel } from '../../components/Carousel'



export default function Selector() {
    return (
        <Flex direction="column" h="100vh">
            <Header nameModule="Seletor" />
            <Flex flex="1" direction={["column", "row"]} align="center" overflowX="hidden">
                <Carousel />
            </Flex>
        </Flex>
    );
}