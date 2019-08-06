import React from 'react';
import {storiesOf} from '@storybook/react';
import {Button, Input} from 'antd';
import useInterval from "../src/effect/useInterval";

const Demo = () => {
	const [count, setCount] = React.useState(0);
	const [delay, setDelay] = React.useState(1000);

	useInterval(() => {
		setCount(count + 1);
	}, delay);

	function handleDelayChange(e) {
		setDelay(Number(e.target.value));
	}

	return (
		<div>
			<div>
				delay: <Input value={delay} onChange={handleDelayChange}/>
			</div>
			<h1>count: {count}</h1>
			<div>
				<Button onClick={() => setDelay(delay ? null : 1000)}>{delay ? 'stop' : 'start'}</Button>
			</div>
		</div>
	);
};

storiesOf('useInterval', module)
	.add('use interval', () => <Demo/>);
