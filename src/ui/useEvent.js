import {useEffect} from 'react';

function noop() {
}

const useEvent = (name, handler = noop, target = window, options = null) => {
	useEffect(() => {
		if (!handler) {
			return;
		}
		if (!target) {
			return;
		}
		(target.addEventListener || target.on).call(target, name, handler, options);
		return () => {
			(target.removeEventListener || target.off).call(target, name, handler, options);
		};
	}, [name, handler, target, options]);
};

export default useEvent;
