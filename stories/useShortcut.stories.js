import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Button} from 'antd';
import useMountState from "../src/react/useMountState";
import useKeyShort from "../src/ui/useKeyShort";


function Demo() {
	setTimeout(() => {
		action('mounted state')(isMounted());
	}, 1000);

	action('mounted state')(isMounted());
	return (
		<Button>
			Button
		</Button>
	);
}



storiesOf('useMountState', module)
	.add('use callback', () => <Demo/>)
	.add('use state', () => <DemoState/>);
