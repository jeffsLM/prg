
import { Box, BoxProps, Flex } from '@chakra-ui/react';
import { motion, useMotionValue } from 'framer-motion';

import { Card } from './Card'

export function Carousel() {
    const MotionBox = motion<BoxProps>(Box);
    const sagas = [0, 1, 2, 3]

    return (
        <>

            {
                sagas.map((v, i) => <Card key={i.toString()} />)
            }

        </>
    );
}