import { useState } from 'react'
import { Center, Box, Flex, Stack, Divider, useDisclosure, SimpleGrid, Select, Text } from '@chakra-ui/react'
import { FaAngleDoubleLeft } from 'react-icons/fa'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

import { Modal } from '../../../../components/Modal'
import { Header } from '../../../../components/Header'
import { Input } from '../../../../components/Form/Input'
import { Button } from '../../../../components/Design/Button'
import { PrgItemController } from '../../../../components/Selector/Controller/PrgItemController'
import { PrgItemSkillMaker } from '../../../../components/SkillMaker/PrgItemSkillMaker'
import { PrgContentSkillMaker } from '../../../../components/SkillMaker/PrgContentSkillMaker'
import { PrgTextarea } from '../../../../components/Selector/PrgTextarea/PrgTextarea'


type SkillMakerFormData = {
    skill: string;
    power: string;
    description: string;
}

const skillMakerFormSquema = yup.object().shape({
    skill: yup.string().required(),
    power: yup.string().required(),
    description: yup.string().required(),

})


export default function SkillMaker() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [type, SetType] = useState('player');


    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(skillMakerFormSquema)
    })
    const { errors } = formState;

    const handleCreteNewItem: SubmitHandler<SkillMakerFormData> = async (values) => {
        await new Promise(resolve => setTimeout(resolve, 2000))
        onClose()
        //add validations
    }

    return (
        <>
            <Center flex="1">
                <Flex maxW={1440} flex="1" direction="column"       >
                    <Header nameModule="Skill Maker" />
                    <Flex direction={["column", "row"]} mb="10" >
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
                                <PrgContentSkillMaker direction="column">
                                    <PrgItemSkillMaker onClick={onOpen} isEmpty />
                                    <PrgItemSkillMaker onClick={onOpen} damage="d5+d7" title="Olhar Tenebroso" />
                                </PrgContentSkillMaker >
                            </Stack>

                            <Stack
                                spacing="4"
                                minW="30%"
                                bg="blue.700"
                                borderRadius="md"
                                p="4"
                            >
                                <Box
                                    align="center"
                                    mt="4"
                                    mb="4">
                                    <Input
                                        type="text"
                                        label="Proficiencias"
                                        w="100%"
                                        name="searchProficiency"
                                        placeholder="pesquisar..." />
                                </Box>
                                <Divider />
                                <PrgContentSkillMaker                            >
                                    <PrgItemSkillMaker onClick={onOpen} isEmpty damage="7 pts" title="Destreza" />
                                    <PrgItemSkillMaker onClick={onOpen} damage="7 pts" title="Destreza" />

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
                                    <Input
                                        type="text"
                                        label="Itens"
                                        w="100%"
                                        name="searchItens"
                                        placeholder="pesquisar..." />
                                </Box>
                                <Divider />
                                <PrgContentSkillMaker  direction="column" maxH="350">
                                    <PrgItemSkillMaker onClick={onOpen} isEmpty damage="" title="" />
                                    <PrgItemSkillMaker onClick={onOpen} damage="" title="Corda 6m" />
                                </PrgContentSkillMaker>
                            </Stack>

                        </Stack>
                    </Flex>
                </Flex>
            </Center>

            <Modal TextHeader="" isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
                <Stack as="form" spacing="8" p="2" onSubmit={handleSubmit(handleCreteNewItem)}>
                    <Input
                        name="skill"
                        placeholder="Algo poderoso... talvez?"
                        size="lg"
                        label="Nome"
                        error={errors.skill}
                        {...register("skill")} />
                    <SimpleGrid columns={2} spacing={10}>
                        <Flex
                            w="100%"
                            h="20"
                            bg={type == 'player' ? 'blue.900' : 'gray.700'}
                            color={type == 'player' ? 'whiteAlpha.900' : 'gray.500'}
                            borderRadius="20"
                            justify="center"
                            align="center"
                            _hover={{
                                cursor: 'pointer'
                            }}
                            onClick={() => SetType('player')}>
                            Disponivel para Player
                        </Flex>

                        <Flex
                            w="100%"
                            h="20"
                            bg={type == 'npc' ? 'blue.900' : 'gray.700'}
                            color={type == 'npc' ? 'whiteAlpha.900' : 'gray.500'}
                            borderRadius="20"
                            justify="center"
                            align="center"
                            _hover={{
                                cursor: 'pointer'
                            }}
                            onClick={() => SetType('npc')}>
                            Disponivel para NPC
                        </Flex>

                        <Input
                            name="power"
                            placeholder="D20 * Destreza"
                            size="lg"
                            label="Dados/Pontuação"
                            error={errors.power}
                            {...register("power")} />

                        <Flex direction="column" flex="1" justify="space-between">
                            <Text >Classe</Text>
                            <Select
                                name="class"
                                bg="blue.900"
                                borderColor="blue.900"
                                disabled={type == 'npc'}
                                _hover={{ borderColor: 'blue.900' }}
                            >
                                <option style={{ background: "#051828" }} value="option1">Option 1</option>
                                <option style={{ background: "#051828" }} value="option2">Option 2</option>
                                <option style={{ background: "#051828" }} value="option3">Option 3</option>
                            </Select>
                        </Flex>
                    </SimpleGrid >

                    <Flex direction="column" justify="space-between" flex="1">
                        <Text>
                            Regras/Descrição
                        </Text>
                        <PrgTextarea h="150" placeholder="Regras? pra quê regras?" name="description" error={errors.description}   {...register("description")} />
                    </Flex>
                    <Button type="submit" text="Salvar" w="100%" isLoading={formState.isSubmitting} />
                </Stack>
            </Modal>
        </>
    );
}