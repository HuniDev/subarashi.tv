import Poster from './Poster';

const PosterList = ({ animes }) => {
	return animes.map(anime => {
		return (
			<Poster
				key={anime.mal_id}
				id={anime.id}
				titles={anime.titles}
				cover_image={anime.cover_image}
			/>
		);
	});
};

export default PosterList;
