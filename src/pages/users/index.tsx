import { Text, Box, Button, Checkbox, Flex, Heading, Icon, Table, Tr, Th, Thead, Tbody, Td  } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { SideBar } from "../../components/SideBar";

export default function UserList(){

  return(

    <Box>
      <Header/>
      <Flex w='100%' my='6' maxW='1480' mx='auto' px='6'>
        <SideBar/>

      <Box flex='1'borderRadius='8' bg='gray.800' p='8' >
        <Flex mb='8' justify='space-between' align='center'>
          <Heading size='lg'  fontWeight='normal'>Usuários</Heading>
          <Button
            as='a'
            colorScheme='pink'
            size='sm'
            fontSize='sm'
            leftIcon={<Icon
              fontSize='20'
              as={RiAddLine}
            />} >
            Criar Novo
          </Button>
        </Flex>
      
        <Table colorScheme='whiteAlpha'>
          <Thead>
            <Tr>
              <Th px='6' color='grat.300' width='8'>
                <Checkbox colorScheme='pink' />
              </Th>
              <Th>Usuários</Th>
              <Th>Data de Cadastro</Th>
              <Th width='8'/>
            </Tr>
          </Thead>
          <Tbody>
          <Tr>
            <Td px='6'>
              <Checkbox colorScheme='pink' />
            </Td>
            <Td>
            <Text fontWeight='bold'>Amós Lima</Text>
            <Text fontSize='sm' color='gray.300'>social.amos@gmail.com</Text>
            </Td>
            <Td>
              <Text>17 de Abril, 2021</Text>
            </Td>
            <Td>
            <Button 
              as='a'
              colorScheme='purple'
              size='sm'
              fontSize='sm'
              leftIcon={<Icon fontSize='16'
                as={RiPencilLine}
              />} >
              Editar
            </Button>
            </Td>
          </Tr>
          <Tr>
            <Td px='6'>
              <Checkbox colorScheme='pink' />
            </Td>
            <Td>
            <Text fontWeight='bold'>Amós Lima</Text>
            <Text fontSize='sm' color='gray.300'>social.amos@gmail.com</Text>
            </Td>
            <Td>
              <Text>17 de Abril, 2021</Text>
            </Td>
            <Td>
            <Button 
              as='a'
              colorScheme='purple'
              size='sm'
              fontSize='sm'
              leftIcon={<Icon fontSize='16'
                as={RiPencilLine}
              />} >
              Editar
            </Button>
            </Td>
          </Tr>
          <Tr>
            <Td px='6'>
              <Checkbox colorScheme='pink' />
            </Td>
            <Td>
            <Text fontWeight='bold'>Amós Lima</Text>
            <Text fontSize='sm' color='gray.300'>social.amos@gmail.com</Text>
            </Td>
            <Td>
              <Text>17 de Abril, 2021</Text>
            </Td>
            <Td>
            <Button 
              as='a'
              colorScheme='purple'
              size='sm'
              fontSize='sm'
              leftIcon={<Icon fontSize='16'
                as={RiPencilLine}
              />} >
              Editar
            </Button>
            </Td>
          </Tr>
        </Tbody>
        </Table>
        <Pagination/>
      </Box>
      </Flex>
    </Box>
  )
}