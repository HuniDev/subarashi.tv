import styles from '../styles/Sitehead.module.css';
import { Box, Button, Center, Input, Image, Heading } from '@chakra-ui/react';

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

			<Box position='absolute' display='flex' flexWrap='wrap' w='650px'>
				<Center>
					<Heading size='2xl' mt='30px' ml='30px' color='#001219'>
						Demon Slayer: Entertainment District
					</Heading>
				</Center>

				<Button
					size='lg'
					bg='#ae2012'
					mt='30px'
					ml='30px'
					_hover={{ background: '#ca6702' }}
				>
					Watch Now
				</Button>
			</Box>
		</Box>
	);
}

export default Sitehead;
