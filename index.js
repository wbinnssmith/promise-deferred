'use strict';

var Deferred = function Deferred(Promise) {
	if (!(this instanceof Deferred)) { return new Deferred(Promise); }

	Promise = Promise || global.Promise;
	var self = this;
	self.promise = new Promise(function (resolve, reject) {
		self.resolve = resolve;
		self.reject = reject;
	});
	return self;
};

module.exports = Deferred;
