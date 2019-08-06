import React, {useRef} from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Button} from 'antd';
import useForceUpdate from "../src/react/useForceUpdate";


function DemoCallback() {
	const ref = useRef(0);
	const update = useForceUpdate();

	ref.current += 1;

	return (
		<Button onClick={() => {
			action('clicked')();
			update();
		}}>
			Button render: {ref.current}
		</Button>
	);
}

storiesOf('useForceUpdate', module)
	.add('force update', () => <DemoCallback/>);
