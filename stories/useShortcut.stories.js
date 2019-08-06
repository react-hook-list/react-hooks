import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Button} from 'antd';
import useShortcut from "../src/ui/useShortcut";


function Demo() {
	useShortcut('ctrl+s', function () {
		console.log('run ');
		action('run shortcut ctrl+s')()
	});

	useShortcut('ctrl+e', function () {
		console.log('run s');
		action('run shortcut ctrl+e')()
	});

	return (
		<Button>
			Button
		</Button>
	);
}


storiesOf('useShortcut', module)
	.add('use state', () => <Demo/>);
