import { hooks } from '../../utils/hooks';

import isFunction from '../../utils/is-function';

export default function each(handler) {
	if (!isFunction(handler)) throw new Error(hooks.t('errors.paramsRequired'));
	if (!this.el) return undefined;

	let idx = 0;
	for (let el of this.el) {
		let $el = hooks.$(el);
		handler.call(this, $el, idx, el);
		idx++;
	}

	return this;
}
