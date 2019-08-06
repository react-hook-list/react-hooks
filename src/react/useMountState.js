import {useRef, useState} from 'react';
import useEffectOnce from "./useEffectOnce";

export default function (type = 'method') {
	if (type === 'state') {
		const [state, update] = useState(false);
		useEffectOnce(() => {
			update(true);
			return () => {
				update(false);
			};
		});
		return state;
	} else {
		const ref = useRef(false);

		useEffectOnce(() => {
			ref.current = true;
			return () => {
				ref.current = false;
			};
		});

		return () => {
			return ref.current;
		};
	}
}
