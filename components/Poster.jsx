import { Box, Heading, Center } from '@chakra-ui/react'

function Poster() {
  return (
    <Box bg='gray.300' w='190px' h='250px' borderRadius='10' boxShadow='base' mt='5' ml='50px'>
      <Center>
        <Heading size="md" mt='200'>
           Title
        </Heading>
      </Center>
    </Box>
  )
}

export default Poster