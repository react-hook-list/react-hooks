import {BehaviorSubject} from 'rxjs';
import {useState, useEffect, useMemo} from 'react';

export function useObservable(inputFactory, initialState, inputs) {
	const [state, setState] = useState(typeof initialState !== 'undefined' ? initialState : null);

	const {state$, inputs$} = useMemo(() => {
		const stateSubject$ = new BehaviorSubject(initialState);
		const inputSubject$ = new BehaviorSubject(inputs);

		return {
			state$: stateSubject$,
			inputs$: inputSubject$,
		};
	}, []);

	useEffect(() => {
		inputs$.next(inputs);
	}, inputs || []);

	useEffect(() => {
			let output$;
			if (inputs) {
				output$ = inputFactory(inputs$, state$);
			} else {
				output$ = inputFactory(state$);
			}
			const subscription = output$.subscribe((value) => {
				state$.next(value);
				setState(value);
			});
			return () => {
				subscription.unsubscribe();
				inputs$.complete();
				state$.complete();
			};
		},
		[], // immutable forever
	);

	return state;
}
