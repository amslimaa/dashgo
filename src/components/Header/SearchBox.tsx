import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiSearch2Line } from "react-icons/ri";

export function SearchBox() {
  return (
    <Flex
      as='label'
      flex='1'
      py='4'
      px='8'
      ml='6'
      maxW={400}
      alignSelf='center'
      color='gray.200'
      position='relative'
      bg='gray.800'
      borderRadius='full'>
      <Input
        type='text'
        color='gray.50'
        px='4'
        mr='4'
        variant='unstyled'
        placeholder='Buscar
            na
            plataforma'
        _placeholder={{
          color: 'gray.400'
        }} />
      <Icon fontSize='23' as={RiSearch2Line} />
    </Flex>
  )
}