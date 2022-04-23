import { Text } from '@chakra-ui/react';

function DetailPage({ anime }) {
	return (
		<div>
			<Text color='white'>{anime?.titles?.en}</Text>
		</div>
	);
}

export default DetailPage;
