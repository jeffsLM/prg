import { Box, BoxProps, Flex, Text, VStack, Center, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { PrgIcon } from '../../Design/PrgIcon'
import { Button } from '../../Design/Button'

export const MotionBox = motion<BoxProps>(Box);

interface CardProps {
    href?: string
}

export function Card({ href }: CardProps) {
    return (
        <Flex
            w="80%"
            minWidth={350}
            minH={550}
            maxW={450}
            m="2"
            h="70%"
            bg="blue.700"
            justify="center"
            p="8"
            direction="column"
        >
            <VStack spacing="16" >
                <PrgIcon src="/images/mage@2x.png" boxSize="90px" alt="IconSelector" />
                <Center >
                    <Flex direction="column" pt="1.5" ml="2" alignItems="center">
                        <Text fontSize="22" fontWeight="500">
                            Elysium
                        </Text>
                        <Text fontSize="16" fontWeight="100">
                            Saga's
                        </Text>
                    </Flex>
                </Center>
            </VStack>
            <Link
                href={href}
                passhref
                style={{ textDecoration: 'none' }}
                >
                    
                <Button  w="100%" text="Play" />
            </Link>
        </Flex>
    );
}