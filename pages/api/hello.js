// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler (req,res) {
	const res = fetch(
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
