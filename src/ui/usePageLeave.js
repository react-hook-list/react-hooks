import {usePageLeave} from 'react-use';

const Demo = () => {
	usePageLeave(() => console.log('Page left...'));

	return null;
};
