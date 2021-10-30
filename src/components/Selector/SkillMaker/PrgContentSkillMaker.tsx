import { VStack,StackProps } from '@chakra-ui/react'
import { ReactNode } from 'react'


interface PrgContentSkillMakerProps extends StackProps{
    children: ReactNode
}

export function PrgContentSkillMaker({ children,...rest }: PrgContentSkillMakerProps) {
    return (
        <VStack
            w="65%"
            direction="column"
            overflowY="auto"
            maxH="550" 
            {...rest}
            spacing="4"
            m="4"
            css={{
                '&::-webkit-scrollbar': { width: '4px' },
                '&::-webkit-scrollbar-track': { width: '6px' },
                '&::-webkit-scrollbar-thumb': {
                    background: `rgba(1,24,40,1)`,
                    borderRadius: '24px',
                },
            }}
        >
            {children}
        </VStack>
    )
}