import { Center, Flex, Text, Icon, useDisclosure, CenterProps } from '@chakra-ui/react'
import { AiOutlinePlus } from 'react-icons/ai'

import { Modal } from '../../Modal'
import { Button } from '../../Design/Button'
import {Input} from '../../Form/Input'

interface PrgItemSkillMakerProps extends CenterProps{
    title?: string;
    damage?: string;
    isEmpty?: boolean;
}

export function PrgItemSkillMaker({ title, damage, isEmpty,onClick }: PrgItemSkillMakerProps) {


    if (isEmpty) {
        return (
            <>
                <Center
                    onClick={onClick}
                    w="100%"
                    borderRadius="md"
                    minH="20"
                    bg="blue.900"
                    _hover={{
                        bgColor: 'blue.500',
                        cursor: 'pointer'
                    }}
                >
                    <Icon as={AiOutlinePlus} />
                </Center>

              
            </>
        )
    }


    return (
        <Flex
            direction="row"
            w="100%"
            bg="blue.900"
            _hover={{
                bgColor: 'blue.500',
                cursor: 'pointer'
            }}
            borderRadius="md"
        >
            <Flex
                direction="column"
                p="4"
                w="100%"
                justify="center"
                minH="20"
                fontWeight="300">
                <Text fontSize="13"  >
                    {title}
                </Text>
                <Text fontSize="15" fontWeight="600" alignSelf="flex-end" >
                    {damage}
                </Text>
            </Flex>
            <Center
                bg="blue.600"
                minW="10"
                borderTopRightRadius="md"
                borderBottomRightRadius="md">
                <Icon as={AiOutlinePlus} />
            </Center>
        </Flex>
    )
}