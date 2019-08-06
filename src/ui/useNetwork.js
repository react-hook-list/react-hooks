import {useNetwork} from 'react-use';

const Demo = () => {
	const state = useNetwork();

	return (
		<pre>
		{JSON.stringify(state, null, 2)}
		</pre>
);
};
