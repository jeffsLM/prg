import { HStack, Box, Icon, Text } from '@chakra-ui/react'
import { AiOutlineDoubleRight } from "react-icons/ai";

export function User() {
    return (
        <HStack
          align="center"
          spacing="8"
          bg="blue.700"
          borderRadius="full"
          maxHeight="10"
          p="4">
           <Box
              bgGradient="linear(238deg, blue.50 0%,blue.900 100%)"
              borderRadius="full"
              h="5"
              w="5" />
            <Text
              fontSize="14"
              justify="start">
                Mestre
            </Text>
            <Icon as={AiOutlineDoubleRight} />
        </HStack>
    );
}