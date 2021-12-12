import { Flex, Text, Box ,HStack} from '@chakra-ui/react'

import { PrgIcon } from '../Design/PrgIcon'
import { PlayerStatus } from '../PlayerStatus'

interface PlayerStatusProps {
    HP: number;
    MP: number;
    MAX_HP: number;
    MAX_MP: number;
    PlayerName:string;
}

export function Player({HP,MP,MAX_HP,MAX_MP,PlayerName}:PlayerStatusProps) {
    return (
        <Flex direction="column" w="100%" h="30%" m="20" pb="6" >
            <Text pl="10">{PlayerName}</Text>
            <HStack direction="row" spacing="4"  w="100%" align="center">
                <PrgIcon src="/images/mage@2x.png" boxSize='30px' />
                <Flex direction="column">
                    <PlayerStatus HP={HP} MP={MP} MAX_MP={MAX_MP} MAX_HP={MAX_HP}/>
                </Flex>
                <Box w="10px" h="10px" bg="green.100" borderRadius="full" />
            </HStack>
        </Flex>
    );
}