const student = {
    name: 'Joes',
    address: 'Somewhere'
  };
  
  function printName(name) {
    console.log(name);
  }
  
  function fun(x)
  {
      console.log(x)
  }

  // Module Exports
  
  // Method 1
  // exports = {}
  // exports = {
  //   printName: [Function printName],
  //   student: {}
  // }
  
  module.exports.printName = printName;
  module.exports.fxn = fun;
  module.exports.student = student;

//   console.log(module);
  // Method 2
  // exports = [Function printName]
  // module.exports = printName;
  
  // Method 3
  // exports.printName = printName;
  // exports = printName; // Not allowed