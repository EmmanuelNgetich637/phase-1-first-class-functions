// 1. Function that receives and calls a callback
function receivesAFunction(callback) {
    callback();
  }
  
  // 2. Function that returns a named function
  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("This is a named function");
    };
  }
  
  // 3. NEW: Function that returns an anonymous function
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("This is an anonymous function");
    };
  }
  
  // Export all functions
  module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction
  };