import styles from '../styles/Sitehead.module.css';
import {
	Box,
	Link,
	Flex,
	Heading,
	Center,
	Input,
	Image,
} from '@chakra-ui/react';

function Sitehead() {
	return (
		<Box bg='#2C5282' w='100%' h='230px' color='white' mb='10' display='flex'>
			<Image
				src='https://s4.anilist.co/file/anilistcdn/media/anime/banner/142329-i413SzLmToZN.jpg'
				objectFit='cover'
				boxSize='100%'
				display='flex'
				position='relative'
				className={styles.sitehead_hero}
			/>

			<Box
				position='absolute'
				display='flex'
				justifyContent='center'
				alignContent='center'
				w='inherit'
			>
				<Box>
					<Center>
						<Flex gap='60px'>
							<Link>Link</Link>
							<Link>Link</Link>
							<Link>Link</Link>
							<Link>Link</Link>
						</Flex>
					</Center>
					<Center>
						<Heading className={styles.sitehead_title} mt='30px'>
							Subarashi.tv
						</Heading>
					</Center>
					<Center>
						<Input
							placeholder='Search'
							size='sm'
							w='200px'
							mt='40px'
							borderRadius='10px'
							bg='white'
						/>
					</Center>
				</Box>
			</Box>
		</Box>
	);
}

export default Sitehead;
