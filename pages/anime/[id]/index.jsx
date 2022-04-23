import DetailPage from '../../../components/DetailPage';

function Anime({ animes, params }) {
	const animeDetails = animes.map(anime => {
		if (anime.id == params.id) {
			return <DetailPage key={anime.anilist_id} anime={anime} />;
		}
	});

	return <div>{animeDetails}</div>;
}

export async function getStaticProps({ params }) {
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

	const animes = [...trendingAnimes, ...upcomingAnimes];

	return {
		props: { animes, params },
	};
}

export async function getStaticPaths() {
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

	const animes = [...trendingAnimes, ...upcomingAnimes];

	const paths = animes.map(anime => ({ params: { id: anime.id.toString() } }));

	return {
		paths,
		fallback: false,
	};
}

export default Anime;
