var test = require('tape')
var vacation = require('./vacation.js')

//1. TEST WORK
test('true', function (t) {
  t.equal(1, 1);
  t.end();
});

//2. Vacation function WORKS
test('Vacation function WORKS', function (t) {
  t.deepEqual(vacation(['x'],[]),['x']);
  t.end();
})

//3. Plan must be array
test('Plan must be array', function (t) {
  t.deepEqual(vacation("x",[]),"Plan must be array");
  t.end();
})

//4. Rules must be array
test('Rules must be array', function (t) {
  t.deepEqual(vacation(['x','y','z'],"x"),"rules must be array");
  t.end();
})


//5. Plan data must be string
test('Plan data must be string', function (t) {
  t.equal(vacation(["x",7],[]),"Not valid data in plan");
  t.end();
})

//6. every Rule data in 'big' array must be array
test("Rule data in 'big' array must be array", function (t) {
  t.equal(vacation(["x"],[['a'],'s']),"Not valid data in rules");
  t.end();
})

//7.

//8. Works with more vacation plan
test('Works with more vacation plan', function (t) {
  t.deepEqual(vacation(['x','y','z'],[]),['x','y','z']);
  t.end();
})

//9. Vacation plan with one rule
test('Vacation plan with one rule', function (t) {
  t.deepEqual(vacation(['x','y','z'],[['y','x']]),['y','x','z']);
  t.end();
})

//10. Vacation plan with three rules
test('x with no rules result x', function (t) {
  t.deepEqual(vacation(['x','y','z'],[['y','x'], ['z','x'],['z','y']]),['z','y','x']);
  t.end();
})

//11. Use a destination more than one
test('Use a destination more than one', function (t) {
  t.equal(vacation(['x','y','z','x'],[]),"Use every destinations just once");
  t.end();
})
//11. Use a rule more than one
test('Use a rule more than one', function (t) {
  t.equal(vacation(['x','y','z','a'],[['z','x'],['z','x']]),"Use every rule just once");
  t.end();
})
