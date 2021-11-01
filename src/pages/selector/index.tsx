import { Flex } from '@chakra-ui/react'
import { Header } from '../../components/Header'

import { Carousel } from '../../components/Carousel'



export default function Selector() {
    return (
        <Flex direction="column"  flex="1">
            <Header nameModule="Seletor" />
            <Flex direction={["column", "row"]} align="center"   flex="1" justify="center" overflowX="hidden">
                <Carousel />
            </Flex>
        </Flex>
    );
}