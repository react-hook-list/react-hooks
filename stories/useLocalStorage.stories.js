import React from 'react';
import {storiesOf} from '@storybook/react';
import useLocalStorage from "../src/effect/useLocalStorage";

const Demo = () => {
	const [value, setValue] = useLocalStorage('hello-key', 'foo');

	return (
		<div>
			<div>Value: {value}</div>
			<button onClick={() => setValue('bar')}>bar</button>
			<button onClick={() => setValue('baz')}>baz</button>
		</div>
	);
};

storiesOf('useLocalStorage', module)
	.add('Demo', () => <Demo/>);
