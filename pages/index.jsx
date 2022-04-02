import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Sitehead from '../components/Sitehead';
import Poster from '../components/Poster';
import { Heading, Box } from '@chakra-ui/react';
import Axios from 'axios';
import Layout from '../components/Layout';
import { AnimateSharedLayout } from 'framer-motion';
import PosterList from '../components/PosterList';

export default function Home({ animes }) {
	return (
		<Layout>
			<Sitehead />
			<Box w='100%'>
				<Heading ml='20' size='md'>
					Trending
				</Heading>
				<Box display='flex' pl='10px' pr='10px' flexWrap='wrap'>
					<PosterList animes={animes} />
				</Box>
			</Box>
			<Box w='100%'>
				<Heading ml='20' size='md' pt='10'>
					Newest
				</Heading>
				<Box display='flex' pl='10px' pr='10px' flexWrap='wrap'>
					<Poster />
				</Box>
			</Box>
		</Layout>
	);
}

export const getStaticProps = async () => {
	const res = await fetch(
		'https://api.aniapi.com/v1/anime?year=2022&per_page=15&page=1',
		{
			method: 'Get',
			headers: {
				Authorization: 'Bearer <${process.env.API_KEY}>',
			},
		}
	);
	const data = await res.json();
	const animes = data.data.documents;

	return {
		props: {
			animes,
		},
	};
};
