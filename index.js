const employee = {
  name: 'Sam'
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newEmployee = Object.assign({}, employee); // make a clone of the original employee object
  newEmployee[key] = value; // add the new key-value pair to the cloned object
  return newEmployee; // return the new object
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value; // update the original employee object
  return employee; // return the updated object
  }
  
  function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = Object.assign({}, employee); // make a clone of the original employee object
  delete newEmployee[key]; // delete the specified key from the cloned object
  return newEmployee; // return the new object
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key]; // delete the specified key from the original employee object
  return employee; // return the updated object
  }
  
  // Export the functions so they can be used in other files
  module.exports = {
  updateEmployeeWithKeyAndValue,
  destructivelyUpdateEmployeeWithKeyAndValue,
  deleteFromEmployeeByKey,
  destructivelyDeleteFromEmployeeByKey,
  };