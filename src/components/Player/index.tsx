import { Flex, Text, Box, HStack } from '@chakra-ui/react'

import { PrgIcon } from '../Design/PrgIcon'
import { PlayerStatus } from '../PlayerStatus'

interface PlayerStatusProps {
    hp: number;
    mp: number;
    maxHp: number;
    maxMp: number;
    PlayerName: string;
    statusAtMoment?: string;
}

export function Player({ hp, mp, maxHp, maxMp, PlayerName }: PlayerStatusProps) {
    return (
        <Flex direction="column" w="100%" h="30%" m="20" pb="6" bg="green.50">
            <Text pl="10">{PlayerName}</Text>
            <HStack direction="row" spacing="4" w="100%" align="center" >
                <PrgIcon src="/images/mage@2x.png" boxSize='30px' />
                <Flex direction="column">
                    <PlayerStatus value={hp} maxValue={maxHp} colorActivate="green.50" colorDesactive="green.800"/>
                    <PlayerStatus value={mp} maxValue={maxMp} colorActivate="blue.300" colorDesactive="blue.800"/>
                </Flex>
                <Box w="10px" h="10px" bg="green.100" borderRadius="full" />
            </HStack>
        </Flex>
    );
}