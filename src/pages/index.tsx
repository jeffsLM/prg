import { Flex, Stack, Box, Heading, Center } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'


import { Input } from '../components/Form/Input'
import { Logo } from '../components/Design/Logo'
import { Button } from '../components/Design/Button'



type SingInFormData = {
  user: string;
  password: string;
}

const singInFormSchema = yup.object().shape({
  user: yup.string().required(),
  password: yup.string().required(),
})

export default function SingIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(singInFormSchema)
  })
  const { errors } = formState;

  const handleSingIn: SubmitHandler<SingInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    //add validations
  }

  return (
    <Box >
      <Center>
        <Flex
          flex="1"
          w="100vw"
          h="100vh"
          maxWidth={1440}
          align="center"
          flexDir={["column", "row"]}
          justify="space-around">

          <Flex as="section" justify="center" m="3">
            <Box >
              <Heading as="h2" fontSize={["20", "25"]} fontWeight="100">
                Uma história inesquecível
              </Heading>
              <Heading as="h2" fontSize={["20", "25"]} ml="10" fontWeight="400">
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
            onSubmit={handleSubmit(handleSingIn)}
          >
            <Stack spacing="4">
 

                <Logo flexDir="column" fontSize="20" boxSize="100" direction="column" />
        
              <Input type="text"
                name="user"
                error={errors.user}
                label="User"
                {...register("user")} />

              <Input type="password"
                name="password"
                error={errors.password}
                label="Password"
                {...register("password")} />
            </Stack>
            <Button type="submit" text="Play" />
          </Flex>
        </Flex>
      </Center>

    </Box>
  )
}
