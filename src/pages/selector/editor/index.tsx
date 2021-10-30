import { Flex, Box, Stack, VStack, Center } from '@chakra-ui/react'
import React from 'react'
import { BsPlus } from 'react-icons/bs'
import { FaAngleDoubleRight } from 'react-icons/fa'

import { Header } from '../../../components/Header'
import { Button } from '../../../components/Design/Button'
import { PrgItemMeeting } from '../../../components/Selector/Meeting/PrgItemMeeting'
import { PrgItemController } from '../../../components/Selector/Controller/PrgItemController'
import { PrgTextarea } from '../../../components/Selector/PrgTextarea/PrgTextarea'



export default function SagaEditor() {
    return (
        <Center>
            <Box H="100%" maxW={1440} w="100%" >
                <Header nameModule="Elysium Saga's" />
                <Flex w="100%" direction={["column","row"]} mt="10">
                    <Stack
                        spacing="2"
                        web
                        overflow="auto"
                        maxH={400}
                        css={{
                            '&::-webkit-scrollbar': { width: '4px' },
                            '&::-webkit-scrollbar-track': { width: '6px' },
                            '&::-webkit-scrollbar-thumb': {
                                background: `rgba(1,24,40,1)`,
                                borderRadius: '24px',
                            },
                        }}>
                        <PrgItemMeeting>
                            Início campanha
                        </PrgItemMeeting>
                        <PrgItemMeeting icon={BsPlus}>
                            Add novo encontro
                        </PrgItemMeeting>
                    </Stack>

                    <VStack flex="1" p="4" justify="center">
                       <PrgTextarea
                         h="20"
                         placeholder="Titulo do encontro"
                         fontSize="30" />
                        <PrgTextarea
                            h="300"
                            placeholder="Humm algo interresante está saindo...." />
                        <Button text="Salvar" w="70%" />
                    </VStack>

                    <Stack spacing="8" overflow="auto" >
                        <PrgItemController iconRight={FaAngleDoubleRight}>
                            Habilidades e Pericias
                        </PrgItemController>
                        <PrgItemController iconRight={FaAngleDoubleRight}>
                            Players Config
                        </PrgItemController>
                    </Stack>
                </Flex>
            </Box>
        </Center>
    )
}