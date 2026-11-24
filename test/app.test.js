
import test from 'node:test';
import assert from 'node:assert/strict';
import { greet, add } from '../src/app.js';

test('greet should return a personalized greeting', () => {
    assert.strictEqual(greet('Parul'), 'Hello, Parul!');
});

test('greet should return a default greeting', () => {
    assert.strictEqual(greet(''), 'Hello, Guest!');
});

test('add should return the sum of two numbers', () => {
    assert.strictEqual(add(5, 3), 8);
});
