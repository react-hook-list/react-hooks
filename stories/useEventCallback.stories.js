import React from 'react';
import {storiesOf} from '@storybook/react';
import { map } from "rxjs/operators";
import useEventCallback from "../src/rxjs/useEventCallback";

function App() {
	const [clickCallback, [description, x, y]] = useEventCallback((event$) =>
			event$.pipe(
				map((event) => [event.target.innerHTML, event.clientX, event.clientY]),
			),
		["nothing", 0, 0],
	)

	return (
		<div className="App">
			<h1>click position: {x}, {y}</h1>
			<h1>"{description}" was clicked.</h1>
			<button onClick={clickCallback}>click me</button>
			<button onClick={clickCallback}>click you</button>
			<button onClick={clickCallback}>click him</button>
		</div>
	);
}

storiesOf('useEventCallback', module)
	.add('demo', () => <App/>);
