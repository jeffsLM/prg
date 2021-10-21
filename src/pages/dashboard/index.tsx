import {Flex} from '@chakra-ui/react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'


export default function Dashboard() {
    return (
        <Flex direction="column" h="100vh">
            <Header nameModule="Seletor" />
            <Flex flex="1">
                teste
                </Flex>            
            <Footer/>
        </Flex>
    );
}