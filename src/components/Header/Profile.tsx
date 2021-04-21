import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align='center'>
      <Box mr='4' textAlign='center'>
        <Text>Amós Lima</Text>
        <Text color='gray.300' fontSize='small'>
          social.amos@gmail.com]
        </Text>
      </Box>
      <Avatar size='md' name='Amós Lima' src='https://github.com/amslimaa.png' />
    </Flex>
  )
}