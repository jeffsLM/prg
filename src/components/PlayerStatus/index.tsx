import { Flex, Text, Box } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

interface PlayerStatusProps {
    HP: number;
    MP: number;
    MAX_HP: number;
    MAX_MP: number;
}

export function PlayerStatus({ HP, MP, MAX_HP, MAX_MP }: PlayerStatusProps) {
    const Life = [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    return (
        <>
            <Flex>
                {Life.map((i, v) => {
                   return(<Box
                        key={i.toString()}
                        w="2"
                        h="7"
                        ml="1.4px"
                        bgColor={i <= Math.ceil(Life.length * HP / MAX_HP) ? "green.50" : "green.800"}
                        borderRadius="full"
                        css={`transition: all 1.3s ease-out;`}
                    />)
                   
                }
                )}
                <Text ml="2">
                    {HP}/{MAX_HP}
                </Text>
            </Flex>
            <Flex mt="2" >
                {Life.map((i, v) =>
                    <Box
                        key={i.toString()}
                        w="2"
                        h="7"
                        ml="1.4px"
                        bgColor={i <= Math.ceil(Life.length * MP / MAX_MP) ? "blue.300" : "blue.800"}
                        borderRadius="full"
                        css="transition: all 0.5s ease-out;"
                    />
                )}
                <Text ml="2">
                    {MP}/{MAX_MP}
                </Text>
            </Flex>
        </>
    )
}