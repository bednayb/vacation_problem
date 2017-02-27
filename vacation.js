'use strict';

// Destinations
const destinations = ['x','a','z','w'];

// Destinations rules -- in small array contains the rules. the first should be before the second. Example: [['x','y'], ['y','z']]  x --> y  and y --> z
const rules1 = [['y','x'], ['z','x'],['z','y'],['b','a']];
const rules2 = [['y','x']];
const rules3 = [['y','x'],['y','x']];
const rules4 = 5;

function vacation(plan, rules){

  // Check plan is array
  if(!(plan instanceof Array)){
    return "Plan must be array"
  }
  // Check every data in the plan (array) is string
  const everyDataIsStringInPlan = plan.every((e)=>{
    return typeof e === 'string'
  })
  if(everyDataIsStringInPlan === false){
    return "Not valid data in plan"
  }
  // Check rules is an array
  if(!(rules instanceof Array)){
    return "rules must be array"
  }
  // Check every data in 'big array' is array
  const everyDataIsArrayInRules = rules.every((e)=>{
    return e instanceof Array
  })
  if(everyDataIsArrayInRules === false){
    return "Not valid data in rules"
  }
  //Check every destinations exists just once
  let checkDestinationsOnce = plan.sort();
  for(let i = 0; i < checkDestinationsOnce.length-1; i++){
    if(checkDestinationsOnce[i] === checkDestinationsOnce[i+1]){
      return "Use every destinations just once"
    }
  }
  // Check rules 1. -> don't give a rule more than once
  let checkSameRules = rules.sort();
  for(let i = 0; i < checkSameRules.length-1; i++){
    // Check two array is equal
    if(JSON.stringify(checkSameRules[i]) === JSON.stringify(checkSameRules[i+1])){
      return "Use every rule just once"
    }
  }
  // Check rules 2. -> example if we have x --> y we can't have y --> z
  let ellentetesSzabaly = [];

  //check rules
  for (let i of rules) {
    if(plan.indexOf(i[0]) > plan.indexOf(i[1])){
       plan[plan.indexOf(i[0])] = i[1];
       plan[plan.indexOf(i[1])] = i[0];
    }
  }
  console.log(plan);
  return plan
}

vacation(destinations,rules3)

module.exports = vacation;
