import React from 'react';
import {storiesOf} from '@storybook/react';
import {Button} from 'antd';
import useSetState from "../src/state/useSetState";


function DemoCallback() {
	const [state, setState] = useSetState({name: 1});

	return (
		<>
			<Button onClick={() => {
				setState({age: 2});
			}}>
				Button {state}
			</Button>
			<Button onClick={() => {
				setState((pre) => {
					return {name: pre + 1};
				});
			}}>
				Button {state}
			</Button>
		</>
	);
}

storiesOf('useMount', module)
	.add('use mount callback', () => <DemoCallback/>);
