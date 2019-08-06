import React from 'react';
import {storiesOf} from '@storybook/react';
import {BehaviorSubject} from 'rxjs';
import useObservable from "../src/rxjs/useObservable";


const counter$ = new BehaviorSubject(0);

const Demo = () => {
	const value = useObservable(counter$, 0);

	return <button onClick={() => counter$.next(value + 1)}>Clicked {value} times</button>;
};


storiesOf('useObservable', module)
	.add('use mount callback', () => <Demo/>);
