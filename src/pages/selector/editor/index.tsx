import { Flex, Box, Stack, VStack, Center } from '@chakra-ui/react'
import React from 'react'
import { BsPlus } from 'react-icons/bs'
import { FaAngleDoubleRight } from 'react-icons/fa'

import { Header } from '../../../components/Header'
import { Button } from '../../../components/Design/Button'
import { PrgItemMeeting } from '../../../components/Selector/Meeting/PrgItemMeeting'
import { PrgContentItemMeeting } from '../../../components/Selector/Meeting/PrgContentItemMeeting'
import { PrgItemController } from '../../../components/Selector/Controller/PrgItemController'
import { PrgTextarea } from '../../../components/Selector/PrgTextarea/PrgTextarea'



export default function SagaEditor() {
    return (
        <Center>
            <Box H="100%" maxW={1440} w="100%" >
                <Header nameModule="Elysium Saga's" />
                <Flex w="100%" direction={["column", "row"]} mt="10">
                    <PrgContentItemMeeting>
                        <PrgItemMeeting>
                            Início campanha
                        </PrgItemMeeting>
                        <PrgItemMeeting icon={BsPlus}>
                            Add novo encontro
                        </PrgItemMeeting>
                    </PrgContentItemMeeting>

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

                    <Stack
                        spacing="8"
                        minHeight="200"
                        overflow="auto">
                        <PrgItemController iconRight={FaAngleDoubleRight} href="./editor/skillMaker">
                            Habilidades e Pericias
                        </PrgItemController>
                        <PrgItemController iconRight={FaAngleDoubleRight} href="./editor/player">
                            Players Config
                        </PrgItemController>
                    </Stack>
                </Flex>
            </Box>
        </Center>
    )
}