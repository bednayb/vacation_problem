'use strict';


// Destinations rules -- in small array contains the rules. the first should be before the second. Example: [['x','y'], ['y','z']]  x --> y  and y --> z

function vacation(plan, rules){
  // Check plan is array
  if(!(plan instanceof Array)){
    return "Plan must be array"
  };
  // Check every data in the plan (array) is string
  const everyDataIsStringInPlan = plan.every((e)=>{
    return typeof e === 'string'
  })
  if(everyDataIsStringInPlan === false){
    return "Not valid data in plan"
  };
  // Check rules is an array
  if(!(rules instanceof Array)){
    return "rules must be array"
  };
  // Check every data in 'big array' is array
  const everyDataIsArrayInRules = rules.every((e)=>{
    return e instanceof Array
  });
  if(everyDataIsArrayInRules === false){
    return "Not valid data in rules"
  }
  let everyRuleData = [];
  // Check each rules have 2 elements
  for(let i in rules){
    if(rules[i].length !== 2){
      return "each rule should have two elements"
    }
    //Check each rule's data is string
    if( typeof rules[i][0] !== 'string' || typeof rules[i][1] !== 'string'){
      return "each rule's data should be string"
    }
    if( rules[i][0] === rules[i][1]){
      return "the source point and termin can't be same"
    }
    // Check every rule's data is a valid destination
    everyRuleData.push(rules[i][0]);
    everyRuleData.push(rules[i][1]);
  }
  // Check every elements use just once
  let uniqueArray = everyRuleData.filter(function(item, pos) {
    return everyRuleData.indexOf(item) == pos;
  })
  const isRulesDataPartOfDestanitaion = uniqueArray.every(function(val) { return plan.indexOf(val) >= 0; });
  if(isRulesDataPartOfDestanitaion === false){
    return "One or more rule's data isnt a destination"
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
  let copyRules = rules;
  for(let i = 0; i < copyRules.length; i++){
  //(with reverse I had problem with reference)
      let reverse = [];
      reverse.push(rules[i][1]);
      reverse.push(rules[i][0]);
      for(let j = 1; j < copyRules.length; j++){
        if((JSON.stringify(reverse) === JSON.stringify(copyRules[j])) && ( j > i) && copyRules.length !== 1) {
          return "impossible rules same time"
        }
      }
    }
  //check rules
  for (let i of rules) {
    if(plan.indexOf(i[0]) > plan.indexOf(i[1])){
       plan[plan.indexOf(i[0])] = i[1];
       plan[plan.indexOf(i[1])] = i[0];
    }
  }
  return plan
}

module.exports = vacation;
