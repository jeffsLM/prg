import {
    Flex,
    Box,
    Center,
    VStack,
    Text,
    Icon,
    useDisclosure,
    Grid,
    GridItem,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
} from '@chakra-ui/react'
import { AiOutlineDoubleRight } from 'react-icons/ai'
import React from 'react'

import { Header } from '../../components/Header'
import { PrgItemMeeting } from '../../components/Selector/Meeting/PrgItemMeeting'
import { PrgContentItemMeeting } from '../../components/Selector/Meeting/PrgContentItemMeeting'
import { Story } from '../../components/Story'
import { Button } from '../../components/Design/Button'
import { PrgIcon } from '../../components/Design/PrgIcon'
import { Player } from '../../components/Player'
import { Modal } from '../../components/Modal'
import { PlayerStatus } from '../../components/PlayerStatus'

export default function Play() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    // const [type, SetType] = useState('player');



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

                            <Player
                                onClick={onOpen}
                                placing={1}
                                hp={480}
                                mp={2}
                                maxHp={550}
                                maxMp={12}
                                PlayerName='Juan
                              Stronossa'
                                Class="mage"
                                statusAtMoment="down" />

                            {/* <Player
                                placing={2}
                                hp={100}
                                mp={2}
                                maxHp={550}
                                maxMp={12}
                                PlayerName='Alek
                              Burrak'
                                Class="bardo-necromante" />

                            <Player
                                placing={3}
                                hp={10}
                                mp={2}
                                maxHp={550}
                                maxMp={12}
                                PlayerName='John
                              Doe'
                                Class="ranger" />

                            <Player
                                placing={4}
                                hp={10}
                                mp={2}
                                maxHp={550}
                                maxMp={12}
                                PlayerName='Saul'
                                Class="berserk" />

                            <Player
                                placing={5}
                                hp={10}
                                mp={2}
                                maxHp={550}
                                maxMp={12}
                                PlayerName='Reverenda
                              Madre'
                                Class="ranger" /> */}

                        </VStack>

                    </Flex>
                </Box>
            </Center>

            <Modal TextHeader="Ruan Estronossa" optionTextHeader="bardo-necromante" isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
                <Grid
                    h='200px'
                    maxWidth="62%"
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(5, 1fr)'
                    gap={2}
                >
                    <GridItem rowSpan={2} colSpan={1} >
                        <Center w="100%" h="100%">
                            <PrgIcon src="/images/mage@2x.png" boxSize='55' boxShadow='xl' p='6' rounded='md' bg='white' />
                        </Center>
                    </GridItem>

                    <GridItem colSpan={4}>
                        <PlayerStatus
                            value={480}
                            maxValue={550}
                            colorActivate="green.50"
                            colorDesactive="green.800"
                            barsCount={35}
                            h={10} w={10}
                            ml="1" />
                        <Slider aria-label='slider-ex-1' defaultValue={30}>
                            <SliderTrack>
                                <SliderFilledTrack />
                            </SliderTrack>
                            <SliderThumb />
                        </Slider>
                    </GridItem>
                    <GridItem colSpan={4}>
                        <PlayerStatus
                            value={12}
                            maxValue={12}
                            colorActivate="blue.300"
                            colorDesactive="blue.800"
                            barsCount={35}
                            h={10} w={10}
                            ml="1" />
                    </GridItem>
                </Grid>
            </Modal>
        </>
    )
}