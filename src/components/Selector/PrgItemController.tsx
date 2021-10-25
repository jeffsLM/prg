import { Flex, Icon, Text } from '@chakra-ui/react'
import { ElementType } from "react";
import Link from "next/link";
interface PrgItemMeetingProps {
    icon?: ElementType
    children: string
    href?: string
}

export function PrgItemController({ icon, href = "#", children }: PrgItemMeetingProps) {
    return (
        <Link href={href} passHref>
            <Flex
                align="center"
                bg="blue.700"
                justify="space-between"
                borderRadius="full"
                p="4"
                _hover={{
                    cursor: 'pointer',
                    bgGradient:
                        "linear-gradient(257deg, blue.50 0%,blue.900 100%)"
                }}>
                <Text mr="2" fontSize="15">
                    {children}
                </Text>
                {icon && <Icon as={icon} />}
            </Flex>
        </Link>
    );
}