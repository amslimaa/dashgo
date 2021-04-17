import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react';

import {  RiNotificationLine, RiSearch2Line, RiUserAddLine } from 'react-icons/ri'

export function Header(){
  return (
    <Flex
    as='header'
    w='100%'
    h='20'
    maxW='1480'
    mx='auto'
    px='6'
    mt='4'
    align='center'
    >
      <Text
        fontSize='3xl'
        fontWeight='bold'
        letterSpacing='tight'
        w='64'
      >
        Dashgo
        <Text as='span' ml='1' color='pink.500'>.</Text>
      </Text>
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
      <Flex
        align='center'
        ml='auto'
      >
        <HStack
          spacing='8'
          mx='8'
          pr='8'
          py='1'
          color='gray.300'
          borderRightWidth={1}
          borderColor='gray.700'>
          <Icon  as={ RiNotificationLine } fontSize='20'/>
          <Icon  as={ RiUserAddLine } fontSize='20' />
        </HStack>
        <Flex align='center'>
            <Box mr='4' textAlign='center'> 
              <Text>Amós Lima</Text>
              <Text color='gray.300' fontSize='small'>
                social.amos@gmail.com]
              </Text>
            </Box>
            <Avatar size='md' name='Amós Lima'src='https://github.com/amslimaa.png'/>
        </Flex>
      </Flex>
    </Flex>
  )
}