import { Flex, Box, Stack, Icon, Text } from '@chakra-ui/react'
import { BsPlus } from 'react-icons/bs'

import { Header } from '../../../components/Header'
import { PrgItemMeeting } from '../../../components/Design/Selector/PrgItemMeeting'

export default function SagaEditor() {
    return (
        <Box h="90vh">
            <Header nameModule="Elysium Saga's" />
            <Flex w="100%" direction="row" mt="10">
                <Stack spacing="2" web overflow="auto" css={{
                    '&::-webkit-scrollbar': {
                        width: '4px',
                    },
                    '&::-webkit-scrollbar-track': {
                        width: '6px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: `rgba(1, 24, 40, 1)`,
                        borderRadius: '24px',
                    },
                }} maxH={400}>
                    <PrgItemMeeting>
                        Início campanha
                    </PrgItemMeeting>
                    <PrgItemMeeting icon={BsPlus}>
                        Add novo encontro
                    </PrgItemMeeting>
                </Stack>
            </Flex>
        </Box>
    )
}