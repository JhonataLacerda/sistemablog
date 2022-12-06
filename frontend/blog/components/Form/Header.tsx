import { Flex, Text, Image, Box, Input, Icon } from '@chakra-ui/react'
import {RiSearchLine} from 'react-icons/ri'
export function Header() {
    return (
        <Flex
            w="100%"
            as="header"
            maxWidth={1480}
            h="100"
            mx="10"
            mt="4"
            px="6"
            align="center">
            <Box
              boxSize="200px">
              <Image
              src="logo.png"
              alt="logo"
              >
              </Image>
              </Box>
<Flex
  as="label"
  flex="1"
  py="4"
  px="8"
  ml="400"
  maxWidth={400}
  alignSelf="center"
  color="gray.200"
  position="relative"
  backgroundColor="gray.800"
  borderRadius="full"
  >
   <Input
      color="gray.50" 
      variant="unstyled"
      placeholder='Buscar'
      px="4"
      mr="4"
      _placeholder={{color:'#cfb672'}}
      />
      <Icon as={RiSearchLine} fontSize="20" color="#cfb672"/>
</Flex>

<Flex ml="auto" align="center">

</Flex>
        </Flex>
    );
}

export default Header;