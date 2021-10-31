import { Modal as ChakraModal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton, UseDisclosureProps } from '@chakra-ui/react'
import {ReactNode} from 'react'

interface ModalProps extends UseDisclosureProps {
    TextHeader: string;
    children:ReactNode;
}

export function Modal({ isOpen, onClose,TextHeader,children }: ModalProps) {
    return (
        <ChakraModal isOpen={isOpen} size="6xl" onClose={onClose}>
            <ModalOverlay />
            <ModalContent bg="blue.700">
                <ModalHeader fontSize="10" fontWeight="100">{TextHeader}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                {children}
                </ModalBody>
            </ModalContent>
        </ChakraModal>
    )
}