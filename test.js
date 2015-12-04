'use strict';

var test = require('tape');
var Deferred = require('./');
var MyPromise = require('promise');

test('constructs', function (t) {
	t.ok(new Deferred() instanceof Deferred, 'constructs a new Deferred');
	t.ok(Deferred() instanceof Deferred, 'returns a new Deferred');
	t.notEqual(Deferred(), Deferred(), 'returns new instance each time');
	t.end();
});

test('uses the native promise by default', function (t) {
	var deferred = Deferred();
	t.ok(deferred.promise instanceof global.Promise, 'promise property is a Promise');
	t.end();
});

test('optionally uses a custom promise', function (t) {
	var deferred = Deferred(MyPromise);
	t.ok(deferred.promise instanceof MyPromise, 'promise property is a MyPromise');
	t.end();
});

test('resolve', function (t) {
	var deferred = Deferred();
	t.plan(1);
	deferred.promise.then(function (value) {
		t.equal(value, 42, 'value is resolved properly');
	});
	deferred.resolve(42);
});

test('reject', function (t) {
	var deferred = Deferred();
	t.plan(1);
	deferred.promise.then(null, function (error) {
		t.equal(error, 'error', 'error is rejected properly');
	});
	deferred.reject('error');
});

