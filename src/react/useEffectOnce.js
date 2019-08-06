import {useEffect} from 'react';

export default function (fn) {
	useEffect(fn, []);
}
