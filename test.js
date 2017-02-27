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

//7.  every Rule data in 'small' array must have 2 element
test("every Rule data in 'small' array must have 2 element", function (t) {
  t.equal(vacation(["x"],[['a'],'s']),"Not valid data in rules");
  t.end();
})

//8.  every Rule data in 'small' array must be string
test("every Rule data in 'small' array must be string", function (t) {
  t.equal(vacation(['x','y','z'],[['x','y'],['y',3]]),"each rule's data should be string");
  t.end();
})
//8.  rules source and termin same
test("rules source and termin same", function (t) {
  t.equal(vacation(['x','y','z'],[['x','y'],['y','y']]),"the source point and termin can't be same");
  t.end();
})
//9.  Check every rule's data is a valid destination
test("every rule's data should be a valid destination", function (t) {
  t.equal(vacation(['x','y','z'],[['x','y'],['y','a']]),"One or more rule's data isnt a destination");
  t.end();
})

//10. Works with more vacation plan
test('Works with more vacation plan', function (t) {
  t.deepEqual(vacation(['x','y','z'],[['x','y']]),['x','y','z']);
  t.end();
})

//11. Vacation plan with one rule
test('Vacation plan with one rule', function (t) {
  t.deepEqual(vacation(['x','y','z'],[['y','x']]),['y','x','z']);
  t.end();
})

//12. Use a destination more than one
test('Use a destination more than one', function (t) {
  t.equal(vacation(['x','y','z','x'],[]),"Use every destinations just once");
  t.end();
})

//13. Use a rule more than one
test('Use a rule more than one', function (t) {
  t.equal(vacation(['x','y','z','a'],[['z','x'],['z','x']]),"Use every rule just once");
  t.end();
})
//14. if we have z --> x we can't have x --> z
test('Use a rule more than one', function (t) {
  t.equal(vacation(['x','y','z','a'],[['z','x'],['x','z']]),"impossible rules same time");
  t.end();
})

//15 Vacation plan with three rules
test('Vacation plan with three rules', function (t) {
  t.deepEqual(vacation(['x','y','z'],[['y','x'], ['z','x'],['z','y']]),['z','y','x']);
  t.end();
})
