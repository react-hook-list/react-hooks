import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import useMount from '../src/react/useMount';

import {Button} from 'antd';


function DemoCallback() {
	useMount(() => {
		action('mounted!')();
	});

	return (
		<Button>
			Button
		</Button>
	);
}

storiesOf('useMount', module)
	.add('use mount callback', () => <DemoCallback/>);
