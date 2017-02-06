//If node environment, reassign jquery to a fake window using jsdom
var isNode = Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]';
if (isNode) {
	var jsdom = require('jsdom').jsdom,
	window = jsdom('').defaultView;
	jQuery = jQuery(window);
}