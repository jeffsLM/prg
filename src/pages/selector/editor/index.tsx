import { Flex, Box, Stack, Textarea, VStack, Center } from '@chakra-ui/react'
import React, { useMemo, useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import { FaAngleDoubleRight } from 'react-icons/fa'

import { Header } from '../../../components/Header'
import { Button } from '../../../components/Design/Button'
import { PrgItemMeeting } from '../../../components/Selector/PrgItemMeeting'
import { PrgItemController } from '../../../components/Selector/PrgItemController'
import { RichTextBlock } from '../../../components/RichText'


export default function SagaEditor() {
    return (
        <Center>
            <Box minH="100vh" maxW={1440} w="100%" >
                <Header nameModule="Elysium Saga's" />
                <Flex w="100%" direction="row" mt="10">
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
                        <Textarea
                            w="100%"
                            maxh="50"
                            h="20"
                            variant="filled"
                            bg="blue.900"
                            borderColor="blue.900"
                            resize="none"
                            colorScheme="blue"
                            placeholder="Titulo do encontro"
                            focusBorderColor="blue.500"
                            fontSize="30"
                            _hover={{
                                bgColor: "blue.900",
                            }}
                        />
                        <Textarea
                            w="100%"
                            h="300"
                            variant="filled"
                            bg="blue.900"
                            borderColor="blue.900"
                            resize="none"
                            colorScheme="blue"
                            placeholder="Humm algo interresante está saindo...."
                            focusBorderColor="blue.500"

                            _hover={{
                                bgColor: "blue.900",
                            }}
                            css={{
                                '&::-webkit-scrollbar': { width: '4px' },
                                '&::-webkit-scrollbar-track': { width: '6px' },
                                '&::-webkit-scrollbar-thumb': {
                                    background: `rgba(1,24,40,1)`,
                                    borderRadius: '24px',
                                },
                            }}
                        />
                        <Button text="Salvar" w="70%" />
                    </VStack>

                    <Stack spacing="8" web overflow="auto" >
                        <PrgItemController icon={FaAngleDoubleRight}>
                            Habilidades e Pericias
                        </PrgItemController>
                        <PrgItemController icon={FaAngleDoubleRight}>
                            Players Config
                        </PrgItemController>
                    </Stack>
                </Flex>


            </Box>
        </Center>
    )
}