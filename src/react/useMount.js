import useEffectOnce from "./useEffectOnce";

export default function (obj) {
	useEffectOnce(() => {
		obj();
	});
}
