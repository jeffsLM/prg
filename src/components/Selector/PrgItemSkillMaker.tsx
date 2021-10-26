import { Center, Flex, Text, Icon } from '@chakra-ui/react'
import { AiOutlinePlus } from 'react-icons/ai'


interface PrgItemSkillMakerProps {
    title: string;
    damage?: string;
}

export function PrgItemSkillMaker({ title, damage }: PrgItemSkillMakerProps) {
    return (
        <Flex
            direction="row"
            w="100%"
            bg="blue.900">
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