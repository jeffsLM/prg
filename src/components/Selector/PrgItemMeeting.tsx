import { Flex, Icon, Text } from '@chakra-ui/react'
import { ElementType } from "react";
import Link, { LinkProps } from "next/link";

interface PrgItemMeetingProps {
    icon?: ElementType
    children: string
    href?: string
}

export function PrgItemMeeting({ icon,href= "#", children }: PrgItemMeetingProps) {
    return (
        <Link href={href} passHref>
            <Flex align="center" p="4" _hover={{
                bgGradient: "linear-gradient(257deg, blue.50 0%,blue.900 100%)",
                cursor: "pointer"
            }}>
                {icon && <Icon as={icon} />}
                <Text>
                    {children}
                </Text>
            </Flex>
        </Link>
    );
}