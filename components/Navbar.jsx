import { Box, Center, Flex, Link, Heading, Input } from '@chakra-ui/react';
import styles from '../styles/Navbar.module.css';

function navbar() {
	return (
		<Box
			background='gray.800'
			h='70px'
			display='flex'
			justifyContent='space-between'
		>
			<Flex gap='60px' color='white' mt='20px' ml='20px'>
				<Link>Link</Link>
				<Link>Link</Link>
				<Link>Link</Link>
				<Link>Link</Link>
			</Flex>
			<Center>
				<Heading className={styles.sitehead_title}>Subarashi.tv</Heading>
			</Center>
			<Input
				placeholder='Search'
				_placeholder={{ color: 'black' }}
				size='sm'
				w='200px'
				mt='20px'
				mr='50px'
				borderRadius='10px'
				bg='white'
			/>
		</Box>
	);
}

export default navbar;
