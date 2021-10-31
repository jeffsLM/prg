import { Center, Box, Flex, Text, Stack, Divider } from '@chakra-ui/react'
import { FaAngleDoubleLeft } from 'react-icons/fa'

import { Header } from '../../../../components/Header'
import { Input } from '../../../../components/Form/Input'
import { PrgItemController } from '../../../../components/Selector/Controller/PrgItemController'
import { PrgItemSkillMaker } from '../../../../components/Selector/SkillMaker/PrgItemSkillMaker'
import { PrgContentSkillMaker } from '../../../../components/Selector/SkillMaker/PrgContentSkillMaker'

export default function skillMaker() {
    return (
        <Center flex="1">
            <Flex maxW={1440} flex="1" direction="column"  >
                <Header nameModule="Skill Maker" />
                <Flex direction={["column", "row"]} >
                    <Stack direction={"column"} spacing="8" maxW="40">
                        <PrgItemController href="./" iconLeft={FaAngleDoubleLeft}>
                            Storyboard
                        </PrgItemController>
                    </Stack>

                    <Stack
                        direction={["column",
                            "row"]}
                        spacing="4"
                        align="flex-start"
                        flex="1"
                        m={["2", "4"]}
                    >
                        <Stack
                            spacing="4"
                            minW="30%"
                            minH="100%"
                            bg="blue.700"
                            borderRadius="md"
                            p="4">
                            <Box align="center" mt="4" mb="4" >
                                <Input type="text" label="Habilidades" name="searchAbility" placeholder="pesquisar..." />
                            </Box>
                            <Divider />
                            <PrgContentSkillMaker                            >
                                <PrgItemSkillMaker isEmpty />
                                <PrgItemSkillMaker damage="d5+d7" title="Olhar Tenebroso" />


                            </PrgContentSkillMaker >
                        </Stack>

                        <Stack
                            spacing="4"
                            minW="30%"
                            bg="blue.700"
                            borderRadius="md"
                            p="4"
                        >
                            <Box align="center" mt="4" mb="4" >
                                <Input type="text" label="Proficiencias" w="100%" name="searchProficiency" placeholder="pesquisar..." />
                            </Box>
                            <Divider />
                            <PrgContentSkillMaker                            >
                                <PrgItemSkillMaker isEmpty damage="7 pts" title="Destreza" />
                                <PrgItemSkillMaker damage="7 pts" title="Destreza" />

                            </PrgContentSkillMaker>
                        </Stack>

                        <Stack
                            spacing="4"
                            minW="30%"
                            bg="blue.700"
                            borderRadius="md"
                            p="4"
                        >
                            <Box align="center" mt="4" mb="4" >
                                <Input type="text" label="Itens" w="100%" name="searchItens" placeholder="pesquisar..." />
                            </Box>
                            <Divider />
                            <PrgContentSkillMaker >
                                <PrgItemSkillMaker isEmpty damage="" title="" />
                                <PrgItemSkillMaker damage="" title="Corda 6m" />
                            </PrgContentSkillMaker>
                        </Stack>

                    </Stack>
                </Flex>

            </Flex>
        </Center>
    );
}