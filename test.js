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

// Vacation plan with one rule
test('x with no rules result x', function (t) {
  t.deepEqual(vacation(['x','y','z'],[['y','x']]),['y','x','z']);
  t.end();
})

// Vacation plan with three rules
test('x with no rules result x', function (t) {
  t.deepEqual(vacation(['x','y','z'],[['y','x'], ['z','x'],['z','y']]),['z','y','x']);
  t.end();
})

// Use a destination more than one
test('x with no rules result x', function (t) {
  t.equal(vacation(['x','y','z','x'],[]),"Use every destinations just once");
  t.end();
})
