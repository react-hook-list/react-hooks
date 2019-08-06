export default function ensureArray(obj) {
	return Array.isArray(obj) ? obj : [obj];
}
