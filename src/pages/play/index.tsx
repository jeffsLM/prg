import { Flex, Box, Center, VStack, Text, Icon } from '@chakra-ui/react'
import { AiOutlineDoubleRight } from 'react-icons/ai'

import { Header } from '../../components/Header'
import { PrgItemMeeting } from '../../components/Selector/Meeting/PrgItemMeeting'
import { PrgContentItemMeeting } from '../../components/Selector/Meeting/PrgContentItemMeeting'
import { Story } from '../../components/Story'
import { Button } from '../../components/Design/Button'
import { Player } from '../../components/Player'
import React from 'react'

export default function Play() {
    return (
        <>
            <Center>
                <Box h="100%" maxW={1440} w="100%" display="block" mb="10">
                    <Header nameModule="Elysium Saga" />
                    <Flex w="100%" direction={["column", "row"]} mt="10">
                        <PrgContentItemMeeting>
                            <PrgItemMeeting>
                                Início campanha
                            </PrgItemMeeting>
                        </PrgContentItemMeeting>

                        <VStack flex="1" ml={["0", "160"]} p="4"  >
                            <Story title="Início campanha" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt sodales urna cursus condimentum. Cras quis tincidunt nisi. Suspendisse sed finibus felis. Aliquam malesuada dolor neque, vel tempus felis suscipit nec. Aliquam et ullamcorper nunc. Nulla facilisi. Phasellus leo velit, faucibus quis quam eu, rhoncus dignissim massa. Pellentesque malesuada metus turpis, a ornare purus auctor quis. Duis lorem dui, iaculis non sem eu, iaculis faucibus elit. Proin in dapibus sapien, facilisis dapibus velit. Duis et justo leo. Nam consequat risus commodo lorem tempor euismod. Morbi vel vulputate arcu.Pellentesque a augue in magna fermentum sodales. Donec eleifend laoreet mi, sagittis blandit nibh tempus at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus sed metus porttitor, convallis justo vitae, semper leo. Cras tincidunt ultricies orci, et ultricies est efficitur gravida. Mauris libero erat, sagittis vel purus non, cursus bibendum erat. Proin aliquet, turpis sit amet iaculis blandit, tortor nibh cursus enim, ut cursus sem elit non magna. Nulla lacus ligula, lobortis sit amet posuere eget, malesuada mollis leo. In hac habitasse platea dictumst. Nam volutpat sit amet nisi vitae maximus. Quisque porttitor, quam sed ultricies sagittis, dolor urna fringilla nisl, euismod dapibus leo dolor et tortor. Sed tristique, dolor sed mollis iaculis, felis elit luctus nunc, et maximus ligula lectus vel turpis. Suspendisse in malesuada nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas." />
                            <Button type="submit" text="Iniciar encontro 1.1" w="70%" m="10" />
                        </VStack>
                        <VStack minW={["300", "400"]} borderRadius="10" bg="blue.700" p="8" >
                            <Flex justify="space-between" w="100%">
                                <Text>
                                    Players
                                </Text>
                                <Icon as={AiOutlineDoubleRight} color='gray.500' />
                            </Flex>

                            <Flex justify="space-between" w="60%" align="center">
                                <Text fontWeight={100}>Sessão: ABC-545-989</Text>
                                <Box w="10px" h="10px" bg="green.100" borderRadius="full" />

                            </Flex>

                            <Player HP={10} MP={2} MAX_HP={15} MAX_MP={12} PlayerName='Juan' />
                            <Player HP={50} MP={250} MAX_HP={250} MAX_MP={250} PlayerName='Juan' />
                            <Player HP={150} MP={100} MAX_HP={100} MAX_MP={100} PlayerName='Juan' />
                            <Player HP={20} MP={50} MAX_HP={100} MAX_MP={100} PlayerName='Juan' />
                            <Player HP={50} MP={500} MAX_HP={200} MAX_MP={500} PlayerName='Juan' />
                        </VStack>

                    </Flex>
                </Box>
            </Center>
        </>
    )
}