'use strict';

// Destinations
const destinations = ['x','a','z','a','w'];

// Destinations rules -- in small array contains the rules. the first should be before the second. Example: [['x','y'], ['y','z']]  x --> y  and y --> z
const rules1 = [['y','x'], ['z','x'],['z','y'],['b','a']];
const rules2 = [['y','x']];


function vacation(plan, rules){
  //Check every destinations exists just once
  let checkDestinationsOnce = plan.sort();
  console.log('pince',checkDestinationsOnce);
  for(let i = 0; i < checkDestinationsOnce.length-1; i++){
    if(checkDestinationsOnce[i] === checkDestinationsOnce[i+1]){
      return "Use every destinations just once"
    }
  }
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

vacation(destinations,rules1)

module.exports = vacation;
