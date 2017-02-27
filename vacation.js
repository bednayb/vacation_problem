'use strict';

// Destinations
const destinations = ['x','y','z','a','b'];

// Destinations rules -- in small array contains the rules. the first should be before the second. Example: [['x','y'], ['y','z']]  x --> y  and y --> z
const rules1 = [['y','x'], ['z','x'],['z','y'],['b','a']];
const rules2 = [['y','x']];


function vacation(plan, rules){
  console.log(plan);
  for (let i of rules) {
    if(plan.indexOf(i[0]) > plan.indexOf(i[1])){
       plan[plan.indexOf(i[0])] = i[1];
       plan[plan.indexOf(i[1])] = i[0];
      // console.log(plan);
    }
  }
  console.log(plan);
  return plan
}

vacation(destinations,rules1)

module.exports = vacation;
