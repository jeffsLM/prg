import { Flex, Text, Box } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

interface PlayerStatusProps {
    value: number; 
    maxValue: number;
    colorActivate: string;
    colorDesactive: string;
}

export function PlayerStatus({ value, maxValue, colorActivate, colorDesactive }: PlayerStatusProps) {
    const Life = [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    return (

        <Flex>
            {Life.map((i, v) => {
                return (<Box
                    key={i.toString()}
                    w="2"
                    h="7"
                    ml="1.4px"
                    bgColor={i <= Math.ceil(Life.length * value / maxValue) ? colorActivate : colorDesactive}
                    borderRadius="full"
                    css={`transition: all 1.3s ease-out;`}
                />)

            }
            )}
            <Text ml="2">
                {value}/{maxValue}
            </Text>
        </Flex>

    )
}