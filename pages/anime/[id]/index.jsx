const Anime = ({ animes }) => {
	const curAnime = animes.find(item => item.id === );
	return  (
	 <div>
		 Title Placeholder
		 </div>
	)
	};

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
		props: { animes },
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
