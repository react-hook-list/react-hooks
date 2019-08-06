import {useState} from 'react';

export default function () {
	const [count, update] = useState(1);
	return function () {
		update(count + 1);
	};
}
