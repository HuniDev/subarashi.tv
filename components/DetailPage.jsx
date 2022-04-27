import { Text, Box, Heading, Center, Flex, Image } from '@chakra-ui/react';
import EpisodeTile from './EpisodeTile';

function DetailPage({ anime }) {
	return (
		<div>
			<Box bg='#2C5282' w='100%' h='230px' color='white' mb='10' display='flex'>
				<Image
					src={anime.banner_image ? anime.banner_image : anime.cover_image}
					objectFit='cover'
					boxSize='100%'
					display='flex'
					position='relative'
				/>
				<Box position='absolute' display='flex' flexWrap='wrap' w='650px'>
					{anime.titles?.en ? (
						<Heading size='xl' pb='10px' w='100%'>
							{anime.titles.en}
						</Heading>
					) : (
						<Heading size='xl' pb='10px'>
							{anime.titles?.rj}
						</Heading>
					)}
					<Heading size='m'>{anime.descriptions.en}</Heading>
				</Box>
			</Box>
			<EpisodeTile anime={anime} />
		</div>
	);
}

export default DetailPage;
