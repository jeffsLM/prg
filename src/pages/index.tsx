import { Flex, Button, Stack, Image, Box, Heading, Input, Text, HStack, Center } from '@chakra-ui/react'


export default function SingIn() {

  return (
    <Box >
      <Center>
        <Flex
          flex="1"
          w="100vw"
          h="89.2vh"

          maxWidth={1440}
          align="center"
          flexDir={["column", "row"]}
          justify="space-around">

          <Flex as="section" justify="center" m="3">
            <Box >
              <Heading as="h2" size="lg" fontWeight="100">
                Uma história inesquecível
              </Heading>
              <Heading as="h2" size="lg" ml="10" fontWeight="400">
                está prestes a começar
              </Heading>
            </Box>
          </Flex>

          <Flex
            as="form"
            w="100%"
            maxWidth={360}
            bg="blue.700"
            p="8"
            borderRadius={8}
            flexDir="column"
            m={["6", "6"]}
          >

            <Stack spacing="4">
              <Flex justify="center">
                <Box boxShadow="md" p="4" rounded="md" bgGradient="linear( 258deg,blue.50 0%,blue.800 100%)">
                  <Image src="/images/logoJF.svg" alt="Jf Labs" />
                </Box>
              </Flex>

              <Flex direction="column" align="center">
                <Box>
                  <Heading as="h4" size="md" fontWeight="400">
                    PRG
                  </Heading>
                  <Heading as="h4" size="md" fontWeight="100" ml="5">
                    Table Master
                  </Heading>
                </Box>
              </Flex>

              <Box>
                <Text fontSize="15">
                  Login
                </Text>
                <Input
                  name="login"
                  id="login"
                  focusBorderColor="blue.500"
                  bg="blue.900"
                  variant="filled"
                  _hover={{
                    bgColor:
                      'blue.900'
                  }}
                  size="md" />
              </Box>

              <Box>
                <Text fontSize="15">
                  Senha
                </Text>
                <Input
                  name="password"
                  id="password"
                  focusBorderColor="blue.500"
                  bg="blue.900"
                  variant="filled"
                  _hover={{
                    bgColor:
                      'blue.900'
                  }}
                  size="md" />
              </Box>

            </Stack>

            <Button
              boxShadow="md"
              p="4"
              rounded="md"
              type="submit"
              size="lg"
              mt="6"
              bgGradient="linear( 258deg,blue.50 0%,blue.800 100%)"
              fontWeight="400"
              colorScheme="blue">
              Play
            </Button>
          </Flex>

        </Flex>
      </Center>

      <Flex as="footer" w="100%" justify="center" direction="row" mt="6" pb="9" >
        <Text fontSize="10">
          Powered by
        </Text>
        <Image src="/images/logoJF.svg" h="8" alt="Jf Labs" />
        <Flex align="end">
          <Text fontSize="10"  >
            Labs
          </Text>
        </Flex>
      </Flex>

    </Box>




  )
}
