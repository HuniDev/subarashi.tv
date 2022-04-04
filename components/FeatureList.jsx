import Feature from './Feature';

const FeatureList = ({ animes }) => {
	return animes.map(anime => {
		return (
			<Feature
				key={anime.mal_id}
				titles={anime.titles}
				cover_image={anime.cover_image}
			/>
		);
	});
};

export default FeatureList;
