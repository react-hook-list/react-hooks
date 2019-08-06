import React from 'react';
import {storiesOf} from '@storybook/react';
import usePrevious from "../src/state/usePrevious";

const Demo = () => {
	const [count, setCount] = React.useState(0);
	const prevCount = usePrevious(count);
	return (
		<div>
			<p>
				Now: {count}, before: {String(prevCount)}
			</p>
			<button onClick={() => setCount(value => value + 1)}>+</button>
			<button onClick={() => setCount(value => value - 1)}>-</button>
		</div>
	);
};
storiesOf('usePrevious', module)
	.add('demo', () => <Demo/>);
