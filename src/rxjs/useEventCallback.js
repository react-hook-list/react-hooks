import {useEffect, useState, useCallback} from 'react';
import {BehaviorSubject, Subject} from 'rxjs';

export default function useEventCallback(callback, initialState, inputs) {
	const initialValue = (typeof initialState !== 'undefined' ? initialState : null);
	const inputSubject$ = new BehaviorSubject(typeof inputs === 'undefined' ? null : inputs);
	const stateSubject$ = new BehaviorSubject(initialValue);
	const [state, setState] = useState(initialValue);
	const [event$] = useState(new Subject());

	function eventCallback(e) {
		return event$.next(e);
	}

	const returnedCallback = useCallback(eventCallback, []);
	const [state$] = useState(stateSubject$);
	const [inputs$] = useState(inputSubject$);

	useEffect(() => {
		inputs$.next(inputs);
	}, inputs || []);

	useEffect(() => {
		setState(initialValue);
		let value$;

		if (!inputs) {
			value$ = callback(event$, state$);
		} else {
			value$ = callback(event$, inputs$, state$);
		}
		const subscription = value$.subscribe((value) => {
			state$.next(value);
			setState(value);
		});
		return () => {
			subscription.unsubscribe();
			state$.complete();
			inputs$.complete();
			event$.complete();
		};
	}, []); // immutable forever

	return [returnedCallback, state];
}
