var test = require('tape')
var vacation = require('./vacation.js')

//TEST WORK
test('true', function (t) {
  t.equal(1, 1);
  t.end();
});

//Vacation function WORKS
test('x with no rules result x', function (t) {
  t.deepEqual(vacation(['x'],[]),['x']);
  t.end();
})

// Works with more vacation plan
test('x with no rules result x', function (t) {
  t.deepEqual(vacation(['x','y','z'],[]),['x','y','z']);
  t.end();
})

// Works with more vacation plan
test('x with no rules result x', function (t) {
  t.deepEqual(vacation(['x','y','z'],[['y','x']]),['y','x','z']);
  t.end();
})

// Works with more vacation plan
test('x with no rules result x', function (t) {
  t.deepEqual(vacation(['x','y','z'],[['y','x'], ['z','x'],['z','y']]),['z','y','x']);
  t.end();
})
