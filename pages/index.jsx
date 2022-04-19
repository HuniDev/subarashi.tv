import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Sitehead from '../components/Sitehead';
import Navbar from '../components/Navbar';
import { Heading, Box } from '@chakra-ui/react';
import Layout from '../components/Layout';
import { AnimateSharedLayout } from 'framer-motion';
import PosterList from '../components/PosterList';
import FeatureList from '../components/FeatureList';

export default function Home({ trendingAnimes, upcomingAnimes }) {
	return (
		<Layout>
			<Navbar />
			<Sitehead />
			<Box w='100%'>
				<Heading ml='20' size='md'>
					Trending
				</Heading>
				<Box display='flex' pl='10px' pr='10px' flexWrap='wrap'>
					<PosterList animes={trendingAnimes} />
				</Box>
			</Box>

			<Box w='100%'>
				<Heading ml='20' size='md' pt='10'>
					Upcoming
				</Heading>
				<Box display='flex' pl='10px' pr='10px' flexWrap='wrap' pb='20px'>
					<PosterList animes={upcomingAnimes} />
				</Box>
			</Box>
		</Layout>
	);
}

export const getStaticProps = async () => {
	const res = await Promise.all(
		[
			fetch('https://api.aniapi.com/v1/anime?year=2022&per_page=15&page=1'),
			fetch(
				'https://api.aniapi.com/v1/anime?year=2022&status=not_yet_released&per_page=15&page=1'
			),
		],
		{
			method: 'Get',
			headers: {
				Authorization: 'Bearer <${process.env.API_KEY}>',
			},
		}
	);

	const res1 = await res[0].json();
	const res2 = await res[1].json();

	const trendingAnimes = res1.data.documents;
	const upcomingAnimes = res2.data.documents;

	return {
		props: {
			trendingAnimes,
			upcomingAnimes,
		},
	};
};
