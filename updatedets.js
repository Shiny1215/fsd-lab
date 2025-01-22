function updateEmployeeDetails(employee, newRole) {
    return { ...employee, role: newRole };
}
const employee = { name: 'Shiny', role: 'Software', age: 20, location: 'INDIA' };
const updatedEmployee = updateEmployeeDetails(employee, 'Fesher Engineer');
console.log(updatedEmployee);
