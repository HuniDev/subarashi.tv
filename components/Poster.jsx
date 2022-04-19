import { Box, Heading, Image, Center } from '@chakra-ui/react';
import Link from 'next/link';
import styles from '../styles/Poster.module.css';

function Poster(animes) {
	return (
		<Link href={`/anime/${animes.id}`}>
			<Box>
				<Box
					display='flex'
					flexDirection='column'
					bg='gray.300'
					w='190px'
					h='250px'
					borderRadius='20px'
					boxShadow='base'
					mt='5'
					ml='50px'
				>
					<Image
						src={animes?.cover_image}
						alt={animes?.banner_image}
						boxSize='250'
						objectFit='fill'
						borderRadius='10'
					/>
					<Box
						position='absolute'
						display='flex'
						alignItems='flex-end'
						w='inherit'
						h='inherit'
						mt='0'
						color='white'
					>
						<Box className={styles.titles} w='inherit' textAlign='center'>
							<Center>
								{animes.titles?.en ? (
									<Heading size='sm' pb='10px' w='100%'>
										{animes.titles.en}
									</Heading>
								) : (
									<Heading size='sm' pb='10px'>
										{animes.titles?.rj}
									</Heading>
								)}
							</Center>
						</Box>
					</Box>
				</Box>
			</Box>
		</Link>
	);
}

export default Poster;
