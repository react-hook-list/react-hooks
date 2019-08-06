import {useState, useEffect} from 'react';

export default function useObservable(observable$, initialValue) {
	const [value, updater] = useState(initialValue);

	useEffect(function () {
		const s = observable$.subscribe(updater);
		return () => s.unsubscribe();
	}, [observable$]);

	return value;
}
