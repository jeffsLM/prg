import { Flex, Icon, Text } from '@chakra-ui/react'
import { ElementType } from "react";
interface PrgItemMeetingProps {
    icon?: ElementType
    children: string

}

export function PrgItemMeeting({ icon, children }: PrgItemMeetingProps) {
    return (
        <Flex align="center" p="4" _hover={{

            bgGradient: "linear-gradient(257deg, blue.50 0%,blue.900 100%)"
        }}>
            {icon && <Icon as={icon} />}
            <Text>
                {children}
            </Text>
        </Flex>
    );
}