function receivesAFunction(callback) {
    callback()
  }
  
  function returnsANamedFunction() {
    return function named() {
    }
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      console.log('The girl has no name.')
    }
  }