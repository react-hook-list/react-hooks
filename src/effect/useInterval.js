import {useRef, useEffect} from 'react';

export default (callback, delay = null) => {
	const latestCallback = useRef(() => {
	});

	useEffect(() => {
		latestCallback.current = callback;
	});

	useEffect(() => {
		if (delay !== null) {
			const interval = setInterval(() => latestCallback.current(), delay || 0);
			return () => clearInterval(interval);
		}
		return undefined;
	}, [delay]);
};
