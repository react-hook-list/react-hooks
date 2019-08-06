import {useRef} from 'react';
import useEvent from "./useEvent";
import ensureArray from "../utils/ensureArray";
import noop from "../utils/noop";


function isLikeInput(tagName) {
	return ~['INPUT', 'SELECT', 'TEXTAREA'].indexOf(tagName);
}

const aliasMap = {
	ctr: ['ControlLeft', 'ControlRight'],
	win: ['MetaLeft', 'MetaRight'],
	meta: ['MetaLeft', 'MetaRight'],
	alt: ['AltLeft', 'AltRight'],
	shift: ['ShiftLeft', 'ShiftRight'],
	bracket: ['BracketLeft', 'BracketRight'],
	space: 'Space',
	'<': 'Comma',
	'>': 'Period',
	'?': 'Slash',
	'context': 'ContextMenu',
	enter: 'Enter',
	'"': 'Quote',
	semi: 'Semicolon',
	capsLock: 'CapsLock',
	'[': 'BracketLeft',
	']': 'BracketRight',
	'|': 'Backslash',
	'back': 'Backspace',
	'=': 'Equal',
	'-': 'Minus',
	'~': 'Backquote',
	del: 'Delete',
	i: 'Insert',
	home: 'Home',
	end: 'End',
	up: 'ArrowUp',
	left: 'ArrowLeft',
	right: 'ArrowRight',
	down: 'ArrowDown',
	esc: 'Escape'
};

Object.keys(aliasMap).forEach(function (key) {
	if (Array.isArray(aliasMap[key])) {
		aliasMap[`${key}Left`] = aliasMap[key][0];
		aliasMap[`${key}Right`] = aliasMap[key][1];
	}
});

// find
function isMatch(aliasName, codeName) {
	codeName = codeName.toLowerCase();
	if (aliasMap[aliasName] && ~(ensureArray(aliasMap[aliasName]).indexOf(codeName))) {
		return true;
	} else {
		if (aliasName === codeName) {
			return true;
		}
		// KeyA-Z
		if (`key${aliasName}` === codeName) {
			return true;
		}
		// Digit0-9
		if (`Digit${aliasName}` === codeName) {
			return true;
		}
	}
	return false;
}


export default function (keyShortString = '', callback = noop) {
	const ref = useRef(0);

	const keys = keyShortString.replace(/\s/ig, '')
		.split('+')
		.filter(function (a) {
			return !!a;
		}) || [];

	useEvent('keydown', (e) => {
		const tagName = e.target.tagName;
		const code = e.code;
		if (!isLikeInput(tagName)) {
			const currentKey = keys[ref.current];
			if (currentKey) {
				if (isMatch(currentKey, code)) {
					ref.current += 1;
					if (ref.current >= keys.length) {
						ref.current = 0;
						callback();
					}
				}
			} else {
				ref.current = 0;
				callback();
			}
		}
	});

	useEvent('keyup', (e) => {
		const tagName = e.target.tagName;
		if (!isLikeInput(tagName)) {
			ref.current = 0;
		}
	});
}
