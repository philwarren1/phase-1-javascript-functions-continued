
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`}
// defines saturdayFun function declaration as specified
// 1) function exists
// 2) uses the default activity 'roller-skate' when no arguments are passed
// 3) permits the default activity to be overriden

let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
  }  
// defines mondayWork function expression as specified
//  4) function exists
//  5) uses the default activity 'go to the office' when no arguments are passed
//  6) permits the default activity to be overriden

let wrapAdjective = function(highlight="*") {
    return function(adjective="special") {
      return `You are ${highlight}${adjective}${highlight}!`
    }
  }
// defines wrapAdjective function according to the specification
//  7) function exists
//  8) when initialized with '*' creates a function that, when called, wraps an adjective in a highlight
//   9) when initialized with '||' creates a function that, when called, wraps an adjective in a highlight
