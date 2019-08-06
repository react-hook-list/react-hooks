import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Button} from 'antd';
import useMountState from "../src/react/useMountState";


function Demo() {
	const isMounted = useMountState();

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


function DemoState() {
	const isMounted = useMountState();
	action('mounted state')(isMounted);
	
	return <Button>
		Button {isMounted ? 'mounted' : 'not mounted'}
	</Button>;
}

storiesOf('useMountState', module)
	.add('use callback', () => <Demo/>)
	.add('use state', () => <DemoState/>);
