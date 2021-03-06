import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import { Input } from "../../components/Form/Input";


export default function CreateUser(){

  return(

    <Box>
      <Header/>
      <Flex w='100%' my='6' maxW='1480' mx='auto' px='6'>
        <SideBar/>

      <Box flex='1'borderRadius='8' bg='gray.800' p='8' >
        <Heading size='lg' fontWeight='normal' >Criar Usuário</Heading>

        <Divider my='6' borderColor='gray.700' />

        <VStack spacing='8' >
          <SimpleGrid minChildWidth='240px' spacing='8' w='100%' >

            <Input name='name' label='Nome completo' />
            <Input type='email' name='email' label='E-mail'  />

          </SimpleGrid>
          <SimpleGrid minChildWidth='240px' spacing='8' w='100%' >

            <Input type='password' name='password' label='Senha' />
            <Input type='password' name='confirmPassword' label='Confirmar senha' />

          </SimpleGrid>
        </VStack>
        <Flex mt='8' justify='flex-end'>
            <HStack spacing='4' >
              <Button colorScheme='whiteAlpha'>Cancelar</Button>
              <Button colorScheme='pink'>Salvar</Button>
            </HStack>
          </Flex>
      </Box>
      </Flex>
    </Box>
  )
}