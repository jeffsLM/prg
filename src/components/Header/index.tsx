import { Flex,Divider,HStack,Text } from '@chakra-ui/react'
import { Logo } from '../Design/Logo'
import {User} from './User'

interface HeaderProps {
    nameModule?: string
}

export function Header({nameModule}:HeaderProps) {
    return (
        <Flex justify="space-between" align="center" p="3">
            <HStack spacing="4" >
               <Logo
                  flexDir="row"
                  direction="row"
                  p="2"
                  fontSize="sm"
                  boxSize="40px" />
                <Divider orientation="vertical"/>
                <Text>{nameModule}</Text>
            </HStack>
            <User/>
        </Flex>
    );
}