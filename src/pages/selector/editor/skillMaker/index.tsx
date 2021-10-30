import { Center, Box, Flex, Text, HStack, VStack, Divider } from '@chakra-ui/react'
import { FaAngleDoubleLeft } from 'react-icons/fa'


import { Header } from '../../../../components/Header'
import { Input } from '../../../../components/Form/Input'
import { PrgItemController } from '../../../../components/Selector/PrgItemController'
import { PrgItemSkillMaker } from '../../../../components/Selector/PrgItemSkillMaker'
import { PrgContentSkillMaker } from '../../../../components/Selector/PrgContentSkillMaker'

export default function skillMaker() {
    return (
        <Center>
            <Box minH="100vh" maxW={1440} w="100%"  >
                <Header nameModule="Skill Maker" />
                <Flex >
                    <VStack spacing="8" minW="20">
                        <PrgItemController iconLeft={FaAngleDoubleLeft}>
                            Storyboard
                        </PrgItemController>
                    </VStack>

                    <HStack spacing="4" align="flex-start" w="100%" m="4" h="100%">
                        <VStack
                            spacing="4"
                            h="100%"
                            minW="30%"
                            bg="blue.700"
                            borderRadius="md"
                            p="4"
                        >
                            <Box align="center" mt="4" mb="4" >
                                <Input type="text" label="Habilidades" w="100%" name="searchAbility" placeholder="pesquisar..." />
                            </Box>
                            <Divider w="65%" />
                            <PrgContentSkillMaker                            >
                                <PrgItemSkillMaker  isEmpty  />
                                <PrgItemSkillMaker  damage="d5+d7" title="Olhar Tenebroso"  />
                            </PrgContentSkillMaker >
                        </VStack>

                        <VStack
                            spacing="4"
                            h="100%"
                            minW="30%"
                            bg="blue.700"
                            borderRadius="md"
                            p="4"
                        >
                            <Box align="center" mt="4" mb="4" >
                                <Input type="text" label="Proficiencias" w="100%" name="searchProficiency" placeholder="pesquisar..." />
                            </Box>
                            <Divider w="65%" />
                            <PrgContentSkillMaker                            >
                                <PrgItemSkillMaker  isEmpty damage="7 pts" title="Destreza" />
                                <PrgItemSkillMaker   damage="7 pts" title="Destreza" />
                            </PrgContentSkillMaker>
                        </VStack>

                        <VStack
                            spacing="4"
                            h="100%"
                            minW="30%"
                            bg="blue.700"
                            borderRadius="md"
                            p="4"
                        >
                            <Box align="center" mt="4" mb="4" >
                                <Input type="text" label="Itens" w="100%" name="searchItens" placeholder="pesquisar..." />
                            </Box>
                            <Divider w="65%" />
                            <PrgContentSkillMaker >
                                <PrgItemSkillMaker  isEmpty damage="" title="" />
                                <PrgItemSkillMaker   damage="" title="Corda 6m" />
                            </PrgContentSkillMaker>
                        </VStack>

                    </HStack>
                </Flex>
            </Box>
        </Center>
    );
}