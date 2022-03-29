import { Box, Link, Flex, Heading, Center, Input, Image } from '@chakra-ui/react'

function Sitehead() {


  return (
    <Box bg='#2C5282' w='100%' h='230px' color='white' mb='10'>
      <Center>
         <Flex gap='60px'>
            <Link>Link</Link>
            <Link>Link</Link>
            <Link>Link</Link>
            <Link>Link</Link>
          </Flex>
       </Center>
      <Center>
         <Heading mt='30px'> Subarashi.tv</Heading>
      </Center>
      <Center>
        <Input placeholder='Search' size='sm' w='200px' mt='40px' borderRadius='10px' bg='white'/>
      </Center>
    </Box>
  )
}

export default Sitehead