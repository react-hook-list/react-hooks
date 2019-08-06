import {useState} from 'react';

export default function useSetState(initialState) {
	const [state, set] = useState(initialState);

	return [state, (patch) => {
		return set((previous) => {
			return {
				...state,
				...previous,
				...(patch ? patch(previous) : {})
			};
		});
	}];
}
