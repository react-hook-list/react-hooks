// useKeyboardJs
// React UI sensor hook that detects complex key combos like detecting when multiple keys are held down at the same time or requiring them to be held down in a specified order.
//
// 	Via KeyboardJS key combos. Check its documentation for further details on how to make combo strings.
//
// 	Usage
// import useKeyboardJs from 'react-use/lib/useKeyboardJs';
//
// const Demo = () => {
// 	const [isPressed] = useKeyboardJs('a + b');
//
// 	return (
// 		<div>
// 		[a + b] pressed: {isPressed ? 'Yes' : 'No'}
// </div>
// );
// };
// Note: Because of dependency on keyboardjs you have to import this hook directly like shown above.
//
// 	Requirements
// Install keyboardjs peer dependency:
//
// 	npm add keyboardjs
// # or
// yarn add keyboardjs
// Reference
// useKeyboardJs(combination: string | string[]): [isPressed: boolean, event?: KeyboardEvent


import {useEffect, useRef} from 'react';
import useEvent from "./useEvent";


function filter(){

}

export default function (keyShortString = '') {
	const ref = useRef([])

	const keys = keyShortString.replace(/\s/ig, '')
		.split('+')
		.filter(function (a) {
			return !!a;
		});

	useEvent('keydown', (e) => {
		// if(){
		//
		// }
	})

}
